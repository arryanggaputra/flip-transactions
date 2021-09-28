import React, { useCallback } from "react";
import { Alert, Clipboard } from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Text from "components/utils/Text";
import View from "components/utils/View";
import { RootStackParamList, RoutingName } from "lib/Navigation/type";
import theme from "lib/Theme";
import { Image, TouchableOpacity } from "react-native";
import formatCurrency from "lib/utils/formatCurrency";
import formatDate from "lib/utils/formatDate";
import TransactionBankName from "components/TransactionBankName";

type TDetailTransaction = NativeStackNavigationProp<
  RootStackParamList,
  RoutingName.DETAIL_TRANSACTION
>;

const DetailTransaction: React.FC<{
  route: RouteProp<RootStackParamList, RoutingName.DETAIL_TRANSACTION>;
}> = (props) => {
  const navigation = useNavigation<TDetailTransaction>();
  const { data } = props.route.params;

  const copyTransactionId = useCallback(async () => {
    await Clipboard.setString(data.id);
    Alert.alert("Berhasil Disalin");
  }, [data]);

  return (
    <>
      <View marginTop={theme.size.xl} backgroundColor={theme.colors.white}>
        <View
          padding={theme.size.xl}
          borderBottomWidth={1}
          borderBottomColor={theme.colors.lightGray}
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <Text fontWeight="bold" paddingRight={theme.size.md}>
            ID TRANSAKSI: #{data.id}
          </Text>
          <TouchableOpacity onPress={copyTransactionId}>
            <Image
              source={require("components/icon/copy.png")}
              style={{ width: 13, height: 16 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View
          justifyContent="space-between"
          display="flex"
          flexDirection="row"
          alignItems="center"
          padding={theme.size.xl}
          borderBottomWidth={1}
          borderBottomColor={theme.colors.lightGray}
        >
          <Text fontWeight="bold">DETAIL TRANSAKSI</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text color={theme.colors.orange}>Tutup</Text>
          </TouchableOpacity>
        </View>

        <View padding={theme.size.xl}>
          <View marginBottom={theme.size.xl}>
            <TransactionBankName
              from={data.sender_bank}
              to={data.beneficiary_bank}
            />
          </View>
          <View flexDirection="row" marginBottom={theme.size.xl}>
            <View flex={2}>
              <Text fontWeight="bold">{data.beneficiary_name}</Text>
              <Text>{data.account_number}</Text>
            </View>
            <View flex={1}>
              <Text fontWeight="bold">NOMINAL</Text>
              <Text>{formatCurrency(data.amount)}</Text>
            </View>
          </View>
          <View flexDirection="row" marginBottom={theme.size.xl}>
            <View flex={2}>
              <Text fontWeight="bold">Berita Transfer</Text>
              <Text>{data.remark}</Text>
            </View>
            <View flex={1}>
              <Text fontWeight="bold">KODE UNIK</Text>
              <Text>{data.unique_code}</Text>
            </View>
          </View>
          <View flexDirection="row">
            <View flex={2}>
              <Text fontWeight="bold">Waktu Dibuat</Text>
              <Text>{formatDate(data.created_at)}</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default DetailTransaction;
