import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { COLORS } from "../theme/colors";

export default function FoodCard({ item, onPress }: any) {
  const dispatch = useDispatch()
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...item,
        quantity: 1
      })
    )

    setAdded(true)

    setTimeout(() => {
      setAdded(false)
    }, 1000)
  }

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={item.image} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>R {item.price}</Text>

        <TouchableOpacity
          style={[styles.button, added && styles.addedButton]}
          onPress={handleAddToCart}
        >
          <Text style={styles.buttonText}>
            {added ? "Added to cart" : "Add to Cart"}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 15,
    overflow: "hidden",
    elevation: 2
  },

  image: {
    width: "100%",
    height: 150
  },

  info: {
    padding: 12
  },

  name: {
    fontSize: 18,
    fontWeight: "bold"
  },

  price: {
    fontSize: 16,
    color: "#2e7d32",
    marginVertical: 5
  },

  button: {
    marginTop: 8,
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 8,
    alignItems: "center"
  },

  addedButton: {
    backgroundColor: "gray"
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  }
})