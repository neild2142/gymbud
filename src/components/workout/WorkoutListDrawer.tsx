import React from "react";
import { Exercise } from "../../shared";
import BottomDrawer from "../shared/BottomDrawer";
import Set from "../../components/workout/Set";

const WorkoutListDrawer: React.FC<{
  currentExercise: Exercise;
  onClose(): void;
}> = ({ currentExercise, onClose }) => {
  return (
    <BottomDrawer title={currentExercise.name} onClose={onClose}>
      <Set />
    </BottomDrawer>
  );
};

export default WorkoutListDrawer;
