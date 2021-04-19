import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import BottomNav from "./components/BottomNav";
import ScrollableWorkouts from "./components/ScrollableWorkouts";
import TopBar from "./components/TopBar";
import { styles } from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <TopBar />
      <ScrollableWorkouts workouts={[1, 2, 3, 4]} />
      <BottomNav />
      <StatusBar style="auto" />
    </View>
  );
}
