import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import "react-native-gesture-handler";
import ViewContainer from "./components/ViewContainer";
import ExerciseList from "./screens/ExerciseList";
import Home from "./screens/Home";
import { StyleSheet } from "react-native";
import NewWorkout from "./screens/NewWorkout";
import { RootStack } from "./screens/RootStack";

const Stack = createStackNavigator<RootStack>();

const defaultScreenOptions = {
  headerShown: false,
};

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
        <Stack.Screen
          name="Home"
          component={Home}
          options={defaultScreenOptions}
        />
        <Stack.Screen
          name="New"
          component={NewWorkout}
          options={defaultScreenOptions}
        />
        <Stack.Screen
          name="ExerciseList"
          component={ExerciseList}
          options={defaultScreenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
