import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "../../styles";
import CategoryCard from "../components/CategoryCard";
import ExerciseListBottomSheet from "../components/ExerciseListBottomSheet";
import Header from "../components/Header";
import Text from "../components/Text";
import ViewContainer from "../components/ViewContainer";
import useFetchWorkout, { Category } from "../services/useFetchWorkout";
import useWorkoutExercises from "../services/useWorkoutExercises";
import { RootStack } from "./RootStack";

type NewWorkoutStack = StackNavigationProp<RootStack, "ExerciseList">;

const ExerciseList = () => {
  const navigation = useNavigation<NewWorkoutStack>();
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const {
    categories,
    currentCategory,
    exercises,
    setCategoryHandler,
    resetExercises,
  } = useFetchWorkout();

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

  const hideBottomShelf = (): void => {
    setBottomSheetVisible(false);
  };

  return (
    <ViewContainer>
      <Header>
        <Text style={[styles.welcome, { color: "black" }]}>Details</Text>
        <Button
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          title="Back"
          onPress={() => navigation.navigate("New")}
        />
      </Header>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {categories.map((c, index) => (
            <CategoryCard
              key={`${c.name}-${c.id}`}
              category={{ ...c, categoryIndex: index }}
              onCategoryClick={onCategoryClick}
              numberOfExercisesSelected={exercisesForCategory(c.id)}
            />
          ))}
        </View>
        {currentCategory && (
          <ExerciseListBottomSheet
            hideBottomShelf={hideBottomShelf}
            bottomSheetVisible={bottomSheetVisible}
            exercises={exercises}
            addExerciseToWorkout={addExerciseToWorkout}
            workoutExercises={workoutExercises}
          />
        )}
      </ScrollView>
    </ViewContainer>
  );
};

export default ExerciseList;
