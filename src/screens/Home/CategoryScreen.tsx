import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FoodCard from "../../components/FoodCard";

const CATEGORIES = [
    { id: "1", title: "Burgers" },
    { id: "2", title: "Drinks" },
    { id: "3", title: "Desserts" },
    { id: "4", title: "Starters" },
    { id: "5", title: "Mains" },
    { id: "6", title: "Pasta" }
]

const SAMPLE_FOOD = [
    {
        id: "101",
        title: "Cheese Burger",
        price: 85,
        image: "CheeseBurger.jpg"
    },
    {
        id: "102",
        title: "Chicken Burger",
        price: 79,
        image: "ChickenBurger.jpg"
    }
]

export default function CategoryScreen({ navigation, route }: any) {
    const categoryName = route.params?.category || "Category"

    return (
        <View style = {styles.container}>
            <LinearGradient colors = {["#6C63FF", "#78B4FF"]} style = {styles.header}>
                <TouchableOpacity style = {styles.backBtn} onPress = {() => navigation.goBack()}>
                    <Text style = {styles.backText}>←</Text>
                </TouchableOpacity>

                <Text style={styles.headerTitle}>{categoryName}</Text>
            </LinearGradient>

            <View style={styles.content}>
                <FlatList numColumns = {2} columnWrapperStyle = {{ justifyContent: "space-between" }} data = {SAMPLE_FOOD} keyExtractor = {(item) => item.id} renderItem={({ item }) => (
                    <FoodCard title = {item.title} price = {item.price} image = {item.image} onPress = {() => 
                        navigation.navigate("ViewItem", {
                            itemId: item.id,
                            item
                        })
                    }/>
                )}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#F8F8F8" },

    header: {
        height: 120,
        paddingTop: 50,
        paddingHorizontal: 20,
        justifyContent: "center"
    },

    backBtn: {
        position: "absolute",
        top: 50,
        left: 20,
        padding: 6
    },

    backText: {
        color: "white",
        fontSize: 22,
        fontWeight: "700"
    },

    headerTitle: {
        fontSize: 26,
        color: "white",
        fontWeight: "800",
        textAlign: "center"
    },

    content: {
        flex: 1,
        padding: 20
    }
})
