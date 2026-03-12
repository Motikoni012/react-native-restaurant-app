import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
    title: string
    price: number
    image: string
    onPress: () => void
}

export default function FoodCard({ title, price, image, onPress }: Props) {
    return (
        <TouchableOpacity style = {styles.card} onPress = {onPress}>
            <Image source = {{ uri: image }} style = {styles.img} />

            <View style = {styles.info}>
                <Text style = {styles.title}>{title}</Text>
                <Text style = {styles.price}>R{price}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 16,
    elevation: 6,
    marginBottom: 20
  },
  img: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  },
  info: {
    padding: 10
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333"
  },
  price: {
    marginTop: 5,
    color: "#6C63FF",
    fontWeight: "600"
  }
})