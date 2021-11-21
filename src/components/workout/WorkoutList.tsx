import React, { useRef } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Exercise } from "../../shared";
import ExerciseCard from "../exercise/ExerciseCard";
import Deletable from "../shared/Deletable";

const WorkoutList: React.FC<{
  exercises: Exercise[] | null | undefined;
  setCurrentExerciseHandler(exercises: Exercise): void;
  setExercisesHandler(exercises: Exercise[]): void;
}> = ({ exercises, setCurrentExerciseHandler, setExercisesHandler }) => {
  if (!exercises) {
    return null;
  }

  const scrollRef = useRef(null);

  return (
    <ScrollView ref={scrollRef}>
      {exercises.map((exercise) => (
        <Deletable
          deletable={exercise}
          onDismiss={(exercise) =>
            setExercisesHandler(exercises.filter((e) => e.id !== exercise.id))
          }
          renderDeletable={(exercise: Exercise) => (
            <ExerciseCard
              exercise={exercise}
              setExercise={() => setCurrentExerciseHandler(exercise)}
            />
          )}
          simultaneousHandlers={scrollRef}
          key={exercise.id}
        />
      ))}
    </ScrollView>
  );
};

export default WorkoutList;
