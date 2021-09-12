import React from "react";
import { Exercise } from "../shared";

const useSets = (
  currentExercise: Exercise,
  workoutExercises: Exercise[],
  setWorkoutExercises: { (exercises: Exercise[]): void }
): [number, () => void] => {
  const initialSets = () => {
    return (
      workoutExercises.find((we) => we.name === currentExercise.name)?.sets || 1
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

  const updateSetsForExercise = (exercise: Exercise) => {
    let currentSets = exercise.sets;
    exercise.sets = !currentSets ? 2 : ++currentSets;
  };

  const updateExercisesWithExercise = (exercise: Exercise, index: number) => {
    const exercises = [...workoutExercises];
    exercises[index] = exercise;
    setWorkoutExercises(exercises);
  };

  const addSetToExercise = () => {
    const { exercise, index } = getExerciseAndIndex();
    if (!exercise) {
      return;
    }
    setSets(sets + 1);
    updateSetsForExercise(exercise);
    updateExercisesWithExercise(exercise, index);
  };

  return [sets, addSetToExercise];
};

export default useSets;
