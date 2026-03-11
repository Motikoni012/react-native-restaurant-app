import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
    quantity: number
    setQuantity: (q: number) => void
}

export default function QuantitySelector({ quantity, setQuantity }: Props) {
    return (
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.btn} onPress = {() => setQuantity(Math.max(1, quantity - 1))}>
                <Text style={styles.btnText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.qty}>{quantity}</Text>

            <TouchableOpacity style = {styles.btn} onPress = {() => setQuantity(quantity + 1)}>
                <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20
  },
  btn: {
    backgroundColor: "#6C63FF",
    width: 38,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  btnText: {
    color: "white",
    fontSize: 20,
    fontWeight: "700"
  },
  qty: {
    fontSize: 20,
    fontWeight: "700"
  }
})