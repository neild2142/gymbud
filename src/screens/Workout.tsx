import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import DraggableFlatList, {
  RenderItemParams
} from "react-native-draggable-flatlist";
import BottomDrawer from "../components/BottomDrawer";
import ExerciseCard from "../components/ExerciseCard";
import Set from "../components/Set";
import ViewContainer from "../components/ViewContainer";
import WorkoutHeader from "../components/WorkoutHeader";
import { Exercise } from "../services/useFetchExercises";
import { RootStack } from "./RootStack";

export type WorkoutStack = StackNavigationProp<RootStack, "Workout">;

const Workout: React.FC = () => {
  const { exercises: exercisesFromNavigation } =
    useRoute<RouteProp<RootStack, "Workout">>().params;
  const navigation = useNavigation<WorkoutStack>();
  const [currentExercise, setCurrentExercise] = useState<Exercise | null>(null);
  const [workoutExercises, setWorkoutExercises] = useState<Exercise[] | null>();

  const renderExerciseDrawer = () =>
    currentExercise && (
      <BottomDrawer
        title={currentExercise.name}
        onClose={() => setCurrentExercise(null)}
      >
        <Set />
      </BottomDrawer>
    );

  const cancelWorkout = () => {
    navigation.goBack();
  };

  const addExercise = () => {
    navigation.navigate("Categories", {
      exercises: workoutExercises ? workoutExercises : exercisesFromNavigation,
    });
  };

  /*
    Bug - workoutExercises was not being set to exercises
    Perhaps this was down to the manner in which react native
    navigation renders its components.
  */
  React.useEffect(() => {
    setWorkoutExercises(exercisesFromNavigation);
  }, [exercisesFromNavigation]);

  const renderItem = ({ item: exercise, drag }: RenderItemParams<Exercise>) => (
    <ExerciseCard
      exercise={exercise}
      setExercise={setCurrentExercise}
      drag={drag}
    />
  );

  const renderExercises = () => (
    <DraggableFlatList
      data={workoutExercises!}
      keyExtractor={(item, index) => `${item.name} - ${index}`}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      onDragEnd={({ data }) => setWorkoutExercises(data)}
    />
  );

  return (
    <ViewContainer style={{ position: "relative" }}>
      <WorkoutHeader cancel={cancelWorkout} add={addExercise} />
      {workoutExercises && renderExercises()}
      {renderExerciseDrawer()}
    </ViewContainer>
  );
};

export default Workout;
