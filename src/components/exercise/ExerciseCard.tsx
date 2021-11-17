import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import WorkoutTag from "../workout/WorkoutTag";
import Text from "../shared/Text";
import muscleData from "../../data/muscles";
import Card from "../shared/Card";
import { Exercise } from "../../shared";
import { LIST_ITEM_HEIGHT } from "../shared/Deletable";
import { categoryTagColours } from "../../data/categories";

interface ExerciseCardProps {
  exercise: Exercise;
  setExercise(exercise: Exercise): void;
  drag?(): void;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({
  exercise,
  setExercise,
  drag,
}) => {
  return (
    <TouchableOpacity
      onPress={() => setExercise(exercise)}
      onLongPress={drag}
      style={{ flex: 2 }}
      activeOpacity={0.9}
    >
      <Card style={styles.card}>
        <View style={styles.header}>
          <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
            {exercise.name}
          </Text>
          <WorkoutTag
            bodyPart={exercise.categoryName}
            style={{ marginRight: 0 }}
          />
        </View>
        <Text style={{ color: "white" }}>
          lorem ipsum dolor sit amet, consectetur
        </Text>
        {/* <View style={styles.muscles}> */}
        {/* {exercise.muscles.map((mainMuscle) => (
            <WorkoutTag
              key={`${exercise.name}-${mainMuscle}`}
              bodyPart={muscleData[mainMuscle].name}
              color="#cafbff"
            />
          ))} */}
        {/* {exercise.muscles_secondary.map((secondary) => (
            <WorkoutTag
              key={`${exercise.name}-${secondary}`}
              bodyPart={muscleData[secondary].name}
              color="#ebebeb"
            />
          ))} */}
        {/* </View> */}
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: LIST_ITEM_HEIGHT,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    flexWrap: "wrap",
  },
  muscles: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
  },
});

export default ExerciseCard;
