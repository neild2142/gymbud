import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "../../styles";
import CategoryList from "../components/CategoryList";
import ExerciseListBottomSheet from "../components/ExerciseListBottomSheet";
import Header from "../components/Header";
import Text from "../components/Text";
import ViewContainer from "../components/ViewContainer";
import useFetchCategory from "../services/useFetchCategory";
import useFetchWorkout, { Category } from "../services/useFetchWorkout";
import useWorkoutExercises from "../services/useWorkoutExercises";
import { RootStack } from "./RootStack";

type NewWorkoutStack = StackNavigationProp<RootStack, "ExerciseList">;

const ExerciseList = () => {
  const navigation = useNavigation<NewWorkoutStack>();
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const { categories, currentCategory, setCategoryHandler } =
    useFetchCategory();
  const { exercises, resetExercises } = useFetchWorkout(currentCategory);
  const { addExerciseToWorkout, workoutExercises, exercisesForCategory } =
    useWorkoutExercises();

  if (!categories) {
    return null;
  }

  const onCategoryClick = (category: Category): void => {
    setBottomSheetVisible(!bottomSheetVisible);
    setCategoryHandler(category);
    resetExercises();
  };

  const renderHeader = () => {
    return (
      <Header>
        <Text style={[styles.welcome, { color: "black" }]}>Details</Text>
        <Button
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          title="Back"
          onPress={() => navigation.navigate("New")}
        />
      </Header>
    );
  };

  const hideBottomShelf = (): void => {
    setBottomSheetVisible(false);
  };

  const renderExerciseList = () => {
    return (
      currentCategory && (
        <ExerciseListBottomSheet
          hideBottomShelf={hideBottomShelf}
          bottomSheetVisible={bottomSheetVisible}
          exercises={exercises}
          addExerciseToWorkout={addExerciseToWorkout}
          workoutExercises={workoutExercises}
        />
      )
    );
  };

  return (
    <ViewContainer>
      {renderHeader()}
      <ScrollView>
        <CategoryList
          onCategoryClick={onCategoryClick}
          categories={categories}
          exercisesForCategory={exercisesForCategory}
        />
        {renderExerciseList()}
      </ScrollView>
    </ViewContainer>
  );
};

export default ExerciseList;
