import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import CustomButton from "../../components/CustomButton";
import { COLORS } from "../../theme/colors";
import { useNavigation } from "@react-navigation/native";

export default function OrderSuccessScreen() {
  const navigation: any = useNavigation()

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/order-success.jpeg")}
        style={styles.image}
      />
      <Text style={styles.text}>Order Placed Successfully!</Text>

      <CustomButton
        title="Back to Home"
        onPress={() => navigation.navigate("Main")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: COLORS.background
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  }
})