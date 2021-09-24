import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList, RoutingName } from "helper/Navigation/type";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type THome = NativeStackNavigationProp<RootStackParamList, RoutingName.HOME>;

const Home = () => {
  const navigation = useNavigation<THome>();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(RoutingName.DETAIL_TRANSACTION);
        }}
      >
        <Text>Go to detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
