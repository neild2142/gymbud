import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "../../styles";
import BottomDrawer from "../components/BottomDrawer";
import Card from "../components/Card";
import Header from "../components/Header";
import Text from "../components/Text";
import ViewContainer from "../components/ViewContainer";
import { RootStack } from "./RootStack";

export type WorkoutStack = StackNavigationProp<RootStack, "Workout">;

const Workout: React.FC = () => {
  const navigation = useNavigation<WorkoutStack>();
  const { exercises } = useRoute<RouteProp<RootStack, "Workout">>().params;
  const [currentExercise, setCurrentExercise] = useState<string | null>(null);

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
          onPress={() => navigation.goBack()}
        />
      </Header>
      <View>
        {exercises.map((exercise) => (
          <TouchableOpacity
            onPress={() => setCurrentExercise(exercise.name)}
            key={exercise.id}
          >
            <Card style={{ width: "100%", marginRight: 0, marginBottom: 10 }}>
              <Text
                style={{ color: "white", fontSize: 25, fontWeight: "bold" }}
              >
                {exercise.name}
              </Text>
            </Card>
          </TouchableOpacity>
        ))}
      </View>
      {currentExercise && (
        <BottomDrawer
          title={currentExercise}
          onClose={() => setCurrentExercise(null)}
        ></BottomDrawer>
      )}
    </ViewContainer>
  );
};

export default Workout;
