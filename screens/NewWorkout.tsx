import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import Text from "../components/Text";
import { styles } from "../styles";
import { RootStack } from "./RootStack";

type NewWorkoutStack = StackNavigationProp<RootStack, "New">;

const NewWorkout = () => {
  const navigation = useNavigation<NewWorkoutStack>();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>New Workout!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewWorkout;
