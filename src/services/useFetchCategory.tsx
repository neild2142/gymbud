import { useEffect, useState } from "react";
import { Category } from "./useFetchExercises";
import WorkoutAPIClient from "./WorkoutAPIClient";

const useFetchCategory = () => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const workoutAPIClient = new WorkoutAPIClient();

  useEffect(() => {
    const getCategoryList = async () => {
      setCategories(await workoutAPIClient.getCategories());
    };
    getCategoryList();
  }, []);

  const setCategoryHandler = (category: Category) => {
    setCurrentCategory(category);
  };

  return { categories, currentCategory, setCategoryHandler };
};

export default useFetchCategory;
