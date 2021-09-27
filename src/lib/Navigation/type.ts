import { Transaction_Entity } from "types";

export enum RoutingName {
  HOME = "HOME",
  DETAIL_TRANSACTION = "DETAIL_TRANSACTION",
}

export type RootStackParamList = {
  [RoutingName.HOME]: undefined;
  [RoutingName.DETAIL_TRANSACTION]: {
    data: Transaction_Entity;
  };
};
