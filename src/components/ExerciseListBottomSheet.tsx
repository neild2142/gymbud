import React, { useEffect } from "react";
import {
  ActivityIndicator,
  BackHandler,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import Text from "../components/Text";
import { Category, Exercise } from "../services/useFetchExercises";
import BottomDrawer from "./BottomDrawer";

interface ExerciseListBottomSheetProps {
  hideExerciseList(): void;
  exercises: Exercise[] | null;
  currentCategory: Category;
  addExerciseToWorkout(exercise: Exercise): void;
  removeExerciseFromWorkout(exercise: Exercise): void;
  workoutExercises: Exercise[];
}

const ExerciseListBottomSheet: React.FC<ExerciseListBottomSheetProps> = ({
  hideExerciseList,
  exercises,
  addExerciseToWorkout,
  removeExerciseFromWorkout,
  workoutExercises,
  currentCategory,
}) => {
  useEffect(() => {
    const backPressHandler = () => {
      hideExerciseList();
      return true;
    };
    BackHandler.addEventListener("hardwareBackPress", backPressHandler);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backPressHandler);
    };
  }, []);

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

  const exerciseAlreadyInWorkout = (exercise: Exercise): boolean =>
    workoutExercises.some(
      (workoutExercise) => workoutExercise.id === exercise.id
    );

  const listItemContainerStyle = (exerciseAdded: boolean) => {
    return exerciseAdded ? styles.added : null;
  };

  const handleExercisePress = (exercise: Exercise, exerciseAdded: boolean) => {
    exerciseAdded
      ? removeExerciseFromWorkout(exercise)
      : addExerciseToWorkout(exercise);
  };

  const closeExerciseListHandler = () => {
    hideExerciseList();
  };

  const renderExercises = () => {
    return (
      <BottomDrawer>
        <View>
          <View style={styles.headingContainer}>
            <Icon
              name="close-outline"
              type="ionicon"
              size={32}
              color="#303A52"
              onPress={closeExerciseListHandler}
            />
            <Text style={styles.headingTitle}>{currentCategory.name}</Text>
          </View>
          <FlatList
            data={exercises}
            keyExtractor={(item, index) => `${item.name} - ${index}`}
            renderItem={({ item: exercise }) => {
              const alreadyAdded = exerciseAlreadyInWorkout(exercise);

              return (
                <TouchableOpacity
                  style={[
                    {
                      padding: 15,
                    },
                    listItemContainerStyle(alreadyAdded),
                  ]}
                  onPress={() => handleExercisePress(exercise, alreadyAdded)}
                >
                  <Text style={styles.listItem}>{exercise.name}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </BottomDrawer>
    );
  };

  return renderExercises();
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
  added: {
    backgroundColor: "#D6F0FF",
  },
  headingContainer: {
    flexDirection: "row",
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 15,
    alignItems: "center",
  },
  headingTitle: {
    fontSize: 32,
    color: "black",
    marginLeft: 15,
  },
  listItem: {
    fontSize: 18,
    color: "black",
  },
});

export default ExerciseListBottomSheet;
