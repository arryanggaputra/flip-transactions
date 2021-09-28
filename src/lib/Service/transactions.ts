import { SortingList_Entity } from "types";

export const getTransaction = async () => {
  return fetch("https://nextar.flip.id/frontend-test", {
    method: "GET",
  }).then((res) => res.json());
};

export const getTransactionSortLists: Array<SortingList_Entity> = [
  {
    title: "URUTKAN",
    orderBy: "asc",
  },
  {
    title: "Nama A-Z",
    field: "beneficiary_name",
    orderBy: "asc",
  },
  {
    title: "Nama Z-A",
    field: "beneficiary_name",
    orderBy: "desc",
  },
  {
    title: "Tanggal Terbaru",
    field: "created_at",
    orderBy: "desc",
  },
  {
    title: "Tanggal Terlama",
    field: "created_at",
    orderBy: "asc",
  },
];
