import React from "react";
import { Exercise } from "../../shared";
import BottomDrawer from "../shared/BottomDrawer";
import Set from "../../components/workout/Set";

const WorkoutListDrawer: React.FC<{
  currentExercise: Exercise;
  onClose(): void;
}> = ({ currentExercise, onClose }) => {
  const [sets, setSets] = React.useState(1);

  return (
    <BottomDrawer title={currentExercise.name} onClose={onClose}>
      {[...Array(sets)].map((_set, index) => (
        <Set setNumber={index + 1} createNewSet={() => setSets(sets + 1)} />
      ))}
    </BottomDrawer>
  );
};

export default WorkoutListDrawer;
