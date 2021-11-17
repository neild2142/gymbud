import React from "react";
import { FlatList } from "react-native";
import useSets from "../../services/useSets";
import { FormSet, Set } from "../../shared";
import BottomDrawer from "../shared/BottomDrawer";
import BottomDrawerHeader from "../shared/BottomDrawerHeader";
import SetInput from "./SetInput";

const SetDrawer: React.FC<{
  title: string;
  onClose(): void;
  updateSetsForExercise(sets: Set[]): void;
  currentSets: Set[];
}> = ({ title, onClose, updateSetsForExercise, currentSets }) => {
  const { sets, addSetToExercise, updateSet } = useSets(currentSets);

  const createExerciseSet = (set: FormSet) => {
    const updatedSets = addSetToExercise(set);
    updateSetsForExercise(updatedSets);
  };

  const updateExerciseSet = (setNumber: number, formSet: FormSet) => {
    const updatedSets = updateSet(setNumber, formSet);
    updateSetsForExercise(updatedSets);
  };

  return (
    <BottomDrawer title={title} onClose={onClose}>
      <FlatList
        removeClippedSubviews={false}
        data={sets}
        keyExtractor={(_set, index) => `Set #${index}`}
        ListHeaderComponent={() => (
          <BottomDrawerHeader onClose={onClose} title={title} />
        )}
        renderItem={({ item: set, index }) => (
          <SetInput
            setNumber={index}
            createNewSet={createExerciseSet}
            updateSet={updateExerciseSet}
            key={index}
            set={set}
          />
        )}
      />
    </BottomDrawer>
  );
};

export default SetDrawer;
