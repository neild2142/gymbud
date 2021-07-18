import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "react-native-gesture-handler";
import Categories from "./src/screens/Categories";
import Home from "./src/screens/Home";
import { RootStack } from "./src/screens/RootStack";
import Workout from "./src/screens/Workout";
import { LogBox } from "react-native";

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

interface Screen {
  name: keyof RootStack;
  component: React.ComponentType<any>;
}

LogBox.ignoreLogs([
  "ReactNativeFiberHostComponent: Calling getNode() on the ref of an Animated component is no longer necessary. You can now directly use the ref instead. This method will be removed in a future release.",
]);

export default function App() {
  const initializeScreen = (screen: Screen) => (
    <Stack.Screen
      name={screen.name}
      component={screen.component}
      options={defaultScreenOptions}
      key={screen.name}
    />
  );

  const screens: Screen[] = [
    {
      name: "Home",
      component: Home,
    },
    {
      name: "Workout",
      component: Workout,
    },
    {
      name: "Categories",
      component: Categories,
    },
  ];

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        {screens.map((screen) => initializeScreen(screen))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
