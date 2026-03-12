import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import HomeScreen from "../screens/home/HomeScreen";
import CartScreen from "../screens/cart/CartScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import { COLORS } from "../theme/colors";

const Tab = createBottomTabNavigator()

export default function MainTabs() {
  const cartItems = useSelector((state: any) => state.cart.items || [])

  const itemCount = cartItems.reduce(
    (total: number, item: any) => total + (item.quantity || 0),
    0
  )

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View>
              <Ionicons name="cart-outline" size={size} color={color} />

              {itemCount > 0 && (
                <View
                  style={{
                    position: "absolute",
                    right: -10,
                    top: -5,
                    backgroundColor: "red",
                    borderRadius: 10,
                    paddingHorizontal: 6,
                    paddingVertical: 1
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 11,
                      fontWeight: "bold"
                    }}
                  >
                    {itemCount}
                  </Text>
                </View>
              )}
            </View>
          )
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}