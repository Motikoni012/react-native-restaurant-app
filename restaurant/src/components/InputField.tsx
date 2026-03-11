import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";

interface Props {
  placeholder: string
  secureTextEntry?: boolean
  value: string
  onChangeText: (text: string) => void
}

export default function InputField({ placeholder, secureTextEntry, value, onChangeText }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        placeholderTextColor={COLORS.gray}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8
  },
  input: {
    backgroundColor: COLORS.white,
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    fontSize: 15
  }
})