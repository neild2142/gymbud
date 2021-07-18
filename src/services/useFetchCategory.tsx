import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Category } from "./useFetchExercises";
import WorkoutAPIClient from "./WorkoutAPIClient";

const useFetchCategory = () => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const workoutAPIClient = new WorkoutAPIClient();

  useEffect(() => {
    const getCategoryList = async () => {
      const cacheKey = `gymbud-categories`;
      const cachedCategories = await AsyncStorage.getItem(cacheKey);

      if (cachedCategories !== null) {
        setCategories(JSON.parse(cachedCategories));
      } else {
        const categories = await workoutAPIClient.getCategories();
        setCategories(categories);
        await AsyncStorage.setItem(cacheKey, JSON.stringify(categories));
      }
    };
    getCategoryList();
  }, []);

  const setCategoryHandler = (category: Category) => {
    setCurrentCategory(category);
  };

  return { categories, currentCategory, setCategoryHandler };
};

export default useFetchCategory;
