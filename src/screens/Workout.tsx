import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { Button } from "react-native-elements";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { styles } from "../../styles";
import BottomDrawer from "../components/BottomDrawer";
import ExerciseCard from "../components/ExerciseCard";
import Header from "../components/Header";
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

  const renderExerciseDrawer = () =>
    currentExercise && (
      <BottomDrawer
        title={currentExercise.name}
        onClose={() => setCurrentExercise(null)}
      />
    );

  /*
    Bug - workoutExercises was not being set to exercises
    Perhaps this was down to the manner in which react native
    navigation renders its components.
  */
  React.useEffect(() => {
    setWorkoutExercises(exercises);
  }, [exercises]);

  const renderLeftActions = () => {
    return (
      <View
        style={{
          flex: 1,
          padding: 20,
          backgroundColor: "#fd6c6c",
          justifyContent: "center",
          borderRadius: 20,
          marginTop: 20,
        }}
      >
        <Text style={{ color: "white" }}>Delete</Text>
      </View>
    );
  };

  const swipeFromLeftOpen = (id: number) =>
    setWorkoutExercises(workoutExercises!.filter((e) => e.id !== id));

  const renderExercises = () => (
    <FlatList
      data={workoutExercises}
      keyExtractor={(item, index) => `${item.name} - ${index}`}
      showsVerticalScrollIndicator={false}
      renderItem={({ item: exercise }) => (
        <Swipeable
          renderLeftActions={renderLeftActions}
          onSwipeableLeftOpen={() => swipeFromLeftOpen(exercise.id)}
          key={exercise.id}
        >
          <ExerciseCard exercise={exercise} setExercise={setCurrentExercise} />
        </Swipeable>
      )}
    />
  );

  return (
    <ViewContainer style={{ position: "relative" }}>
      <Header title="Workout">
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Button
            buttonStyle={[
              styles.buttonStyle,
              // TODO: Make secondary button style
              {
                backgroundColor: "transparent",
                borderColor: "grey",
                borderWidth: 1,
                marginRight: 10,
              },
            ]}
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
      {workoutExercises && renderExercises()}
      {renderExerciseDrawer()}
    </ViewContainer>
  );
};

export default Workout;
