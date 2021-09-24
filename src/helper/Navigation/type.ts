export enum RoutingName {
  HOME = "HOME",
  DETAIL_TRANSACTION = "DETAIL_TRANSACTION",
}

export type RootStackParamList = {
  [RoutingName.HOME]: undefined;
  [RoutingName.DETAIL_TRANSACTION]: undefined;
};
