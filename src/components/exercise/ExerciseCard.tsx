import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Exercise } from "../../services/useFetchExercises";
import WorkoutTag from "../workout/WorkoutTag";
import Text from "../shared/Text";
import muscleData from "../../data/muscles";
import Card from "../shared/Card";

interface ExerciseCardProps {
  exercise: Exercise;
  setExercise(exercise: Exercise): void;
  drag(): void;
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
            color="#FFEBA5"
            style={{ marginRight: 0 }}
          />
        </View>
        <View style={styles.muscles}>
          {exercise.muscles.map((mainMuscle) => (
            <WorkoutTag
              key={`${exercise.name}-${mainMuscle}`}
              bodyPart={muscleData[mainMuscle].name}
              color="#cafbff"
            />
          ))}
          {exercise.muscles_secondary.map((secondary) => (
            <WorkoutTag
              key={`${exercise.name}-${secondary}`}
              bodyPart={muscleData[secondary].name}
              color="#ebebeb"
            />
          ))}
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    marginTop: 20,
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
