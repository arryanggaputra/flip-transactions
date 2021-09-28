export interface Transaction_Entity {
  id: string;
  amount: number;
  unique_code: number;
  status: Transaction_Status_Entity;
  sender_bank: string;
  account_number: string;
  beneficiary_name: string;
  beneficiary_bank: string;
  remark: string;
  created_at: string;
  completed_at: string;
  fee: number;
}

export enum Transaction_Status_Entity {
  SUCCESS = "SUCCESS",
  PENDING = "PENDING",
}

export interface SortingList_Entity {
  field?: keyof Transaction_Entity;
  title: string;
  orderBy: "asc" | "desc";
}
