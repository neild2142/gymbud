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
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={[
            styles.button,
            { width: 120, backgroundColor: "#ececec", marginBottom: 10 },
          ]}
          onPress={() => navigation.navigate("ExerciseList")}
        >
          <Text style={styles.buttonText}>Add Exercise</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewWorkout;
