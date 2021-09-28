import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

interface ITransactionList {
  from?: string;
  to?: string;
}

const TransactionList: React.FC<ITransactionList> = (props) => {
  return (
    <View style={styles.card__content__title__wrapper}>
      <Text style={styles.card__content__title}>{props.from}</Text>
      <Image
        source={require("components/icon/arrow.png")}
        style={styles.card__content__title__icon}
      />
      <Text style={styles.card__content__title}>{props.to}</Text>
    </View>
  );
};

export default React.memo(TransactionList);
