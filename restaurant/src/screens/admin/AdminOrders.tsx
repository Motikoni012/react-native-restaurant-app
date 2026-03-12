import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { COLORS } from "../../theme/colors";

const dummyOrders = [
  { id: "1", user: "John Doe", total: 180 },
  { id: "2", user: "Jane Smith", total: 240 }
]

export default function AdminOrders() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order History</Text>

      <FlatList
        data={dummyOrders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>User: {item.user}</Text>
            <Text style={{ color: COLORS.primary }}>
              Total: R {item.total}
            </Text>
          </View>
        )}
      />
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
  card: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  }
})