import { Transaction_Entity } from "types";

/**
 * Define every routing name
 * It's easy for you to navigate between page without remembering the page name
 */
export enum RoutingName {
  HOME = "HOME",
  DETAIL_TRANSACTION = "DETAIL_TRANSACTION",
}

/**
 * Define every screen parameters
 * Example: `DETAIL_TRANSACTION` screen need `data` props that contains transaction data
 */
export type RootStackParamList = {
  [RoutingName.HOME]: undefined;
  [RoutingName.DETAIL_TRANSACTION]: {
    data: Transaction_Entity;
  };
};
