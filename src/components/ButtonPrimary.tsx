import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
    title: string
    onPress: () => void
    style?: object
}

export default function ButtonPrimary({ title, onPress, style }: Props) {
    return (
        <TouchableOpacity onPress = {onPress} style = {style}>
            <LinearGradient colors = {["#6C63FF", "#78B4FF"]} style = {styles.button}>
                <Text style = {styles.text}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 14,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600"
    }
})