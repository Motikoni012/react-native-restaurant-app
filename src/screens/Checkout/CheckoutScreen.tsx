import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function CheckoutScreen() {
    return (
        <LinearGradient colors={["#6A5AE0", "#7EC8E3"]} style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll}>

                <Text style = {styles.title}>Checkout</Text>

                <View style = {styles.card}>
                    <Text style = {styles.sectionTitle}>Order Summary</Text>

                    <View style = {styles.row}>
                        <Text style = {styles.label}>Cheese Pizza</Text>
                        <Text style = {styles.value}>R89.99</Text>
                    </View>

                    <View style = {styles.row}>
                        <Text style = {styles.label}>Beef Burger</Text>
                        <Text style = {styles.value}>R69.99</Text>
                    </View>

                    <View style = {styles.row}>
                        <Text style = {styles.label}>Subtotal</Text>
                        <Text style = {styles.value}>R159.98</Text>
                    </View>

                    <View style = {styles.row}>
                        <Text style = {styles.label}>Delivery</Text>
                        <Text style = {styles.value}>R15.00</Text>
                    </View>

                    <View style = {[styles.row, styles.totalRow]}>
                        <Text style = {styles.totalLabel}>Total</Text>
                        <Text style = {styles.totalValue}>R174.98</Text>
                    </View>
                </View>

                <View style = {styles.card}>
                    <Text style = {styles.sectionTitle}>Delivery Details</Text>
                    <Text style = {styles.subText}>927 Main Street, Johannesburg</Text>
                    <Text style = {styles.subText}>Estimated: 20-30 min</Text>
                </View> 

                <View style = {styles.card}>
                    <Text style = {styles.sectionTitle}>Payment Method</Text>

                    <View style = {styles.paymentRow}>
                        <View style = {styles.circle} />
                        <Text style = {styles.payOption}>Credit / Debit Card</Text>
                    </View>

                    <View style = {styles.paymentRow}>
                        <View style = {styles.circle} />
                        <Text style = {styles.payOption}>Cash on Delivery</Text>
                    </View>
                </View>

                <TouchableOpacity style = {styles.placeOrderBtn}>
                    <Text style = {styles.placeOrderText}>Place Order</Text>
                </TouchableOpacity>

            </ScrollView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1 
    },
    scroll: { 
        padding: 20 
    },

    title: {
        fontSize: 32,
        fontWeight: "700",
        color: "white",
        marginBottom: 25
    },

    card: {
        backgroundColor: "rgba(255,255,255,0.15)",
        padding: 20,
        borderRadius: 20,
        marginBottom: 20
    },
    sectionTitle: {
        color: "white",
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 15
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8
    },
    label: {
        color: "white",
        fontSize: 16
    },
    value: {
        color: "white",
        fontSize: 16,
        fontWeight: "600"
    },
    totalRow: {
        marginTop: 10,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: "rgba(255,255,255,0.3)"
    },
    totalLabel: {
        color: "white",
        fontSize: 18,
        fontWeight: "700"
    },
    totalValue: {
        color: "white",
        fontSize: 18,
        fontWeight: "700"
    },

    subText: {
        color: "white",
        opacity: 0.9,
        marginBottom: 5,
        fontSize: 15
    },

    paymentRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12
    },
    circle: {
        width: 18,
        height: 18,
        borderRadius: 12,
        backgroundColor: "rgba(255,255,255,0.4)",
        marginRight: 12
    },
    payOption: {
        color: "white",
        fontSize: 16
    },

    placeOrderBtn: {
        backgroundColor: "white",
        paddingVertical: 18,
        borderRadius: 15,
        alignItems: "center",
        marginTop: 10
    },
    placeOrderText: {
        fontSize: 18,
        fontWeight: "700",
        color: "#6A5AE0"
    }
})