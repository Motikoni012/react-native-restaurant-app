import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import { useAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../theme/colors";

export default function ProfileScreen() {
  const { user, logout } = useAuth()
  const navigation: any = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Name</Text>
        <Text>{user?.name || "N/A"}</Text>

        <Text style={styles.label}>Email</Text>
        <Text>{user?.email}</Text>

        <Text style={styles.label}>Address</Text>
        <Text>{user?.address || "Not provided"}</Text>
      </View>

      <CustomButton
        title="My Orders"
        onPress={() => navigation.navigate("Orders")}
      />

      <CustomButton
        title="Logout"
        style={{ backgroundColor: "red" }}
        onPress={logout}
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
    marginBottom: 20
  },

  label: {
    marginTop: 10,
    fontWeight: "bold",
    color: COLORS.gray
  }
})