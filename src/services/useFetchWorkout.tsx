import React, { useEffect, useState } from "react";
import axios from "axios";

const CALVES = 14;

export interface Category {
  id: number;
  name: string;
  categoryIndex: number;
}

interface CategoryResponse {
  results: Category[];
  count: number;
}

export interface Exercise {
  name: string;
  id: number;
  description: string;
  muscles: number[];
}

interface ExerciseListResponse {
  results: Exercise[];
  count: number;
}

async function getCategories() {
  const response = await axios.get<CategoryResponse>(
    "https://wger.de/api/v2/exercisecategory/"
  );
  return response.data.results;
}

async function getExercises(currentCategoryId: number) {
  const response = await axios.get<ExerciseListResponse>(
    `https://wger.de/api/v2/exercise/?category=${currentCategoryId}&language=2`
  );
  return response.data.results;
}

const useFetchWorkout = () => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [exercises, setExercises] = useState<Exercise[] | null>(null);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);

  useEffect(() => {
    const getCategoryList = async () => {
      setCategories((await getCategories()).filter((c) => c.id !== CALVES));
    };
    getCategoryList();
  }, []);

  useEffect(() => {
    const getExerciseList = async () => {
      if (!currentCategory) {
        return null;
      }
      setExercises(await getExercises(currentCategory.id));
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
