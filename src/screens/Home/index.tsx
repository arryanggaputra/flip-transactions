import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FlatList, View, RefreshControl, Modal } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList, RoutingName } from "lib/Navigation/type";
import TransactionList from "components/TransactionList";
import styles from "lib/Styles";
import { Transaction_Entity } from "types";
import theme from "lib/Theme";
import useStore from "lib/Store";
import SearchBar from "components/SearchBar";
import ViewUtils from "components/utils/View";
import ModalSort from "./components/ModalSort";
import sortGeneric from "lib/utils/sortGeneric";

type THome = NativeStackNavigationProp<RootStackParamList, RoutingName.HOME>;

const Home = () => {
  const navigation = useNavigation<THome>();

  const { initData, transactionLists, searchKeyword, sortField, resetParams } =
    useStore((state) => state);

  const [data, setData] = useState<Transaction_Entity[]>([]);
  const [isDataUpdated, setIsDataUpdated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalSortVisible, setIsModalSortVisible] = useState(false);

  useEffect(() => {
    initData();
  }, []);

  const doFeedData = useCallback(() => {
    setData(transactionLists);
  }, [transactionLists]);

  const doSortingData = useCallback(
    (field: keyof Transaction_Entity, orderBy: "asc" | "desc") => {
      let _data = [...data].sort(sortGeneric(field, orderBy));
      setData(_data);
    },
    [data]
  );

  useEffect(() => {
    if (!sortField.key) {
      doFeedData();
      return;
    }
    doSortingData(sortField.key, sortField.orderBy);
  }, [transactionLists, sortField]);

  useEffect(() => {
    /**
     * Hide modal every data change
     */
    setIsModalSortVisible(false);
    setIsDataUpdated(!data);
    setIsLoading(false);
  }, [data]);

  const onRefreshTransactionLists = useCallback(() => {
    setIsLoading(true);
    initData();
    resetParams();
  }, []);

  const searchByKeyword = useCallback(
    (query) => {
      let data = transactionLists.filter((item) => {
        return (
          item.amount.toString().toLowerCase().includes(query) ||
          item.sender_bank.toLowerCase().includes(query) ||
          item.beneficiary_bank.toLowerCase().includes(query) ||
          item.beneficiary_name.toLowerCase().includes(query)
        );
      });
      setData(data);
    },
    [transactionLists]
  );

  useEffect(() => {
    let query = searchKeyword.toLowerCase();
    searchByKeyword(query);
  }, [searchKeyword]);

  const onPressTransactionRow = useCallback((data: Transaction_Entity) => {
    navigation.navigate(RoutingName.DETAIL_TRANSACTION, {
      data,
    });
  }, []);

  const onShowModalSort = useCallback(() => {
    setIsModalSortVisible(true);
  }, []);

  const onCloseModalSort = useCallback(() => {
    setIsModalSortVisible(false);
  }, []);

  const renderItem = ({ item }: { item: Transaction_Entity }) => {
    return <TransactionList onPress={onPressTransactionRow} data={item} />;
  };

  const ListHeaderComponent = useMemo(() => {
    return (
      <ViewUtils marginBottom={theme.size.lg}>
        <SearchBar onPressSorting={onShowModalSort} />
      </ViewUtils>
    );
  }, []);

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalSortVisible}
        onRequestClose={onCloseModalSort}
      >
        <ModalSort onClose={onCloseModalSort} />
      </Modal>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={onRefreshTransactionLists}
          />
        }
        keyExtractor={(item) => item.id}
        data={data}
        extraData={isDataUpdated}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        onEndReachedThreshold={0.5}
        ItemSeparatorComponent={() => <ViewUtils height={theme.size.md} />}
        contentContainerStyle={{ padding: theme.size.md }}
      />
    </View>
  );
};

export default Home;
