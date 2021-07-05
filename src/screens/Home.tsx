import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Button } from "react-native-elements";
import { styles } from "../../styles";
import Header from "../components/Header";
import ScrollableWorkouts from "../components/ScrollableWorkouts";
import ViewContainer from "../components/ViewContainer";
import { RootStack } from "./RootStack";

export type HomeStack = StackNavigationProp<RootStack, "Home">;

const Home = () => {
  const navigation = useNavigation<HomeStack>();

  return (
    <ViewContainer>
      <Header title="Welcome Back, Neil!">
        <Button
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          title="New"
          onPress={() => navigation.navigate("ExerciseList")}
        />
      </Header>
      <ScrollableWorkouts workouts={[1, 2, 3, 4]} />
    </ViewContainer>
  );
};

export default Home;
