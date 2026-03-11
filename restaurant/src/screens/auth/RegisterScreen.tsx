import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputField from "../../components/InputField";
import CustomButton from "../../components/CustomButton";
import { COLORS } from "../../theme/colors";
import { useAuth } from "../../context/AuthContext";

export default function RegisterScreen() {
  const navigation: any = useNavigation()
  const { register } = useAuth()

  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [contact, setContact] = useState("")
  const [address, setAddress] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = async () => {
    try {
      await register(email, password, {
        name,
        surname,
        contact,
        address
      })

      Alert.alert("Success", "Account created!")
    } catch (error: any) {
      Alert.alert("Register Error", error.message)
    }
  }

  return (
    <ImageBackground
      source={require("../../assets/images/auth-bg.jpeg")}
      style={{ flex: 1 }}
      blurRadius={3}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Create Account</Text>

        <InputField placeholder="Name" value={name} onChangeText={setName} />
        <InputField placeholder="Surname" value={surname} onChangeText={setSurname} />
        <InputField placeholder="Email" value={email} onChangeText={setEmail} />
        <InputField placeholder="Contact Number" value={contact} onChangeText={setContact} />
        <InputField placeholder="Address" value={address} onChangeText={setAddress} />
        <InputField placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />

        <CustomButton title="Register" onPress={handleRegister} />

        <Text
          style={styles.loginText}
          onPress={() => navigation.goBack()}
        >
          Already have an account? Login
        </Text>
      </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60
  },
  title: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },
  loginText: {
    color: COLORS.accent,
    textAlign: "center",
    marginTop: 10
  }
})