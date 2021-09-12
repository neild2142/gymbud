import React from "react";
import { Exercise, FormSet, Set } from "../shared";

const useSets = (
  currentExercise: Exercise,
  workoutExercises: Exercise[],
  setWorkoutExercises: { (exercises: Exercise[]): void }
): [Set[], (set: FormSet) => void] => {
  const newSet = {
    weight: "",
    reps: "",
    complete: false,
  };
  const initialSets = () => {
    return (
      workoutExercises.find((we) => we.name === currentExercise.name)?.sets || [
        newSet,
      ]
    );
  };

  const [sets, setSets] = React.useState(initialSets);

  const getExerciseAndIndex = () => {
    let index = -1;
    const exercise = workoutExercises.find((e, i) => {
      index = i;
      return e.name === currentExercise.name;
    });

    return {
      exercise,
      index,
    };
  };

  const updateSetsForExercise = (exercise: Exercise, set: FormSet) => {
    let currentSets = exercise.sets;

    if (currentSets) {
      currentSets[currentSets.length - 1] = {
        ...set,
        complete: true,
      };
      exercise.sets = [...currentSets, newSet];
    } else {
      const completedSet: Set = {
        ...set,
        complete: true,
      };
      exercise.sets = [completedSet, newSet];
    }
  };

  const updateExercisesWithExercise = (exercise: Exercise, index: number) => {
    const exercises = [...workoutExercises];
    exercises[index] = exercise;
    setWorkoutExercises(exercises);
  };

  const addSetToExercise = (set: FormSet) => {
    const { exercise, index } = getExerciseAndIndex();
    if (!exercise) {
      return;
    }
    updateSetsForExercise(exercise, set);
    setSets(exercise.sets);
    updateExercisesWithExercise(exercise, index);
  };

  return [sets, addSetToExercise];
};

export default useSets;
