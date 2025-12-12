import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
    title: string
    options: string[]
    selected: string | null
    onSelect: (option: string) => void
}

export default function OptionSelector({title, options, selected, onSelect}: Props) {
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>{title}</Text>

            <View style = {styles.options}>
                {options.map((opt) => (
                <TouchableOpacity key = {opt} style = {[styles.option, selected === opt && styles.selected]} onPress = {() => onSelect(opt)}>
                    <Text style = {selected === opt ? styles.selectedText : styles.text}>
                        {opt}
                    </Text>
                </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    title: {
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 10
    },
    options: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10
    },
    option: {
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 10,
        backgroundColor: "#eee"
    },
    selected: {
        backgroundColor: "#6C63FF"
    },
    text: {
        color: "#333"
    },
    selectedText: {
        color: "white",
        fontWeight: "700"
    }
})