import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, ActivityIndicator } from "react-native";

import { useAuth } from "../context/AuthContext";

import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";

import MainTabs from "./MainTabs";

import ViewItemScreen from "../screens/home/ViewItemScreen";
import CategoryScreen from "../screens/cartegory/CategoryScreen";
import CheckoutScreen from "../screens/checkout/CheckoutScreen";
import OrderSuccessScreen from "../screens/checkout/OrderSuccessScreen";
import OrderHistory from "../screens/orders/OrderHistory";

import AdminDashboard from "../screens/admin/AdminDashboard";

const Stack = createNativeStackNavigator()

export default function RootNavigator() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user ? (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Main"
              component={MainTabs}
              options={{ headerShown: false }}
            />

            <Stack.Screen name="ViewItem" component={ViewItemScreen} />

            <Stack.Screen name="Category" component={CategoryScreen} />

            <Stack.Screen name="Checkout" component={CheckoutScreen} />

            <Stack.Screen
              name="OrderSuccess"
              component={OrderSuccessScreen}
            />

            <Stack.Screen name="Orders" component={OrderHistory} />

            {user.role === "admin" && (
              <Stack.Screen name="Admin" component={AdminDashboard} />
            )}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}