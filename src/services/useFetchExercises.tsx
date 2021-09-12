import { useEffect, useState } from "react";
import { Category, Exercise } from "../shared";
import useStorage from "./useStorage";
import WorkoutAPIClient from "./WorkoutAPIClient";

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
