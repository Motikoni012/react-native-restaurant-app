import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";

import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

import { useRoute } from "@react-navigation/native";

export default function CategoryScreen() {
  const route = useRoute<any>()
  const { title, items } = route.params

  const dispatch = useDispatch()

  const [addedId, setAddedId] = useState<string | null>(null)

  const handleAddToCart = (item: any) => {
    dispatch(
      addToCart({
        ...item,
        quantity: 1
      })
    )

    setAddedId(item.id)

    setTimeout(() => {
      setAddedId(null)
    }, 1000)
  }

  const renderItem = ({ item }: any) => {
    const added = addedId === item.id

    return (
      <View style={styles.card}>
        <Image source={item.image} style={styles.image} />

        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>R {item.price}</Text>

        <TouchableOpacity
          style={[styles.button, added && styles.addedButton]}
          onPress={() => handleAddToCart(item)}
        >
          <Text style={styles.buttonText}>
            {added ? "Added to cart" : "Add to cart"}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
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

  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15
  },

  image: {
    width: "100%",
    height: 140,
    borderRadius: 10
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10
  },

  price: {
    fontSize: 16,
    color: "#2e7d32",
    marginVertical: 5
  },

  button: {
    backgroundColor: "#111",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8
  },

  addedButton: {
    backgroundColor: "gray"
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  }
})