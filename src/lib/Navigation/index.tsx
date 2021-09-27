import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList, RoutingName } from "./type";

import Home from "screens/Home";
import DetailTransaction from "screens/DetailTransaction";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={RoutingName.HOME}
          component={Home}
          options={{
            title: "Daftar Transaksi",
          }}
        />

        <Stack.Screen
          name={RoutingName.DETAIL_TRANSACTION}
          component={DetailTransaction}
          options={{
            title: "Detail Transaction",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
