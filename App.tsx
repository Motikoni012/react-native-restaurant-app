import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "./src/screens/Auth/LoginScreen";
import RegisterScreen from "./src/screens/Auth/RegisterScreen";

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions = {{ headerShown: false }}>
                <Stack.Screen name = "Login" component = {LoginScreen} />
                <Stack.Screen name = "Register" component = {RegisterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}