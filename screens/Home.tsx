import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import Header from "../components/Header";
import ScrollableWorkouts from "../components/ScrollableWorkouts";
import Text from "../components/Text";
import ViewContainer from "../components/ViewContainer";
import { styles } from "../styles";
import { RootStack } from "./RootStack";

export type HomeStack = StackNavigationProp<RootStack, "Home">;

const Home = () => {
  const navigation = useNavigation<HomeStack>();

  return (
    <ViewContainer>
      <Header>
        <View style={styles.cta}>
          <Text style={styles.welcome}>Welcome Back, Neil!</Text>
          <Button
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
            title="New"
            onPress={() => navigation.navigate("New")}
          />
        </View>
      </Header>
      <ScrollableWorkouts workouts={[1, 2, 3, 4]} />
    </ViewContainer>
  );
};

export default Home;
