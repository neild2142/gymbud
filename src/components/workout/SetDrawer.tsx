import React, { useRef } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import useSets from "../../services/useSets";
import { FormSet, Set } from "../../shared";
import BottomDrawer from "../shared/BottomDrawer";
import BottomDrawerHeader from "../shared/BottomDrawerHeader";
import Deletable from "../shared/Deletable";
import SetInput from "./SetInput";

const SetDrawer: React.FC<{
  title: string;
  onClose(): void;
  updateSetsForExercise(sets: Set[]): void;
  currentSets: Set[];
}> = ({ title, onClose, updateSetsForExercise, currentSets }) => {
  const { sets, addSetToExercise, updateSet, removeSet } = useSets(currentSets);
  const scrollRef = useRef(null);

  const createExerciseSet = (set: FormSet) => {
    const updatedSets = addSetToExercise(set);
    updateSetsForExercise(updatedSets);
  };

  const updateExerciseSet = (setNumber: number, formSet: FormSet) => {
    const updatedSets = updateSet(setNumber, formSet);
    updateSetsForExercise(updatedSets);
  };

  const removeExerciseSet = (setNumber: number) => {
    const updatedSets = removeSet(setNumber);
    updateSetsForExercise(updatedSets);
  };

  const renderSetInput = (set: Set, index: number) => (
    <SetInput
      setNumber={index}
      createNewSet={createExerciseSet}
      updateSet={updateExerciseSet}
      key={set.id || `set-${index}`}
      set={set}
    />
  );

  const wrapInDeletable = (set: Set, index: number) => (
    <Deletable
      deletable={set}
      onDismiss={() => removeExerciseSet(index)}
      key={set.id || `set-${index}`}
      simultaneousHandlers={scrollRef}
      zeroMarginVertical
    >
      {renderSetInput(set, index)}
    </Deletable>
  );

  return (
    <BottomDrawer title={title} onClose={onClose}>
      <ScrollView ref={scrollRef}>
        <BottomDrawerHeader onClose={onClose} title={title} />
        <View>
          {sets.map((set, index) =>
            set.complete
              ? wrapInDeletable(set, index)
              : renderSetInput(set, index)
          )}
        </View>
      </ScrollView>
    </BottomDrawer>
  );
};

export default SetDrawer;
