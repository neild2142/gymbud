import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Text from "./Text";
import WorkoutCard from "./WorkoutCard";

interface ScrollableWorkoutsProps {
  workouts: number[];
}

const ScrollableWorkouts: React.FC<ScrollableWorkoutsProps> = ({
  workouts,
}) => {
  return (
    <View>
      <View style={styles.myWorkouts}>
        <Text style={styles.myWorkoutsText}>My Workouts</Text>
        <Text style={[styles.myWorkoutsText, { color: "#FC85AE" }]}>
          See All
        </Text>
      </View>
      <View style={styles.workouts}>
        <ScrollView horizontal>
          {workouts.map((workout) => (
            <WorkoutCard title={`Workout ${workout}`} key={workout} />
          ))}
        </ScrollView>
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
  myWorkouts: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
  },
  myWorkoutsText: {
    fontSize: 20,
  },
});

export default ScrollableWorkouts;
