import { Exercise } from "../shared";

export type RootStack = {
  Home: undefined;
  Workout: { exercises: Exercise[] | null };
  Categories: { exercises: Exercise[] | null };
};
