import axios from "axios";
import { Exercise, Category } from "./useFetchWorkout";

const CALVES = 14;

interface ExerciseListResponse {
  results: Exercise[];
  count: number;
}

interface CategoryResponse {
  results: Category[];
  count: number;
}

export default class WorkoutAPIClient {
  private baseURL: string;

  constructor() {
    this.baseURL = "https://wger.de/api/v2";
  }

  async getCategories() {
    const response = await axios.get<CategoryResponse>(
      `${this.baseURL}/exercisecategory/`
    );
    return response.data.results.filter((category) => category.id !== CALVES);
  }

  async getExercises(currentCategoryId: number) {
    const response = await axios.get<ExerciseListResponse>(
      `${this.baseURL}/exercise/?category=${currentCategoryId}&language=2`
    );
    return response.data.results;
  }
}
