import useStore from "lib/Store";
import sortGeneric from "lib/utils/sortGeneric";
import { useCallback, useEffect, useState } from "react";
import { Transaction_Entity } from "types";

const useTransactionData = () => {
  const { initData, transactionLists, searchKeyword, selectedSort } = useStore(
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

  const filterAndSort = useCallback(() => {
    let query = searchKeyword.toLowerCase();
    let _data = [...transactionLists].filter((item) => {
      return (
        item.amount.toString().toLowerCase().includes(query) ||
        item.sender_bank.toLowerCase().includes(query) ||
        item.beneficiary_bank.toLowerCase().includes(query) ||
        item.beneficiary_name.toLowerCase().includes(query)
      );
    });

    if (selectedSort.field) {
      _data = _data.sort(sortGeneric(selectedSort.field, selectedSort.orderBy));
    }

    setData(_data);
    setIsDataUpdated(!isDataUpdated);
  }, [transactionLists, selectedSort, searchKeyword, isDataUpdated]);

  useEffect(() => {
    filterAndSort();
  }, [searchKeyword, selectedSort]);

  return {
    transactionData: data,
    transactionDataUpdated: isDataUpdated,
    refreshTransactionData: initData,
  };
};

export default useTransactionData;
