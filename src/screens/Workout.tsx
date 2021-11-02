import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import ViewContainer from "../components/shared/ViewContainer";
import SetDrawer from "../components/workout/SetDrawer";
import WorkoutHeader from "../components/workout/WorkoutHeader";
import WorkoutList from "../components/workout/WorkoutList";
import { Exercise, Set, SetState } from "../shared";
import { RootStack } from "./RootStack";

export type WorkoutStack = StackNavigationProp<RootStack, "Workout">;

const Workout: React.FC = () => {
  const { exercises: exercisesFromNavigation } =
    useRoute<RouteProp<RootStack, "Workout">>().params;
  const navigation = useNavigation<WorkoutStack>();
  const [currentExercise, setCurrentExercise] = useState<Exercise | null>();
  const [workoutExercises, setWorkoutExercises] = useState<Exercise[] | null>(
    null
  );
  const [setListVisible, setSetListVisible] = useState(false);
  const [setInformation, setSetInformation] = useState<SetState>({});

  const cancelWorkout = () => {
    navigation.goBack();
  };

  const addExercise = () => {
    navigation.navigate("Categories", {
      exercises: workoutExercises ? workoutExercises : exercisesFromNavigation,
    });
  };

  const persistCurrentExerciseState = () => {
    if (!workoutExercises || !currentExercise) {
      return;
    }
    const currentExerciseIndex = workoutExercises.findIndex(
      (we) => we.id === currentExercise.id
    );

    if (currentExerciseIndex === -1) {
      return;
    }

    const tempWorkoutExercises = [...workoutExercises];
    tempWorkoutExercises[currentExerciseIndex] = currentExercise;
    setWorkoutExercises(tempWorkoutExercises);
  };

  const onCloseHandler = () => {
    persistCurrentExerciseState();
    setSetListVisible(false);
    setCurrentExercise(null);
  };

  const setCurrentExerciseHandler = (exercise: Exercise) => {
    setSetListVisible(true);
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

  return (
    <ViewContainer style={{ position: "relative" }}>
      <WorkoutHeader back={cancelWorkout} next={addExercise} />
      <WorkoutList
        exercises={workoutExercises}
        setCurrentExerciseHandler={setCurrentExerciseHandler}
        setExercisesHandler={setExercisesHandler}
      />
      {setListVisible && currentExercise && (
        <SetDrawer
          onClose={onCloseHandler}
          title={currentExercise.name}
          updateSetsForExercise={updateSetsForExercise}
          currentSets={setInformation[currentExercise.id]}
        />
      )}
    </ViewContainer>
  );
};

export default Workout;
