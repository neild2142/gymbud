import React from "react";
import { Exercise } from "../../shared";
import BottomDrawer from "../shared/BottomDrawer";
import SetInput from "./SetInput";
import useSets from "../../services/useSets";

const WorkoutListDrawer: React.FC<{
  currentExercise: Exercise;
  onClose(): void;
  workoutExercises: Exercise[];
  setWorkoutExercises(exercises: Exercise[]): void;
}> = ({ currentExercise, onClose, workoutExercises, setWorkoutExercises }) => {
  const { sets, addSetToExercise, updateSet } = useSets(
    currentExercise,
    workoutExercises,
    setWorkoutExercises
  );

  console.log(sets);

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
