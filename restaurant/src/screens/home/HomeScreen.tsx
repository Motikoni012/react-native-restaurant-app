import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import CategoryCard from "../../components/CategoryCard";
import FoodCard from "../../components/FoodCard";

import {
  categories,
  burgers,
  desserts,
  drinks,
  mains,
  starters,
} from "../../data/food";

import { COLORS } from "../../theme/colors";

export default function HomeScreen() {
  const navigation = useNavigation<any>()

  const openCategory = (category: any) => {
    let items: any = []

    if (category.name === "Burgers") items = burgers
    if (category.name === "Desserts") items = desserts
    if (category.name === "Drinks") items = drinks
    if (category.name === "Mains") items = mains
    if (category.name === "Starters") items = starters

    navigation.navigate("Category", {
      title: category.name,
      items
    })
  }

  const popularFoods = [
    burgers[0],
    mains[0],
    starters[1],
    desserts[0]
  ]

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.sectionTitle}>Categories</Text>

      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryCard
            name={item.name}
            image={item.image}
            onPress={() => openCategory(item)}
          />
        )}
      />

      <Text style={styles.sectionTitle}>Popular Items</Text>

      {popularFoods.map((item) => (
        <FoodCard
          key={item.id}
          item={item}
          onPress={() =>
            navigation.navigate("ViewItem", { item })
          }
        />
      ))}

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 15
  }
})