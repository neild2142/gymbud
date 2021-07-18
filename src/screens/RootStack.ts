import { Exercise } from "../services/useFetchExercises";

export type RootStack = {
  Home: undefined;
  ExerciseList: { exercises: Exercise[] | null };
  Workout: { exercises: Exercise[] | null };
};
