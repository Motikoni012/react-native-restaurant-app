import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../services/firebase";
import { LinearGradient } from "expo-linear-gradient";

export default function RegisterScreen({ navigation }: any) {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [contact, setContact] = useState("")
    const [address, setAddress] = useState("")
    const [card, setCard] = useState("")

    const handleRegister = async () => {
        if (!email || !password) return alert("Email and password required")

        try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user

        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            name,
            surname,
            email,
            contact,
            address,
            card,
            createdAt: new Date()
        })

        alert("Registration successful!");
        navigation.navigate("Login");
        } catch (err: any) {
            alert(err.message)
        }
    }

    return (
        <ScrollView contentContainerStyle = {styles.container}>
            <Text style = {styles.title}>Create Account</Text>

            <TextInput placeholder = "Name" style = {styles.input} value = {name} onChangeText = {setName}/>
            <TextInput placeholder = "Surname" style = {styles.input} value = {surname} onChangeText = {setSurname}/>
            <TextInput placeholder = "Email" style = {styles.input} value = {email} onChangeText = {setEmail}/>
            <TextInput placeholder = "Password" secureTextEntry style = {styles.input} value = {password} onChangeText = {setPassword}/>
            <TextInput placeholder = "Contact Number" style = {styles.input} value = {contact} onChangeText = {setContact}/>
            <TextInput placeholder = "Address" style = {styles.input} value = {address} onChangeText = {setAddress}/>
            <TextInput placeholder = "Card Details" style = {styles.input} value = {card} onChangeText = {setCard}/>

            <TouchableOpacity onPress = {handleRegister}>
                <LinearGradient colors = {["#6A5FFF", "#4DA8FF"]} style={styles.button}>
                <Text style = {styles.buttonText}>Register</Text>
                </LinearGradient>
            </TouchableOpacity>

            <Text style = {styles.link} onPress = {() => navigation.navigate("Login")}>
                Already have an account? Login
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: "#fff",
        flexGrow: 1,
        justifyContent: "center"
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 24,
        textAlign: "center",
        color: "#1B3C73"
    },
    input: {
        backgroundColor: "#F4F6FA",
        padding: 14,
        borderRadius: 12,
        marginBottom: 12
    },
    button: {
        padding: 16,
        borderRadius: 16,
        alignItems: "center",
        marginTop: 10
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    },
    link: {
        textAlign: "center",
        marginTop: 18,
        color: "#6A5FFF"
    }
})