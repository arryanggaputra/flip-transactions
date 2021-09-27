import create from "zustand";
import { getTransaction } from "lib/Service/transactions";
import { Transaction_Entity } from "types";

type Store = {
  initData: () => void;
  transactionLists: Transaction_Entity[];
  /**
   * state for search
   */
  searchKeyword: string;
  setSearchKeyword: (searchKeyword: string) => void;
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

    searchKeyword: "",
    setSearchKeyword: (searchKeyword: string) =>
      set((state) => ({
        ...state,
        searchKeyword,
      })),
  })
);

export default useStore;
