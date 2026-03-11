import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ProfileScreen() {
    return (
        <LinearGradient colors = {["#6C63FF", "#78B4FF"]} style = {styles.container}>
            <View style = {styles.card}>
                
                <Image source = {{ uri: "" }} style = {styles.avatar}/>

                <Text style = {styles.name}>Motikoni Mohofe</Text>
                <Text style = {styles.email}>motikoni@gmail.com</Text>

                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>Edit Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.logoutButton}>
                    <Text style = {styles.logoutText}>Logout</Text>
                </TouchableOpacity>

            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20
    },
    card: {
        backgroundColor: "white",
        paddingVertical: 40,
        paddingHorizontal: 25,
        borderRadius: 25,
        alignItems: "center",
        elevation: 7
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 100,
        marginBottom: 15
    },
    name: {
        fontSize: 24,
        fontWeight: "600",
        color: "#333",
        marginBottom: 3
    },
    email: {
        fontSize: 15,
        color: "#777",
        marginBottom: 25
    },
    button: {
        backgroundColor: "#6C63FF",
        paddingVertical: 14,
        paddingHorizontal: 35,
        borderRadius: 12,
        marginBottom: 15
    },
    buttonText: {
        color: "white",
        fontSize: 17,
        fontWeight: "600"
    },
    logoutButton: {
        paddingVertical: 12
    },
    logoutText: {
        color: "#FF5555",
        fontSize: 16,
        fontWeight: "600"
    }
})