import { useEffect, useState } from "react";
import WorkoutAPIClient from "./WorkoutAPIClient";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    if (currentCategory === null) {
      return;
    }
    const cacheKey = `gymbud-exercises-for-${currentCategory.name}`;

    const cacheExercises = async (exercises: Exercise[]) => {
      await AsyncStorage.setItem(cacheKey, JSON.stringify(exercises));
    };

    const fetchFromAPI = async () => {
      const exercises = await workoutAPIClient.getExercises(currentCategory.id);
      setExercises(exercises);
      cacheExercises(exercises);
    };

    const getExerciseList = async () => {
      const cachedExercises = await AsyncStorage.getItem(cacheKey);
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
