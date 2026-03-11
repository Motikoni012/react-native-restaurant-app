import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

import { useNavigation, useRoute } from "@react-navigation/native";

export default function ViewItemScreen() {
  const dispatch = useDispatch()
  const navigation = useNavigation<any>()
  const route = useRoute<any>()

  const { item } = route.params

  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...item,
        quantity
      })
    )

    setAdded(true)

    setTimeout(() => {
      setAdded(false)

      navigation.navigate("Main", {
        screen: "Cart"
      })
    }, 1000)
  }

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />

      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>R {item.price}</Text>
      <Text style={styles.description}>{item.description}</Text>

      <View style={styles.quantityContainer}>
        <TouchableOpacity
          onPress={() => quantity > 1 && setQuantity(quantity - 1)}
          style={styles.qtyBtn}
        >
          <Text style={styles.qtyText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.qtyValue}>{quantity}</Text>

        <TouchableOpacity
          onPress={() => setQuantity(quantity + 1)}
          style={styles.qtyBtn}
        >
          <Text style={styles.qtyText}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.cartButton, added && styles.addedButton]}
        onPress={handleAddToCart}
      >
        <Text style={styles.cartButtonText}>
          {added ? "Added to cart" : "Add To Cart"}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },

  image: { width: "100%", height: 250, borderRadius: 12 },

  title: { fontSize: 22, fontWeight: "bold", marginTop: 15 },

  price: { fontSize: 18, marginVertical: 10, color: "#2e7d32" },

  description: { fontSize: 14, color: "#555" },

  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20
  },

  qtyBtn: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 8
  },

  qtyText: { fontSize: 18, fontWeight: "bold" },

  qtyValue: { marginHorizontal: 20, fontSize: 18 },

  cartButton: {
    backgroundColor: "#111",
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },

  addedButton: {
    backgroundColor: "gray"
  },

  cartButtonText: {
    color: "#fff",
    fontWeight: "bold"
  }
})