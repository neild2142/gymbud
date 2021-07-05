import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "../../styles";
import CategoryList from "../components/CategoryList";
import ExerciseListBottomSheet from "../components/ExerciseListBottomSheet";
import Header from "../components/Header";
import ViewContainer from "../components/ViewContainer";
import useFetchCategory from "../services/useFetchCategory";
import useFetchExercises, { Category } from "../services/useFetchExercises";
import useWorkoutExercises from "../services/useWorkoutExercises";
import { RootStack } from "./RootStack";

type NewWorkoutStack = StackNavigationProp<RootStack, "ExerciseList">;

const ExerciseList = () => {
  const navigation = useNavigation<NewWorkoutStack>();
  const [exerciseListVisible, setExerciseListVisible] = useState(false);

  const { categories, currentCategory, setCategoryHandler } =
    useFetchCategory();
  const { exercises, resetExercises } = useFetchExercises(currentCategory);
  const {
    addExerciseToWorkout,
    removeExerciseFromWorkout,
    workoutExercises,
    exercisesForCategory,
  } = useWorkoutExercises();

  if (!categories) {
    return null;
  }

  const onCategoryClick = (category: Category): void => {
    setExerciseListVisible(!exerciseListVisible);
    setCategoryHandler(category);
    resetExercises();
  };

  const renderHeader = () => {
    return (
      <Header title="Details">
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Button
            buttonStyle={[
              styles.buttonStyle,
              {
                backgroundColor: "transparent",
                borderColor: "grey",
                borderWidth: 1,
                marginRight: 10,
              },
            ]}
            titleStyle={styles.titleStyle}
            title="Back"
            onPress={() => navigation.goBack()}
          />
          <Button
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
            title="Next"
            onPress={() =>
              navigation.navigate("Workout", { exercises: workoutExercises })
            }
            disabled={workoutExercises.length === 0}
          />
        </View>
      </Header>
    );
  };

  const hideExerciseList = (): void => {
    setExerciseListVisible(false);
  };

  const renderExerciseList = () => {
    return (
      exerciseListVisible && (
        <ExerciseListBottomSheet
          hideExerciseList={hideExerciseList}
          exercises={exercises}
          addExerciseToWorkout={addExerciseToWorkout}
          removeExerciseFromWorkout={removeExerciseFromWorkout}
          workoutExercises={workoutExercises}
        />
      )
    );
  };

  return (
    <ViewContainer style={{ position: "relative" }}>
      {renderHeader()}
      <CategoryList
        onCategoryClick={onCategoryClick}
        categories={categories}
        exercisesForCategory={exercisesForCategory}
      />
      {renderExerciseList()}
    </ViewContainer>
  );
};

export default ExerciseList;
