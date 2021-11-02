import React from "react";
import useSets from "../../services/useSets";
import { Exercise, FormSet, Set } from "../../shared";
import BottomDrawer from "../shared/BottomDrawer";
import SetInput from "./SetInput";

const SetDrawer: React.FC<{
  title: string;
  onClose(): void;
  updateSetsForExercise(sets: Set[]): void;
  currentSets: Set[];
}> = ({ title, onClose, updateSetsForExercise, currentSets }) => {
  const { sets, addSetToExercise, updateSet } = useSets(currentSets);

  const setDrawerOnClose = () => {
    onClose();
  };

  const createExerciseSet = (set: FormSet) => {
    const updatedSets = addSetToExercise(set);
    updateSetsForExercise(updatedSets);
  };

  const updateExerciseSet = (setNumber: number, formSet: FormSet) => {
    const updatedSets = updateSet(setNumber, formSet);
    updateSetsForExercise(updatedSets);
  };

  return (
    <BottomDrawer title={title} onClose={setDrawerOnClose}>
      {sets.map((set, index) => (
        <SetInput
          setNumber={index}
          createNewSet={createExerciseSet}
          updateSet={updateExerciseSet}
          key={index}
          set={set}
        />
      ))}
    </BottomDrawer>
  );
};

export default SetDrawer;
