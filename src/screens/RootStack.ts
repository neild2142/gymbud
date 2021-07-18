import { Exercise } from "../services/useFetchExercises";

export type RootStack = {
  Home: undefined;
  Workout: { exercises: Exercise[] | null };
  Categories: { exercises: Exercise[] | null };
};
