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
import Swipeable from "react-native-gesture-handler/Swipeable";

export type WorkoutStack = StackNavigationProp<RootStack, "Workout">;

const Workout: React.FC = () => {
  const { exercises } = useRoute<RouteProp<RootStack, "Workout">>().params;
  const navigation = useNavigation<WorkoutStack>();
  const [currentExercise, setCurrentExercise] = useState<Exercise | null>(null);
  const [workoutExercises, setWorkoutExercises] = useState<Exercise[] | null>();

  const renderExerciseDrawer = () =>
    currentExercise && (
      <BottomDrawer
        title={currentExercise.name}
        onClose={() => setCurrentExercise(null)}
      />
    );

  /*
    Bug - workoutExercises was not being set to exercises
    Perhaps this was down to the manner in which react native
    navigation renders its components.
  */
  React.useEffect(() => {
    setWorkoutExercises(exercises);
  }, [exercises]);

  const renderLeftActions = () => {
    return (
      <View
        style={{
          flex: 1,
          padding: 20,
          backgroundColor: "#fd6c6c",
          justifyContent: "center",
          borderRadius: 20,
          marginTop: 20,
        }}
      >
        <Text style={{ color: "white" }}>Delete</Text>
      </View>
    );
  };

  const swipeFromLeftOpen = (id: number) =>
    setWorkoutExercises(workoutExercises!.filter((e) => e.id !== id));

  const renderExercises = () => {
    if (!workoutExercises) {
      return null;
    }
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {workoutExercises.map((exercise) => (
          // TODO: <ExerciseCard />
          <Swipeable
            renderLeftActions={renderLeftActions}
            onSwipeableLeftOpen={() => swipeFromLeftOpen(exercise.id)}
            key={exercise.id}
          >
            <TouchableOpacity
              onPress={() => setCurrentExercise(exercise)}
              style={{ flex: 2 }}
              activeOpacity={1}
            >
              <Card style={{ width: "100%", marginRight: 0, marginTop: 20 }}>
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
          </Swipeable>
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
            onPress={() =>
              navigation.navigate("Categories", {
                exercises: workoutExercises ? workoutExercises : exercises,
              })
            }
          />
        </View>
      </Header>
      {workoutExercises && renderExercises()}
      {renderExerciseDrawer()}
    </ViewContainer>
  );
};

export default Workout;
