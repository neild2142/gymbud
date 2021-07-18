import { useState } from "react";
import { Exercise } from "./useFetchExercises";

const useWorkoutExercises = (addedExercises: Exercise[] | null) => {
  const [workoutExercises, setWorkoutExercises] = useState<Exercise[]>(
    addedExercises || []
  );

  const addExerciseToWorkout = (exercise: Exercise) => {
    setWorkoutExercises([...workoutExercises, exercise]);
  };

  const removeExerciseFromWorkout = (exercise: Exercise) => {
    setWorkoutExercises(
      workoutExercises.filter(
        (workoutExercise) => workoutExercise.id !== exercise.id
      )
    );
  };

  const exercisesForCategory = (categoryID: number): number => {
    return workoutExercises.filter((e) => e.category === categoryID).length;
  };

  return {
    addExerciseToWorkout,
    removeExerciseFromWorkout,
    workoutExercises,
    exercisesForCategory,
  };
};

export default useWorkoutExercises;
