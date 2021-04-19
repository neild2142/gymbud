import React from "react";
import { View, Text, StyleSheet } from "react-native";
import WorkoutCard from "./WorkoutCard";

interface ScrollableWorkoutsProps {
  workouts: number[];
}

const ScrollableWorkouts: React.FC<ScrollableWorkoutsProps> = ({
  workouts,
}) => {
  return (
    <View>
      <Text style={{ paddingLeft: 20 }}>My Workouts</Text>
      <View style={styles.workouts}>
        {workouts.map((workout) => (
          <WorkoutCard title={`Workout ${workout}`} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  workouts: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
});

export default ScrollableWorkouts;
