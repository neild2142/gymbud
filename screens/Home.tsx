import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import BottomNav from "../components/BottomNav";
import ScrollableWorkouts from "../components/ScrollableWorkouts";
import TopBar from "../components/TopBar";
import { styles } from "../styles";
import { RootStack } from "./RootStack";

export type HomeStack = StackNavigationProp<RootStack, "Home">;

const Home = () => {
  const navigation = useNavigation<HomeStack>();

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} />
      <ScrollableWorkouts workouts={[1, 2, 3, 4]} />
      <BottomNav />
    </View>
  );
};

export default Home;
