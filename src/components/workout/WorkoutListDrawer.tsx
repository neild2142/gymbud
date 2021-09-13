import React from "react";
import { Exercise } from "../../shared";
import BottomDrawer from "../shared/BottomDrawer";
import SetInput from "./SetInput";
import useSets from "../../services/useSets";

const WorkoutListDrawer: React.FC<{
  currentExercise: Exercise;
  onClose(): void;
}> = ({ currentExercise, onClose }) => {
  const { sets, addSetToExercise, updateSet } = useSets(currentExercise);

  return (
    <BottomDrawer title={currentExercise.name} onClose={onClose}>
      {sets.map((set, index) => (
        <SetInput
          setNumber={index}
          createNewSet={addSetToExercise}
          updateSet={updateSet}
          key={index}
          set={set}
        />
      ))}
    </BottomDrawer>
  );
};

export default WorkoutListDrawer;
