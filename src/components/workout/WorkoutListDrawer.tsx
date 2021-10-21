import React from "react";
import useSets from "../../services/useSets";
import { Exercise, FormSet } from "../../shared";
import { Set } from "../../shared";
import BottomDrawer from "../shared/BottomDrawer";
import SetInput from "./SetInput";

const WorkoutListDrawer: React.FC<{
  currentExercise: Exercise;
  onClose(): void;
  updateSets(sets: Set[]): void;
}> = ({ currentExercise, onClose, updateSets }) => {
  const { sets, addSetToExercise, updateSet } = useSets(currentExercise);

  const createExerciseSet = (set: FormSet) => {
    const updatedSets = addSetToExercise(set);
    updateSets(updatedSets);
  };

  const updateExerciseSet = (setNumber: number, formSet: FormSet) => {
    const updatedSets = updateSet(setNumber, formSet);
    updateSets(updatedSets);
  };

  return (
    <BottomDrawer title={currentExercise.name} onClose={onClose}>
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

export default WorkoutListDrawer;
