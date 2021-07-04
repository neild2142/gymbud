import React from "react";
import { ActivityIndicator, StyleSheet, ScrollView, View } from "react-native";
import { BottomSheet, ListItem } from "react-native-elements";
import { Exercise } from "../services/useFetchExercises";

interface ExerciseListBottomSheetProps {
  bottomSheetVisible: boolean;
  hideBottomShelf(): void;
  exercises: Exercise[] | null;
  addExerciseToWorkout(exercise: Exercise): void;
  removeExerciseFromWorkout(exercise: Exercise): void;
  workoutExercises: Exercise[];
}

const ExerciseListBottomSheet: React.FC<ExerciseListBottomSheetProps> = ({
  bottomSheetVisible,
  hideBottomShelf,
  exercises,
  addExerciseToWorkout,
  removeExerciseFromWorkout,
  workoutExercises,
}) => {
  const renderLoadingSpinner = () => {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#A6FFA5" />
      </View>
    );
  };

  if (!exercises) {
    return renderLoadingSpinner();
  }

  const renderCancellationItem = () => {
    return (
      <ListItem
        onPress={() => hideBottomShelf()}
        containerStyle={{ backgroundColor: "#303A52" }}
      >
        <ListItem.Content>
          <ListItem.Title style={{ color: "white" }}>Close</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    );
  };

  const exerciseAlreadyInWorkout = (exercise: Exercise): boolean =>
    workoutExercises.some(
      (workoutExercise) => workoutExercise.id === exercise.id
    );

  const listItemContainerStyle = (exerciseAdded: boolean) => {
    return exerciseAdded ? styles.disabled : null;
  };

  const handleExercisePress = (exercise: Exercise, exerciseAdded: boolean) => {
    exerciseAdded
      ? removeExerciseFromWorkout(exercise)
      : addExerciseToWorkout(exercise);
  };

  const renderExercises = () => {
    return exercises.map((exercise, i) => {
      const exerciseAdded = exerciseAlreadyInWorkout(exercise);
      return (
        <ListItem
          key={i}
          onPress={() => handleExercisePress(exercise, exerciseAdded)}
          containerStyle={listItemContainerStyle(exerciseAdded)}
        >
          <ListItem.Content>
            <ListItem.Title>{exercise.name}</ListItem.Title>
            <ListItem.Subtitle>
              Subtitle meta information of exercise.
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      );
    });
  };

  return (
    <BottomSheet
      modalProps={{
        animationType: "fade",
        onRequestClose: () => hideBottomShelf(),
        statusBarTranslucent: true,
      }}
      isVisible={bottomSheetVisible}
      containerStyle={{ backgroundColor: "rgba(0.5, 0.25, 0, 0.2)" }}
    >
      <ScrollView>
        <View>
          {renderExercises()}
          {renderCancellationItem()}
        </View>
      </ScrollView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  disabled: {
    backgroundColor: "#D6F0FF",
  },
});

export default ExerciseListBottomSheet;
