import React, { useCallback, useEffect, useState } from "react";
import { FlatList, View } from "react-native";
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

type THome = NativeStackNavigationProp<RootStackParamList, RoutingName.HOME>;

const Home = () => {
  const navigation = useNavigation<THome>();

  const { initData, transactionLists, searchKeyword } = useStore(
    (state) => state
  );

  const [data, setData] = useState<Transaction_Entity[]>([]);
  const [isDataUpdated, setIsDataUpdated] = useState(false);

  useEffect(() => {
    initData();
  }, []);

  useEffect(() => {
    setData(transactionLists);
  }, [transactionLists]);

  useEffect(() => {
    setIsDataUpdated(!data);
  }, [data]);

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

  const renderItem = ({ item }: { item: Transaction_Entity }) => {
    return <TransactionList onPress={onPressTransactionRow} data={item} />;
  };

  const ListHeaderComponent = () => {
    return (
      <ViewUtils marginBottom={theme.size.lg}>
        <SearchBar />
      </ViewUtils>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        extraData={isDataUpdated}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        onEndReachedThreshold={0.5}
        ItemSeparatorComponent={() => <ViewUtils height={theme.size.lg} />}
        contentContainerStyle={{ padding: theme.size.lg }}
      />
    </View>
  );
};

export default Home;
