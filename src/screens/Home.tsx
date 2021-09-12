import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import HomeHeader from "../components/home/HomeHeader";
import ScrollableWorkouts from "../components/home/ScrollableWorkouts";
import ViewContainer from "../components/shared/ViewContainer";
import { RootStack } from "./RootStack";

export type HomeStack = StackNavigationProp<RootStack, "Home">;

const Home = () => {
  const navigation = useNavigation<HomeStack>();

  const newWorkout = () => {
    navigation.navigate("Workout", { exercises: null });
  };

  return (
    <ViewContainer>
      <HomeHeader next={newWorkout} />
      <ScrollableWorkouts workouts={[1, 2, 3, 4]} />
    </ViewContainer>
  );
};

export default Home;
