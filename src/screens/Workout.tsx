import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";
import { Button } from "react-native-elements";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { styles } from "../../styles";
import BottomDrawer from "../components/BottomDrawer";
import ExerciseCard from "../components/ExerciseCard";
import Header from "../components/Header";
import Set from "../components/Set";
import Text from "../components/Text";
import ViewContainer from "../components/ViewContainer";
import { Exercise } from "../services/useFetchExercises";
import { RootStack } from "./RootStack";

export type WorkoutStack = StackNavigationProp<RootStack, "Workout">;

const Workout: React.FC = () => {
  const { exercises } = useRoute<RouteProp<RootStack, "Workout">>().params;
  const navigation = useNavigation<WorkoutStack>();
  const [currentExercise, setCurrentExercise] = useState<Exercise | null>(null);
  const [workoutExercises, setWorkoutExercises] = useState<Exercise[] | null>();

  const renderExerciseDrawer = () => {
    console.log(currentExercise);
    return (
      currentExercise && (
        <BottomDrawer
          title={currentExercise.name}
          onClose={() => setCurrentExercise(null)}
        >
          <Set />
        </BottomDrawer>
      )
    );
  };

  /*
    Bug - workoutExercises was not being set to exercises
    Perhaps this was down to the manner in which react native
    navigation renders its components.
  */
  React.useEffect(() => {
    setWorkoutExercises(exercises);
  }, [exercises]);

  const renderRightActions = () => {
    return (
      <View style={stylesheet.swipeableAction}>
        <Text style={{ color: "white" }}>Delete</Text>
      </View>
    );
  };

  const swipeFromRightOpen = (id: number) =>
    setWorkoutExercises(workoutExercises!.filter((e) => e.id !== id));

  const renderItem = ({ item: exercise, drag }: RenderItemParams<Exercise>) => (
    <Swipeable
      renderRightActions={renderRightActions}
      onSwipeableRightOpen={() => swipeFromRightOpen(exercise.id)}
      key={exercise.id}
    >
      <ExerciseCard
        exercise={exercise}
        setExercise={setCurrentExercise}
        drag={drag}
      />
    </Swipeable>
  );

  const renderExercises = () => (
    <DraggableFlatList
      data={workoutExercises!}
      keyExtractor={(item, index) => `${item.name} - ${index}`}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      onDragEnd={({ data }) => setWorkoutExercises(data)}
    />
  );

  const renderHeader = () => (
    <Header title="Workout">
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Button
          buttonStyle={[styles.buttonStyle, styles.secondaryButtonStyle]}
          titleStyle={styles.titleStyle}
          title="Cancel"
          onPress={() => navigation.goBack()}
        />
        <Button
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          title="Add"
          onPress={() =>
            navigation.navigate("Categories", {
              exercises: workoutExercises ? workoutExercises : exercises,
            })
          }
        />
      </View>
    </Header>
  );

  return (
    <ViewContainer style={{ position: "relative" }}>
      {renderHeader()}
      {workoutExercises && renderExercises()}
      {renderExerciseDrawer()}
    </ViewContainer>
  );
};

const stylesheet = StyleSheet.create({
  swipeableAction: {
    flex: 1,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f74949",
    justifyContent: "flex-end",
    borderRadius: 20,
    marginTop: 20,
  },
});

export default Workout;
