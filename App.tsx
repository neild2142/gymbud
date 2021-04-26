import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "react-native-gesture-handler";
import Home from "./screens/Home";
import NewWorkout from "./screens/NewWorkout";
import { RootStack } from "./screens/RootStack";

const Stack = createStackNavigator<RootStack>();

const theme = {
  dark: true,
  colors: {
    primary: "white",
    background: "white",
    card: "#303A52",
    text: "white",
    border: "black",
    notification: "red",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="New" component={NewWorkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
