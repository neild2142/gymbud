import React from "react";
import { FormSet, Set } from "../shared";

import "react-native-get-random-values";
import { v4 as uuid } from "uuid";

interface SetControl {
  sets: Set[];
  addSetToExercise(set: FormSet): Set[];
  updateSet(setNumber: number, set: FormSet): Set[];
  removeSet(setNumber: number): Set[];
}

const useSets = (setState: Set[]): SetControl => {
  const newSet = {
    weight: "",
    reps: "",
    complete: false,
    id: null,
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

    const completedSet: Set = { ...set, complete: true, id: uuid() };
    const setToAdd: Set = {
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
    updatedSets[setNumber] = { ...set, complete: true, id: sets[setNumber].id };
    setSets(updatedSets);

    return updatedSets;
  };

  const removeSet = (setNumber: number) => {
    const updatedSets = [...sets];
    updatedSets.splice(setNumber, 1);
    setSets(updatedSets);

    return updatedSets;
  };

  return { sets, addSetToExercise, updateSet, removeSet };
};

export default useSets;
