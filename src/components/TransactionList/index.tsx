import Badge from "components/Badge";
import React, { useCallback } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import {
  Transaction_Entity,
  Transaction_Status_Entity,
} from "../../types/index";
import styles from "./styles";

interface ITransactionList {
  data: Transaction_Entity;
  onPress?: (data: Transaction_Entity) => void;
}

const TransactionList: React.FC<ITransactionList> = (props) => {
  const { data } = props;

  const onPress = useCallback(() => {
    props.onPress?.(data);
  }, [data]);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View
        style={[
          styles.card__border,
          data.status === Transaction_Status_Entity.PENDING &&
            styles.card__border__fails,
        ]}
      />
      <View style={styles.card__content}>
        <Text style={styles.card__content__title}>
          {data.sender_bank} - {data.beneficiary_bank}
        </Text>
        <Text>{data.beneficiary_name}</Text>
        <Text>{data.amount} - 6 Maret 2020</Text>
      </View>
      {data.status === Transaction_Status_Entity.PENDING ? (
        <Badge variant="secondary" title="Pengecekan" />
      ) : (
        <Badge variant="primary" title="Berhasil" />
      )}
    </TouchableOpacity>
  );
};

export default React.memo(TransactionList);
