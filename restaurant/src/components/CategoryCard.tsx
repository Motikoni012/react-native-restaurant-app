import React from "react";
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../theme/colors";

interface Props {
  name: string
  image: any
  onPress: () => void
}

export default function CategoryCard({ name, image, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    marginRight: 18
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 15
  },

  text: {
    marginTop: 6,
    fontWeight: "600",
    color: COLORS.dark
  }
})