import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CartScreen = () => {
    return (
        <LinearGradient colors = {["#6A5AE0", "#7EC8E3"]} style = {styles.container}>
            <ScrollView contentContainerStyle = {styles.scroll}>

                <Text style = {styles.title}>Your Cart</Text>

                <View style = {styles.cartItem}>
                    <Image source = {{ uri: "" }} style = {styles.foodImage}/>

                    <View style = {styles.info}>
                        <Text style = {styles.name}>Cheese Pizza</Text>
                        <Text style = {styles.price}>R89.99</Text>

                        <View style = {styles.qtyRow}>
                            <TouchableOpacity style = {styles.qtyBtn}><Text style = {styles.qtyText}>-</Text></TouchableOpacity>
                                <Text style = {styles.qty}>1</Text>
                            <TouchableOpacity style = {styles.qtyBtn}><Text style = {styles.qtyText}>+</Text></TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity style = {styles.removeBtn}>
                        <Text style = {styles.removeText}>Remove</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.cartItem}>
                    <Image source = {{ uri: "" }} style = {styles.foodImage}/>

                    <View style = {styles.info}>
                        <Text style = {styles.name}>Beef Burger</Text>
                        <Text style = {styles.price}>R69.99</Text>

                        <View style = {styles.qtyRow}>
                            <TouchableOpacity style = {styles.qtyBtn}><Text style = {styles.qtyText}>-</Text></TouchableOpacity>
                            <Text style = {styles.qty}>2</Text>
                            <TouchableOpacity style = {styles.qtyBtn}><Text style = {styles.qtyText}>+</Text></TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity style = {styles.removeBtn}>
                        <Text style = {styles.removeText}>Remove</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style = {styles.checkoutBtn}>
                    <Text style = {styles.checkoutText}>Proceed to Checkout</Text>
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
        color: "white",
        fontSize: 32,
        fontWeight: "700",
        marginBottom: 25
    },

    cartItem: {
        flexDirection: "row",
        backgroundColor: "rgba(255,255,255,0.15)",
        padding: 15,
        borderRadius: 15,
        marginBottom: 20,
        alignItems: "center"
    },
    foodImage: {
        width: 70,
        height: 70,
        borderRadius: 10
    },
    info: { 
        flex: 1,
        marginLeft: 12 
    },
    name: {
        color: "white",
        fontSize: 18,
        fontWeight: "600"
    },
    price: {
        color: "white",
        opacity: 0.9,
        marginTop: 2
    },

    qtyRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8
    },
    qtyBtn: {
        width: 30,
        height: 30,
        borderRadius: 8,
        backgroundColor: "rgba(255,255,255,0.25)",
        justifyContent: "center",
        alignItems: "center"
    },
    qtyText: {
        color: "white",
        fontSize: 18,
        fontWeight: "700"
    },
    qty: {
        color: "white",
        fontSize: 18,
        marginHorizontal: 10
    },

    removeBtn: {
        paddingHorizontal: 10
    },
    removeText: {
        color: "#FFD1D1",
        fontWeight: "600"
    },

    checkoutBtn: {
        marginTop: 20,
        backgroundColor: "white",
        paddingVertical: 15,
        borderRadius: 12,
        alignItems: "center"
    },
    checkoutText: {
        fontSize: 18,
        fontWeight: "700",
        color: "#6A5AE0"
    }
})

export default CartScreen;