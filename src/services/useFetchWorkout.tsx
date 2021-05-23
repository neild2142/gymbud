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
}

const useFetchWorkout = () => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [exercises, setExercises] = useState<Exercise[] | null>(null);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const workoutAPIClient = new WorkoutAPIClient();

  useEffect(() => {
    const getCategoryList = async () => {
      setCategories(await workoutAPIClient.getCategories());
    };
    getCategoryList();
  }, []);

  useEffect(() => {
    const getExerciseList = async () => {
      if (!currentCategory) {
        return null;
      }
      setExercises(await workoutAPIClient.getExercises(currentCategory.id));
    };
    getExerciseList();
  }, [currentCategory]);

  const setCategoryHandler = (category: Category) => {
    setCurrentCategory(category);
  };

  const resetExercises = () => {
    setExercises(null);
  };

  return {
    categories,
    exercises,
    currentCategory,
    setCategoryHandler,
    resetExercises,
  };
};

export default useFetchWorkout;
