import React from "react";
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";
import { Exercise } from "../../shared";
import ExerciseCard from "../exercise/ExerciseCard";

const WorkoutList: React.FC<{
  exercises: Exercise[] | null | undefined;
  setCurrentExerciseHandler(exercises: Exercise): void;
  setExercisesHandler(exercises: Exercise[]): void;
}> = ({ exercises, setCurrentExerciseHandler, setExercisesHandler }) => {
  if (!exercises) {
    return null;
  }

  const renderItem = ({ item: exercise, drag }: RenderItemParams<Exercise>) => (
    <ExerciseCard
      exercise={exercise}
      setExercise={() => setCurrentExerciseHandler(exercise)}
      drag={drag}
    />
  );

  return (
    <DraggableFlatList
      data={exercises}
      keyExtractor={(item, index) => `${item.name} - ${index}`}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      onDragEnd={({ data }) => setExercisesHandler(data)}
    />
  );
};

export default WorkoutList;
