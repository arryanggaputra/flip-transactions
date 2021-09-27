import create from "zustand";
import { getTransaction } from "lib/Service/transactions";
import { Transaction_Entity } from "types";

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
  sortField: {
    key: keyof Transaction_Entity | undefined;
    orderBy: "asc" | "desc";
  };
  setSortField: (
    key: keyof Transaction_Entity | undefined,
    orderBy: "asc" | "desc"
  ) => void;
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
        sortField: {
          key: undefined,
          orderBy: "asc",
        },
        searchKeyword: "",
      });
    },

    searchKeyword: "",
    setSearchKeyword: (searchKeyword: string) =>
      set((state) => ({
        ...state,
        searchKeyword,
      })),

    sortField: {
      key: undefined,
      orderBy: "asc",
    },
    setSortField: (key, orderBy) => {
      set({
        sortField: {
          key,
          orderBy,
        },
      });
    },
  })
);

export default useStore;
