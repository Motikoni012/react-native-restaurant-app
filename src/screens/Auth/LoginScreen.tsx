import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { LoginScreenNavigationProp } from "../../types/navigation";

type Props = {
    navigation: LoginScreenNavigationProp
}

export default function LoginScreen({ navigation }: Props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        if (!email || !password) {
        alert("Please enter email and password")
        return
        }

        console.log("Logging in:", email)
    }

    return (
        <View style = {styles.container}>
            <LinearGradient colors = {["#6A5FFF", "#4DA8FF"]} style = {styles.header}>
                <Text style = {styles.title}>Welcome Back</Text>
                <Text style = {styles.subtitle}>Login to continue</Text>
            </LinearGradient>

            <View style = {styles.form}>
                <Text style = {styles.label}>Email</Text>
                <TextInput style = {styles.input} placeholder = "Enter email" value = {email} onChangeText = {setEmail} autoCapitalize = "none"/>

                <Text style = {styles.label}>Password</Text>
                <TextInput style = {styles.input} placeholder = "Enter password" value = {password} onChangeText = {setPassword} secureTextEntry/>

                <TouchableOpacity onPress = {handleLogin}>
                    <LinearGradient colors = {["#6A5FFF", "#4DA8FF"]} style = {styles.button}>
                        <Text style = {styles.buttonText}>Login</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <View style = {styles.row}>
                    <Text style = {styles.text}>Don't have an account?</Text>
                    <TouchableOpacity onPress = {() => navigation.navigate("Register")}>
                        <Text style = {styles.link}> Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },

  header: {
    paddingTop: 80,
    paddingBottom: 50,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },

  title: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold"
  },

  subtitle: {
    color: "#FFFFFF",
    opacity: 0.8,
    marginTop: 5
  },

  form: {
    marginTop: 40,
    paddingHorizontal: 20
  },

  label: {
    fontSize: 16,
    marginBottom: 6,
    color: "#1F2937"
  },

  input: {
    backgroundColor: "#F4F6FA",
    padding: 12,
    borderRadius: 12,
    marginBottom: 20
  },

  button: {
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold"
  },

  row: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center"
  },

  text: {
    color: "#6B7280"
  },

  link: {
    color: "#4DA8FF",
    fontWeight: "bold"
  }
})