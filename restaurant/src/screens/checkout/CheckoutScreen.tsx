import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../services/firebase";
import { clearCart } from "../../store/cartSlice";
import { useAuth } from "../../context/AuthContext";
import { COLORS } from "../../theme/colors";

export default function CheckoutScreen({ navigation }: any) {
  const dispatch = useDispatch()
  const { user } = useAuth()

  const cartItems = useSelector((state: any) => state.cart.items || [])

  const total = cartItems.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  )

  const placeOrder = async () => {
    console.log("PLACE ORDER PRESSED")

    if (!user) {
      Alert.alert("Error", "User not logged in.")
      return
    }

    if (cartItems.length === 0) {
      Alert.alert("Cart Empty", "Add items before placing an order.")
      return
    }

    try {
      const orderData = {
        userId: user.uid,
        items: cartItems,
        total: total,
        status: "pending",
        createdAt: serverTimestamp()
      }

      console.log("ORDER DATA:", orderData)

      await addDoc(collection(db, "orders"), orderData)

      console.log("ORDER SUCCESS")

      dispatch(clearCart())

      navigation.replace("OrderSuccess")
    } catch (error: any) {
      console.log("ORDER ERROR:", error)

      Alert.alert("Error", error.message || "Failed to place order.")
    }
  }

  const renderItem = ({ item }: any) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>

      <Text style={styles.details}>
        {item.quantity} x R{item.price}
      </Text>

      <Text style={styles.price}>R{item.price * item.quantity}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>

      {cartItems.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />

          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalAmount}>R{total}</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={placeOrder}>
            <Text style={styles.buttonText}>Place Order</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },

  empty: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 50
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },

  name: {
    fontSize: 16,
    fontWeight: "bold"
  },

  details: {
    fontSize: 14,
    color: "#666"
  },

  price: {
    fontSize: 16,
    fontWeight: "bold"
  },

  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingVertical: 10,
    borderTopWidth: 2,
    borderTopColor: "#eee"
  },

  totalText: {
    fontSize: 18,
    fontWeight: "bold"
  },

  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.primary
  },

  button: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center"
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
})