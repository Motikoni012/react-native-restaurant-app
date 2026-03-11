import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useAuth } from "../../context/AuthContext";
import { getUserOrders } from "../../services/orderService";
import { COLORS } from "../../theme/colors";

export default function OrderHistory() {
  const { user } = useAuth()

  const [orders, setOrders] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadOrders()
  }, [])

  const loadOrders = async () => {
    try {
      const data = await getUserOrders(user.uid)
      setOrders(data)
    } catch (error) {
      console.log("Order fetch error:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Orders</Text>

      {orders.length === 0 ? (
        <Text style={styles.empty}>No orders yet</Text>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.orderId}>
                Order ID: {item.id}
              </Text>

              <Text style={styles.total}>
                Total: R {item.total}
              </Text>

              <Text>Status: {item.status}</Text>

              <Text>
                Items: {item.items?.length || 0}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15
  },

  empty: {
    textAlign: "center",
    marginTop: 40,
    color: COLORS.gray
  },

  card: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2
  },

  orderId: {
    fontSize: 14,
    color: COLORS.gray,
    marginBottom: 5
  },

  total: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 5
  }
})