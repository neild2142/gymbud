import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import ViewContainer from "../components/shared/ViewContainer";
import EmptyState from "../components/workout/EmptyState";
import SetDrawer from "../components/workout/SetDrawer";
import WorkoutHeader from "../components/workout/WorkoutHeader";
import WorkoutList from "../components/workout/WorkoutList";
import { Exercise, Set, SetState } from "../shared";
import { RootStack } from "./RootStack";
import { Button, FAB as FloatingActionButton } from "react-native-elements";
import { styles } from "../../styles";
import { View } from "react-native";

export type WorkoutStack = StackNavigationProp<RootStack, "Workout">;

const Workout: React.FC = () => {
  const { exercises: exercisesFromNavigation } =
    useRoute<RouteProp<RootStack, "Workout">>().params;
  const navigation = useNavigation<WorkoutStack>();
  const [currentExercise, setCurrentExercise] = useState<Exercise | null>();
  const [workoutExercises, setWorkoutExercises] = useState<Exercise[] | null>(
    null
  );
  const [setInformation, setSetInformation] = useState<SetState>({});
  const hasExercises = workoutExercises && workoutExercises.length > 0;

  const cancelWorkout = () => {
    navigation.goBack();
  };

  const addExercise = () => {
    navigation.navigate("Categories", {
      exercises: workoutExercises ? workoutExercises : exercisesFromNavigation,
    });
  };

  const onCloseHandler = () => {
    setCurrentExercise(null);
  };

  const setCurrentExerciseHandler = (exercise: Exercise) => {
    setCurrentExercise(exercise);
  };

  const setExercisesHandler = (exercises: Exercise[]) => {
    setWorkoutExercises(exercises);
  };

  const updateSetsForExercise = (sets: Set[]) => {
    if (!currentExercise) {
      return;
    }
    setSetInformation({ ...setInformation, [currentExercise.id]: sets });
  };

  /*
    Bug - workoutExercises was not being set to exercises
    Perhaps this was down to the manner in which react native
    navigation renders its components.
  */
  React.useEffect(() => {
    setWorkoutExercises(exercisesFromNavigation);
  }, [exercisesFromNavigation]);

  const renderWorkoutList = () => (
    <>
      <WorkoutList
        exercises={workoutExercises}
        setCurrentExerciseHandler={setCurrentExerciseHandler}
        setExercisesHandler={setExercisesHandler}
      />
      {currentExercise && (
        <SetDrawer
          onClose={onCloseHandler}
          title={currentExercise.name}
          updateSetsForExercise={updateSetsForExercise}
          currentSets={setInformation[currentExercise.id]}
        />
      )}
      <View
        style={{
          bottom: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          title="Complete"
          titleStyle={{ color: "black" }}
          buttonStyle={[
            styles.buttonStyle,
            {
              borderRadius: 20,
              backgroundColor: "#D6F0FF",
              borderWidth: 2,
              borderColor: "#3F4169",
            },
          ]}
        />
      </View>
    </>
  );

  return (
    <ViewContainer style={{ position: "relative" }}>
      <WorkoutHeader back={cancelWorkout} next={addExercise} />
      {hasExercises ? renderWorkoutList() : <EmptyState />}
    </ViewContainer>
  );
};

export default Workout;
