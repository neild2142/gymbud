import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { BackHandler } from "react-native";
import CategoryHeader from "../components/category/CategoryHeader";
import CategoryList from "../components/category/CategoryList";
import ExerciseListBottomSheet from "../components/exercise/ExerciseListBottomSheet";
import ViewContainer from "../components/shared/ViewContainer";
import useFetchCategory from "../services/useFetchCategory";
import useFetchExercises from "../services/useFetchExercises";
import useWorkoutExercises from "../services/useWorkoutExercises";
import { Category } from "../shared";
import { RootStack } from "./RootStack";

type NewWorkoutStack = StackNavigationProp<RootStack, "Categories">;

const Categories = () => {
  const navigation = useNavigation<NewWorkoutStack>();
  const { exercises: addedExercises } =
    useRoute<RouteProp<RootStack, "Categories">>().params;
  const [exerciseListVisible, setExerciseListVisible] = useState(false);

  const { categories, currentCategory, setCategoryHandler } =
    useFetchCategory();
  const { exercises, resetExercises } = useFetchExercises(currentCategory);
  const {
    addExerciseToWorkout,
    removeExerciseFromWorkout,
    workoutExercises,
    exercisesForCategory,
  } = useWorkoutExercises(addedExercises);

  const navigateBack = () => {
    navigation.navigate("Workout", { exercises: workoutExercises });
  };

  React.useEffect(() => {
    const backPressHandler = () => {
      if (exerciseListVisible) {
        return false;
      }
      navigateBack();
      return true;
    };
    BackHandler.addEventListener("hardwareBackPress", backPressHandler);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backPressHandler);
    };
  }, [workoutExercises, exerciseListVisible]);

  if (!categories) {
    return null;
  }

  const onCategoryClick = (category: Category): void => {
    setExerciseListVisible(!exerciseListVisible);
    setCategoryHandler(category);
    resetExercises();
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
          currentCategory={currentCategory!}
          addExerciseToWorkout={addExerciseToWorkout}
          removeExerciseFromWorkout={removeExerciseFromWorkout}
          workoutExercises={workoutExercises}
        />
      )
    );
  };

  return (
    <ViewContainer style={{ position: "relative" }}>
      <CategoryHeader back={navigateBack} />
      <CategoryList
        onCategoryClick={onCategoryClick}
        categories={categories}
        exercisesForCategory={exercisesForCategory}
      />
      {renderExerciseList()}
    </ViewContainer>
  );
};

export default Categories;
