import React from "react";
import { Exercise, FormSet, Set } from "../shared";

interface SetControl {
  sets: Set[];
  addSetToExercise(set: FormSet): Set[];
  updateSet(setNumber: number, set: FormSet): void;
}

const useSets = (currentExercise: Exercise): SetControl => {
  const newSet = {
    weight: "",
    reps: "",
    complete: false,
  };
  const initialSets = () => {
    return currentExercise.sets || [newSet];
  };

  const [sets, setSets] = React.useState(initialSets);

  const hasCompletedASet = () => {
    return sets.length > 1;
  };

  const getUpdatedSets = (set: FormSet) => {
    let currentSets;
    if (hasCompletedASet()) {
      currentSets = [...sets];
    }

    const completedSet = { ...set, complete: true };
    const setToAdd = {
      ...newSet,
      reps: completedSet.reps,
      weight: completedSet.weight,
    };

    if (currentSets) {
      currentSets[currentSets.length - 1] = completedSet;
      return [...currentSets, setToAdd];
    }
    return [completedSet, setToAdd];
  };

  const addSetToExercise = (set: FormSet) => {
    const updatedSets = getUpdatedSets(set);
    setSets(updatedSets);

    return updatedSets;
  };

  const updateSet = (setNumber: number, set: FormSet) => {
    let currentSets;

    if (currentExercise.sets) {
      currentSets = [...currentExercise.sets];
    }

    if (!currentSets) {
      return;
    }
    currentSets[setNumber] = { ...set, complete: true };
    currentExercise.sets = [...currentSets];
  };

  return { sets, addSetToExercise, updateSet };
};

export default useSets;
