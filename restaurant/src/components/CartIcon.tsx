import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

export default function CartIcon({ navigation }: any) {
  const cartItems = useSelector((state: any) => state.cart.items)

  const itemCount = cartItems.reduce(
    (total: number, item: any) => total + item.quantity,
    0
  )

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Cart")}
    >
      <Ionicons name="cart-outline" size={26} color="black" />

      {itemCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{itemCount}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginRight: 15
  },

  badge: {
    position: "absolute",
    right: -8,
    top: -5,
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2
  },

  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold"
  }
})