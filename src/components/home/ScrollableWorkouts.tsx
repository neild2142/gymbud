import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Text from "../shared/Text";
import WorkoutCard from "../workout/WorkoutCard";

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
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
    paddingTop: 20,
  },
  myWorkouts: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  myWorkoutsText: {
    fontSize: 20,
    color: "black",
  },
});

export default ScrollableWorkouts;
