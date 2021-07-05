import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Button } from "react-native-elements";
import { styles } from "../../styles";
import Header from "../components/Header";
import ViewContainer from "../components/ViewContainer";
import { RootStack } from "./RootStack";

export type WorkoutStack = StackNavigationProp<RootStack, "Workout">;

const Workout = () => {
  const navigation = useNavigation<WorkoutStack>();

  return (
    <ViewContainer style={{ position: "relative" }}>
      <Header title="New">
        <Button
          buttonStyle={[
            styles.buttonStyle,
            // TODO: Make secondary button style
            {
              backgroundColor: "transparent",
              borderColor: "grey",
              borderWidth: 1,
              marginRight: 10,
            },
          ]}
          titleStyle={styles.titleStyle}
          title="Cancel"
          onPress={() => navigation.navigate("ExerciseList")}
        />
      </Header>
    </ViewContainer>
  );
};

export default Workout;
