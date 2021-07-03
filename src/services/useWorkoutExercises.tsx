import { useState } from "react";
import { Exercise } from "./useFetchWorkout";

const useWorkoutExercises = () => {
  const [workoutExercises, setWorkoutExercises] = useState<Exercise[]>([]);

  const addExerciseToWorkout = (exercise: Exercise) => {
    setWorkoutExercises([...workoutExercises, exercise]);
  };

  const exercisesForCategory = (categoryID: number): number => {
    return workoutExercises.filter((e) => e.category === categoryID).length;
  };

  return {
    addExerciseToWorkout,
    workoutExercises,
    exercisesForCategory,
  };
};

export default useWorkoutExercises;
