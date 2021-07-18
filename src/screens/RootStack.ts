import { Exercise } from "../services/useFetchExercises";

export type RootStack = {
  Home: undefined;
  Categories: { exercises: Exercise[] | null };
  Workout: { exercises: Exercise[] | null };
};
