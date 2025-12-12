import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function OrderSuccessScreen({ navigation }: any) {
    return (
        <LinearGradient colors = {["#6A5AE0", "#7EC8E3"]} style = {styles.container}>
            <View style = {styles.center}>
                
                <View style = {styles.iconContainer}>
                    <Text style = {styles.check}>✓</Text>
                </View>

                <Text style = {styles.title}>Order Placed!</Text>
                <Text style = {styles.subtitle}>Your delicious meal is on its way.</Text>

                <View style = {styles.orderBox}>
                    <Text style = {styles.orderText}>Order ID:</Text>
                    <Text style = {styles.orderId}>#M0T1K2</Text>
                </View>

                <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate("Home")}>
                    <Text style = {styles.buttonText}>Back to Home</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30
    },

    iconContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: "rgba(255,255,255,0.25)",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30
    },
    check: {
        fontSize: 65,
        color: "white",
        fontWeight: "900"
    },

    title: {
        color: "white",
        fontSize: 32,
        fontWeight: "700",
        marginBottom: 5,
        textAlign: "center"
    },
    subtitle: {
        color: "white",
        opacity: 0.9,
        fontSize: 17,
        marginBottom: 25,
        textAlign: "center"
    },

    orderBox: {
        backgroundColor: "rgba(255,255,255,0.2)",
        padding: 15,
        borderRadius: 12,
        marginBottom: 30
    },
    orderText: {
        color: "white",
        opacity: 0.9,
        fontSize: 15
    },
    orderId: {
        color: "white",
        fontSize: 20,
        fontWeight: "700",
        marginTop: 4
    },

    button: {
        backgroundColor: "white",
        paddingVertical: 18,
        paddingHorizontal: 40,
        borderRadius: 14
    },
    buttonText: {
        color: "#6A5AE0",
        fontSize: 18,
        fontWeight: "700"
    }
})