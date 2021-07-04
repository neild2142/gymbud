import { useEffect, useState } from "react";
import WorkoutAPIClient from "./WorkoutAPIClient";

export interface Category {
  id: number;
  name: string;
  categoryIndex: number;
}

export interface Exercise {
  name: string;
  id: number;
  description: string;
  muscles: number[];
  category: number;
}

const useFetchExercises = (currentCategory: Category | null) => {
  const [exercises, setExercises] = useState<Exercise[] | null>(null);
  const workoutAPIClient = new WorkoutAPIClient();

  useEffect(() => {
    const getExerciseList = async () => {
      if (!currentCategory) {
        return null;
      }
      setExercises(await workoutAPIClient.getExercises(currentCategory.id));
    };
    getExerciseList();
  }, [currentCategory]);

  const resetExercises = () => {
    setExercises(null);
  };

  return { exercises, resetExercises };
};

export default useFetchExercises;
