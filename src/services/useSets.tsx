import React from "react";
import { Exercise, FormSet, Set } from "../shared";

interface SetControl {
  sets: Set[];
  addSetToExercise(set: FormSet): void;
  updateSet(setNumber: number, set: FormSet): void;
}

const useSets = (
  currentExercise: Exercise,
  workoutExercises: Exercise[],
  setWorkoutExercises: { (exercises: Exercise[]): void }
): SetControl => {
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
    let currentSets;
    if (exercise.sets) {
      currentSets = [...exercise.sets];
    }

    const completedSet = { ...set, complete: true };
    const setToAdd = {
      ...newSet,
      reps: completedSet.reps,
      weight: completedSet.weight,
    };

    if (currentSets) {
      currentSets[currentSets.length - 1] = completedSet;
      exercise.sets = [...currentSets, setToAdd];
    } else {
      exercise.sets = [completedSet, setToAdd];
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

  const updateSet = (setNumber: number, set: FormSet) => {
    const { exercise } = getExerciseAndIndex();
    if (!exercise) {
      return;
    }

    let currentSets;
    if (exercise.sets) {
      currentSets = [...exercise.sets];
    }

    if (!currentSets) {
      return;
    }
    currentSets[setNumber] = { ...set, complete: true };
    exercise.sets = [...currentSets];
  };

  return { sets, addSetToExercise, updateSet };
};

export default useSets;
