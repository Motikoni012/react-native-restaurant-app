import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = () => {
    return (
        <LinearGradient colors = {["#6A5AE0", "#7EC8E3"]} style = {styles.container}>
            <ScrollView contentContainerStyle = {styles.scroll}>
                
                <View style = {styles.header}>
                    <Text style = {styles.title}>Discover Food</Text>
                    <Text style = {styles.subtitle}>Find your next delicious meal</Text>
                </View>

                <View style = {styles.section}>
                    <Text style = {styles.sectionTitle}>Categories</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
                        {["Pizza", "Burgers", "Sushi", "Drinks"].map((item, index) => (
                            <TouchableOpacity key = {index} style = {styles.category}>
                                <Text style = {styles.categoryText}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                <View style = {styles.section}>
                    <Text style = {styles.sectionTitle}>Featured</Text>
                    
                    <View style = {styles.card}>
                        <Image source = {{ uri: "" }} style = {styles.foodImage}/>
                        <View style = {styles.cardInfo}>
                            <Text style = {styles.cardTitle}>Cheese Pizza</Text>
                            <Text style = {styles.cardPrice}>R89.99</Text>
                        </View>
                    </View>

                    <View style = {styles.card}>
                        <Image source = {{ uri: "" }} style = {styles.foodImage}/>
                        <View style = {styles.cardInfo}>
                            <Text style = {styles.cardTitle}>Beef Burger</Text>
                            <Text style = {styles.cardPrice}>R69.99</Text>
                        </View>
                    </View>

                </View>

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
    header: {
        marginBottom: 25
    },
    title: {
        fontSize: 32,
        fontWeight: "700",
        color: "white"
    },
    subtitle: {
        fontSize: 16,
        color: "white",
        opacity: 0.8,
        marginTop: 4
    },

    section: {
        marginBottom: 25
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: "700",
        color: "white",
        marginBottom: 10
    },

    category: {
        backgroundColor: "rgba(255,255,255,0.2)",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginRight: 10
    },
    categoryText: {
        color: "white",
        fontWeight: "600"
    },

    card: {
        backgroundColor: "rgba(255,255,255,0.15)",
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    foodImage: {
        width: 70,
        height: 70,
        borderRadius: 10
    },
    cardInfo: {
        marginLeft: 15
    },
    cardTitle: {
        color: "white",
        fontSize: 18,
        fontWeight: "600"
    },
    cardPrice: {
        color: "white",
        opacity: 0.9,
        marginTop: 5
    },
})

export default HomeScreen;