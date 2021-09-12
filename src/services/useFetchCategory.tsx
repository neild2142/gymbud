import { useEffect, useState } from "react";
import { Category } from "../shared";
import useStorage from "./useStorage";
import WorkoutAPIClient from "./WorkoutAPIClient";

const STORAGE_KEY = "gymbud-categories";

const useFetchCategory = () => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const workoutAPIClient = new WorkoutAPIClient();
  const { retrieveFromStorage, setStorage } =
    useStorage<Category[]>(STORAGE_KEY);

  useEffect(() => {
    const getCategoryList = async () => {
      const cachedCategories = await retrieveFromStorage();

      if (cachedCategories !== null) {
        setCategories(JSON.parse(cachedCategories));
      } else {
        const categories = await workoutAPIClient.getCategories();
        setCategories(categories);
        setStorage(categories);
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
