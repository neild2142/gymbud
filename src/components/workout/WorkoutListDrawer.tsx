import React from "react";
import { Exercise } from "../../shared";
import BottomDrawer from "../shared/BottomDrawer";
import Set from "../../components/workout/Set";
import useSets from "../../services/useSets";

const WorkoutListDrawer: React.FC<{
  currentExercise: Exercise;
  onClose(): void;
  workoutExercises: Exercise[];
  setWorkoutExercises(exercises: Exercise[]): void;
}> = ({ currentExercise, onClose, workoutExercises, setWorkoutExercises }) => {
  const [sets, createNewSet] = useSets(
    currentExercise,
    workoutExercises,
    setWorkoutExercises
  );

  return (
    <BottomDrawer title={currentExercise.name} onClose={onClose}>
      {[...Array(sets)].map((_set, index) => (
        <Set setNumber={index + 1} createNewSet={createNewSet} key={index} />
      ))}
    </BottomDrawer>
  );
};

export default WorkoutListDrawer;
