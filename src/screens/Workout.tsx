import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import ViewContainer from "../components/shared/ViewContainer";
import WorkoutHeader from "../components/workout/WorkoutHeader";
import WorkoutList from "../components/workout/WorkoutList";
import WorkoutListDrawer from "../components/workout/WorkoutListDrawer";
import { Exercise } from "../shared";
import { RootStack } from "./RootStack";

export type WorkoutStack = StackNavigationProp<RootStack, "Workout">;

const Workout: React.FC = () => {
  const { exercises: exercisesFromNavigation } =
    useRoute<RouteProp<RootStack, "Workout">>().params;
  const navigation = useNavigation<WorkoutStack>();
  const [currentExercise, setCurrentExercise] = useState<Exercise | null>(null);
  const [workoutExercises, setWorkoutExercises] = useState<Exercise[] | null>();

  const cancelWorkout = () => {
    navigation.goBack();
  };

  const addExercise = () => {
    navigation.navigate("Categories", {
      exercises: workoutExercises ? workoutExercises : exercisesFromNavigation,
    });
  };

  const setCurrentExerciseHandler = (exercise: Exercise) => {
    setCurrentExercise(exercise);
  };

  const setExercisesHandler = (exercises: Exercise[]) => {
    setWorkoutExercises(exercises);
  };

  /*
    Bug - workoutExercises was not being set to exercises
    Perhaps this was down to the manner in which react native
    navigation renders its components.
  */
  React.useEffect(() => {
    setWorkoutExercises(exercisesFromNavigation);
  }, [exercisesFromNavigation]);

  return (
    <ViewContainer style={{ position: "relative" }}>
      <WorkoutHeader back={cancelWorkout} next={addExercise} />
      <WorkoutList
        exercises={workoutExercises}
        setCurrentExerciseHandler={setCurrentExerciseHandler}
        setExercisesHandler={setExercisesHandler}
      />
      {currentExercise && workoutExercises && (
        <WorkoutListDrawer
          onClose={() => setCurrentExercise(null)}
          currentExercise={currentExercise}
        />
      )}
    </ViewContainer>
  );
};

export default Workout;
