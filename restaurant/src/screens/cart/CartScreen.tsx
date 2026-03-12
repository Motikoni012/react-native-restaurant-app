import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton";
import { COLORS } from "../../theme/colors";

export default function CartScreen() {
  const dispatch = useDispatch()
  const navigation = useNavigation<any>()

  const cartItems = useSelector((state: any) => state.cart.items)

  const total = cartItems.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>

      {cartItems.length === 0 ? (
        <Text style={styles.empty}>Cart is empty</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemName}>{item.name}</Text>

              <Text>Qty: {item.quantity}</Text>

              <Text style={styles.total}>
                R {(item.price * item.quantity).toFixed(2)}
              </Text>

              <TouchableOpacity
                onPress={() => dispatch(removeFromCart(item.id))}
              >
                <Text style={styles.remove}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      <Text style={styles.totalText}>
        Total: R {total.toFixed(2)}
      </Text>

      {cartItems.length > 0 && (
        <CustomButton
          title="Checkout"
          onPress={() => navigation.navigate("Checkout")}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff"
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10
  },

  empty: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: COLORS.gray
  },

  item: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },

  itemName: {
    fontWeight: "bold",
    fontSize: 16
  },

  total: {
    color: COLORS.primary,
    fontWeight: "bold",
    marginTop: 5
  },

  remove: {
    color: "red",
    marginTop: 5
  },

  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15
  }
})