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

  const createSet = (set: FormSet) => {
    const updatedSets = addSetToExercise(set);
    updateSets(updatedSets);
  };

  return (
    <BottomDrawer title={currentExercise.name} onClose={onClose}>
      {sets.map((set, index) => (
        <SetInput
          setNumber={index}
          createNewSet={createSet}
          updateSet={updateSet}
          key={index}
          set={set}
        />
      ))}
    </BottomDrawer>
  );
};

export default WorkoutListDrawer;
