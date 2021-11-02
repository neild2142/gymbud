import React from "react";
import { FormSet, Set } from "../shared";

interface SetControl {
  sets: Set[];
  addSetToExercise(set: FormSet): Set[];
  updateSet(setNumber: number, set: FormSet): Set[];
}

const useSets = (setState: Set[]): SetControl => {
  const newSet = {
    weight: "",
    reps: "",
    complete: false,
  };
  const initialSets = () => {
    return setState || [newSet];
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
    const updatedSets = [...sets];
    updatedSets[setNumber] = { ...set, complete: true };
    setSets(updatedSets);

    return updatedSets;
  };

  return { sets, addSetToExercise, updateSet };
};

export default useSets;
