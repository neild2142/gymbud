import { Exercise } from "../services/useFetchExercises";

export type RootStack = {
  Home: undefined;
  ExerciseList: undefined;
  Workout: { exercises: Exercise[] };
};
