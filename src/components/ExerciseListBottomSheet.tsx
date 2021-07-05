import React, { useEffect, useRef } from "react";
import {
  ActivityIndicator,
  Animated,
  BackHandler,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import Text from "../components/Text";
import { Exercise } from "../services/useFetchExercises";

interface ExerciseListBottomSheetProps {
  hideExerciseList(): void;
  exercises: Exercise[] | null;
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
}) => {
  const slideAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(slideAnimation, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, [slideAnimation]);

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
      <Animated.View
        style={[
          styles.exerciseContainer,
          {
            transform: [
              {
                translateY: slideAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [2000, 0],
                }),
              },
            ],
          },
        ]}
      >
        <View>
          <View style={styles.headingContainer}>
            <Icon
              name="close-outline"
              type="ionicon"
              size={32}
              color="#303A52"
              onPress={closeExerciseListHandler}
            />
            <Text style={styles.headingTitle}>Add Exercises</Text>
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
      </Animated.View>
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
  exerciseContainer: {
    flex: 1,
    backgroundColor: "white",
    position: "absolute",
    top: 30,
    bottom: 0,
    left: 0,
    right: 0,
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
