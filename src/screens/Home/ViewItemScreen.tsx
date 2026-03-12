import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";
import FoodImage from "../../components/FoodImage";
import OptionSelector from "../../components/OptionSelector";
import QuantitySelector from "../../components/QuantitySelector";
import ButtonPrimary from "../../components/ButtonPrimary";

export default function ViewItemScreen({ route, navigation }: any) {
    const { item } = route.params;

    const [side, setSide] = useState<string | null>(null)
    const [drink, setDrink] = useState<string | null>(null)
    const [extra, setExtra] = useState<string | null>(null)
    const [quantity, setQuantity] = useState(1)

    return (
        <ScrollView style = {styles.container}>
            <FoodImage source = {item.image} />

            <View style = {styles.info}>
                <Text style = {styles.title}>{item.title}</Text>
                <Text style = {styles.price}>R{item.price}</Text>
                <Text style = {styles.desc}>
                    A delicious meal made with fresh ingredients. Customize your order below.
                </Text>
            </View>

            <OptionSelector title = "Choose a Side" options = {["Chips", "Salad", "Rice"]} selected = {side} onSelect = {setSide}/>

            <OptionSelector title = "Choose a Drink" options = {["Coke", "Fanta", "Water"]} selected = {drink} onSelect = {setDrink}/>

            <OptionSelector title = "Add Extras" options = {["Extra Cheese +10", "Extra Sauce +5", "Extra Chips +15"]} selected = {extra} onSelect = {setExtra}/>

            <Text style = {styles.label}>Quantity</Text>
            <QuantitySelector quantity = {quantity} setQuantity = {setQuantity} />

            <ButtonPrimary title = "Add to Cart" onPress = {() => {
                navigation.navigate("Cart") 
            }} style = {{ marginTop: 25, marginBottom: 40 }}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F8F8",
        padding: 20 
    },

    info: {
        marginVertical: 15 
    },

    title: {
        fontSize: 26,
        fontWeight: "800",
        color: "#333"
    },

    price: { 
        fontSize: 20,
        color: "#6C63FF",
        marginTop: 5, 
        fontWeight: "700" 
    },

    desc: {
        marginTop: 10,
        fontSize: 15,
        color: "#666",
        lineHeight: 20
    },

    label: {
        fontSize: 17,
        fontWeight: "700",
        marginTop: 20,
        marginBottom: 10
    }
})