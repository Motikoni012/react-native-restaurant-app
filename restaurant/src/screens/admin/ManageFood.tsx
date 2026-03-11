import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CustomButton from "../../components/CustomButton";
import { COLORS } from "../../theme/colors";

const dummyFood = [
  { id: "1", name: "Classic Beef Burger" },
  { id: "2", name: "Chocolate Cake" }
]

export default function ManageFood() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Food Items</Text>

      <FlatList
        data={dummyFood}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text style={{ color: COLORS.primary }}>Edit</Text>
          </View>
        )}
      />

      <CustomButton title="Add New Item" onPress={() => {}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15
  },
  item: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  }
})