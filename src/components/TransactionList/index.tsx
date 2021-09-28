import Badge from "components/Badge";
import theme from "lib/Theme";
import formatCurrency from "lib/utils/formatCurrency";
import React, { useCallback } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import styles from "./styles";
import ViewUtils from "components/utils/View";
import formatDate from "lib/utils/formatDate";
import { Transaction_Entity, Transaction_Status_Entity } from "types";

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
        <View style={styles.card__content__title__wrapper}>
          <Text style={styles.card__content__title}>{data.sender_bank}</Text>
          <Image
            source={require("components/icon/arrow.png")}
            style={styles.card__content__title__icon}
          />
          <Text style={styles.card__content__title}>
            {data.beneficiary_bank}
          </Text>
        </View>
        <Text style={styles.card__content__title__name}>
          {data.beneficiary_name}
        </Text>
        <ViewUtils display="flex" flexDirection="row" alignItems="center">
          <Text>{formatCurrency(data.amount)}</Text>
          <ViewUtils
            width={5}
            height={5}
            backgroundColor="black"
            borderRadius={10}
            marginHorizontal={theme.size.xs}
          />
          <Text>{formatDate(data.created_at)}</Text>
        </ViewUtils>
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
