import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function FoodImage({ source }: { source: string }) {
    return (
        <View style = {styles.container}>
            <Image source = {{ uri: source }} style = {styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 250,
        borderRadius: 20,
        overflow: "hidden",
        elevation: 8,
        backgroundColor: "#eee"
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    }
})