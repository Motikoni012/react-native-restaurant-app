import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const EditItemOptionsScreen = () => {
    return (
        <LinearGradient colors={["#6A5AE0", "#7EC8E3"]} style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll}>

                <Text style = {styles.title}>Edit Item</Text>

                <Text style = {styles.label}>Size</Text>
                <View style = {styles.optionRow}>
                    {["Small", "Medium", "Large"].map((size) => (
                        <TouchableOpacity key = {size} style = {styles.optionBtn}>
                            <Text style = {styles.optionText}>{size}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <Text style = {styles.label}>Extras</Text>
                <View style = {styles.optionRow}>
                    {["Cheese", "Sauce", "Bacon"].map((extra) => (
                        <TouchableOpacity key = {extra} style = {styles.optionBtn}>
                            <Text style = {styles.optionText}>{extra}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <TouchableOpacity style = {styles.saveBtn}>
                    <Text style = {styles.saveText}>Save Changes</Text>
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

    label: {
        color: "white",
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 10
    },

    optionRow: {
        flexDirection: "row",
        marginBottom: 25,
        flexWrap: "wrap"
    },
    optionBtn: {
        backgroundColor: "rgba(255,255,255,0.2)",
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderRadius: 15,
        marginRight: 10,
        marginBottom: 10
    },
    optionText: {
        color: "white",
        fontWeight: "600"
    },

    saveBtn: {
        marginTop: 10,
        backgroundColor: "white",
        paddingVertical: 15,
        borderRadius: 12,
        alignItems: "center"
    },
    saveText: {
        fontSize: 18,
        fontWeight: "700",
        color: "#6A5AE0"
    }
})

export default EditItemOptionsScreen;