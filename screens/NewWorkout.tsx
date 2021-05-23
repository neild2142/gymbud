import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { ImageBackground, TouchableOpacity, View } from "react-native";
import Text from "../components/Text";
import { styles } from "../styles";
import { RootStack } from "./RootStack";
import { Button, Icon } from "react-native-elements";

type NewWorkoutStack = StackNavigationProp<RootStack, "New">;

const NewWorkout = () => {
  const navigation = useNavigation<NewWorkoutStack>();

  return (
    <ImageBackground
      source={require("../assets/new-bg.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View
        style={[
          styles.bar,
          {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          },
        ]}
      >
        <View>
          <Text style={[styles.welcome, { color: "white" }]}>New Workout</Text>
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
      </View>
    </ImageBackground>
  );
};

export default NewWorkout;
