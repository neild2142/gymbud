import { useEffect, useState } from "react";
import useStorage from "./useStorage";
import WorkoutAPIClient from "./WorkoutAPIClient";

export interface Category {
  id: number;
  name: string;
  categoryIndex?: number;
}

export interface Exercise {
  name: string;
  id: number;
  description: string;
  muscles: number[];
  muscles_secondary: number[];
  categoryName: string;
  category: number;
}

const useFetchExercises = (currentCategory: Category | null) => {
  const [exercises, setExercises] = useState<Exercise[] | null>(null);
  const workoutAPIClient = new WorkoutAPIClient();
  const STORAGE_KEY = `gymbud-exercises-for-${currentCategory?.name}`;
  const { retrieveFromStorage, setStorage } =
    useStorage<Exercise[]>(STORAGE_KEY);

  useEffect(() => {
    if (currentCategory === null) {
      return;
    }

    const fetchFromAPI = async () => {
      const exercises = await workoutAPIClient.getExercises(currentCategory.id);
      setExercises(exercises);
      setStorage(exercises);
    };

    const getExerciseList = async () => {
      const cachedExercises = await retrieveFromStorage();

      if (cachedExercises !== null) {
        setExercises(JSON.parse(cachedExercises));
      } else {
        fetchFromAPI();
      }
    };
    getExerciseList();
  }, [currentCategory]);

  const resetExercises = () => {
    setExercises(null);
  };

  return { exercises, resetExercises };
};

export default useFetchExercises;
