import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { ImageBackground, View } from "react-native";
import BottomNav from "../components/BottomNav";
import ScrollableWorkouts from "../components/ScrollableWorkouts";
import TopBar from "../components/TopBar";
import { styles } from "../styles";
import { RootStack } from "./RootStack";

export type HomeStack = StackNavigationProp<RootStack, "Home">;

const Home = () => {
  const navigation = useNavigation<HomeStack>();

  return (
    <ImageBackground
      source={require("../assets/bg.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        <TopBar navigation={navigation} />
        <ScrollableWorkouts workouts={[1, 2, 3, 4]} />
        <BottomNav />
      </View>
    </ImageBackground>
  );
};

export default Home;
