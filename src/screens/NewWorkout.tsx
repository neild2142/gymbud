import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { ImageBackground, View } from "react-native";
import { Button, Icon } from "react-native-elements";
import Header from "../components/Header";
import Text from "../components/Text";
import ViewContainer from "../components/ViewContainer";
import { styles } from "../../styles";
import { RootStack } from "./RootStack";

type NewWorkoutStack = StackNavigationProp<RootStack, "New">;

/**
 * @deprecated
 */
const NewWorkout = () => {
  const navigation = useNavigation<NewWorkoutStack>();

  return (
    <ViewContainer>
      <Header
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={[styles.welcome, { color: "black" }]}>New Workout</Text>
          <Button
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
            title="Cancel"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
        <Icon
          raised
          name="plus"
          type="font-awesome"
          color="#303A52"
          onPress={() => navigation.navigate("ExerciseList")}
        />
      </Header>
    </ViewContainer>
  );
};

export default NewWorkout;
