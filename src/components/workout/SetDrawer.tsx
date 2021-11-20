import React, { useRef } from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
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
  const { sets, addSetToExercise, updateSet } = useSets(currentSets);

  const createExerciseSet = (set: FormSet) => {
    const updatedSets = addSetToExercise(set);
    updateSetsForExercise(updatedSets);
  };

  const updateExerciseSet = (setNumber: number, formSet: FormSet) => {
    const updatedSets = updateSet(setNumber, formSet);
    updateSetsForExercise(updatedSets);
  };

  const scrollRef = useRef(null);

  return (
    <BottomDrawer title={title} onClose={onClose}>
      <ScrollView ref={scrollRef}>
        <BottomDrawerHeader onClose={onClose} title={title} />
        {sets.map((set, index) => (
          <Deletable
            deletable={set}
            onDismiss={(set) => console.log(set)}
            key={`${index}-set-deletable`}
            simultaneousHandlers={scrollRef}
          >
            <SetInput
              setNumber={index}
              createNewSet={createExerciseSet}
              updateSet={updateExerciseSet}
              key={index}
              set={set}
            />
          </Deletable>
        ))}
      </ScrollView>
    </BottomDrawer>
  );
};

export default SetDrawer;
