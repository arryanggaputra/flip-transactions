import create from "zustand";
import {
  getTransaction,
  getTransactionSortLists,
} from "lib/Service/transactions";
import { SortingList_Entity, Transaction_Entity } from "types";

type Store = {
  /**
   * to load initial data
   */
  initData: () => void;
  /**
   * to perform reset parameter
   */
  resetParams: () => void;
  /**
   * list of transaction
   */
  transactionLists: Transaction_Entity[];

  /**
   * state for search
   */
  searchKeyword: string;
  setSearchKeyword: (searchKeyword: string) => void;

  /**
   * sort params
   */
  selectedSort: SortingList_Entity;
  setSelectedSort: (params: SortingList_Entity) => void;
};

const useStore = create<Store>(
  (set): Store => ({
    transactionLists: [],

    initData: async () => {
      let doRequest = await getTransaction();
      let data = Object.keys(doRequest).map((key) => doRequest[key]);
      set({
        transactionLists: data,
      });
    },

    resetParams: () => {
      set({
        selectedSort: getTransactionSortLists[0],
        searchKeyword: "",
      });
    },

    searchKeyword: "",
    setSearchKeyword: (searchKeyword: string) =>
      set((state) => ({
        ...state,
        searchKeyword,
      })),

    selectedSort: getTransactionSortLists[0],
    setSelectedSort: (params) => {
      set({
        selectedSort: params,
      });
    },
  })
);

export default useStore;
