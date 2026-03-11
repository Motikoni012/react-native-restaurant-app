import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { COLORS } from "../../theme/colors";
import { useNavigation } from "@react-navigation/native";

export default function AdminDashboard() {
  const navigation: any = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Dashboard</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Orders</Text>
        <Text style={styles.cardValue}>120</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Revenue</Text>
        <Text style={styles.cardValue}>R 12,450</Text>
      </View>

      <CustomButton
        title="Manage Food Items"
        onPress={() => navigation.navigate("ManageFood")}
      />

      <CustomButton
        title="View Orders"
        onPress={() => navigation.navigate("AdminOrders")}
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  card: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3
  },
  cardTitle: {
    color: COLORS.gray
  },
  cardValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.primary
  }
})