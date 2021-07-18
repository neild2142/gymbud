import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "../../styles";
import BottomDrawer from "../components/BottomDrawer";
import Card from "../components/Card";
import Header from "../components/Header";
import Text from "../components/Text";
import ViewContainer from "../components/ViewContainer";
import WorkoutTag from "../components/WorkoutTag";
import muscleData from "../data/muscles";
import { Exercise } from "../services/useFetchExercises";
import { RootStack } from "./RootStack";

export type WorkoutStack = StackNavigationProp<RootStack, "Workout">;

const Workout: React.FC = () => {
  const navigation = useNavigation<WorkoutStack>();
  const { exercises } = useRoute<RouteProp<RootStack, "Workout">>().params;
  const [currentExercise, setCurrentExercise] = useState<Exercise | null>(null);

  const renderExerciseDrawer = () =>
    currentExercise && (
      <BottomDrawer
        title={currentExercise.name}
        onClose={() => setCurrentExercise(null)}
      />
    );

  const renderExercises = () => {
    if (!exercises) {
      return null;
    }
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {exercises.map((exercise) => (
          // TODO: <ExerciseCard />
          <View style={{}} key={exercise.id}>
            <TouchableOpacity onPress={() => setCurrentExercise(exercise)}>
              <Card style={{ width: "100%", marginRight: 0, marginBottom: 20 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    flexWrap: "wrap",
                  }}
                >
                  <Text
                    style={{ color: "white", fontSize: 25, fontWeight: "bold" }}
                  >
                    {exercise.name}
                  </Text>
                  <WorkoutTag
                    bodyPart={exercise.categoryName}
                    color="#FFEBA5"
                    style={{ marginRight: 0 }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                    flexWrap: "wrap",
                    width: "100%",
                  }}
                >
                  {exercise.muscles.map((mainMuscle) => (
                    <WorkoutTag
                      key={`${exercise.name}-${mainMuscle}`}
                      bodyPart={muscleData[mainMuscle].name}
                      color="#cafbff"
                    />
                  ))}
                  {exercise.muscles_secondary.map((secondary) => (
                    <WorkoutTag
                      key={`${exercise.name}-${secondary}`}
                      bodyPart={muscleData[secondary].name}
                      color="#ebebeb"
                    />
                  ))}
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text style={{ color: "white" }}>3 SETS | 12 REPS</Text>
                </View>
              </Card>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    );
  };

  return (
    <ViewContainer style={{ position: "relative" }}>
      <Header title="Workout">
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
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
          <Button
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
            title="Add"
            onPress={() => navigation.navigate("Categories", { exercises })}
            // disabled={exercises.length === 0}
          />
        </View>
      </Header>
      {exercises && renderExercises()}
      {renderExerciseDrawer()}
    </ViewContainer>
  );
};

export default Workout;
