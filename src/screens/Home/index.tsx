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
import useTransactionData from "./hooks/useTransactionData";

type THome = NativeStackNavigationProp<RootStackParamList, RoutingName.HOME>;

const Home = () => {
  const navigation = useNavigation<THome>();
  const { resetParams } = useStore((state) => state);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalSortVisible, setIsModalSortVisible] = useState(false);
  const { transactionData, refreshTransactionData, transactionDataUpdated } =
    useTransactionData();

  useEffect(() => {
    /**
     * Hide modal every data change
     */
    setIsModalSortVisible(false);
    setIsLoading(false);
  }, [transactionData]);

  const onRefreshTransactionLists = useCallback(() => {
    setIsLoading(true);
    refreshTransactionData();
    resetParams();
  }, []);

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
        data={transactionData}
        extraData={transactionDataUpdated}
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
