import { useState } from "react";
import { Exercise } from "./useFetchWorkout";

const useWorkoutExercises = () => {
  const [workoutExercises, setWorkoutExercises] = useState<Exercise[]>([]);

  const addExerciseToWorkout = (exercise: Exercise) => {
    setWorkoutExercises([...workoutExercises, exercise]);
  };

  const getWorkoutExercises = () => workoutExercises;

  return {
    addExerciseToWorkout,
    getWorkoutExercises,
  };
};

export default useWorkoutExercises;
