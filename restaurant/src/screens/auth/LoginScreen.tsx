import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton";
import InputField from "../../components/InputField";
import { COLORS } from "../../theme/colors";
import { useAuth } from "../../context/AuthContext";

export default function LoginScreen() {
  const navigation: any = useNavigation()
  const { login } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    try {
      await login(email, password)
    } catch (error: any) {
      Alert.alert("Login Error", error.message)
    }
  }

  return (
    <ImageBackground
      source={require("../../assets/images/auth-bg.jpeg")}
      style={styles.background}
      blurRadius={3}
    >
      <View style={styles.overlay}>
        <Image
          source={require("../../assets/images/logo.jpeg")}
          style={styles.logo}
        />

        <Text style={styles.title}>Welcome Back</Text>

        <InputField
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />

        <InputField
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <CustomButton title="Login" onPress={handleLogin} />

        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.registerText}>
            Don’t have an account? Register
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center"
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 20,
    justifyContent: "center"
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginBottom: 20,
    borderRadius: 60
  },
  title: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },
  registerText: {
    color: COLORS.accent,
    textAlign: "center",
    marginTop: 10
  }
})