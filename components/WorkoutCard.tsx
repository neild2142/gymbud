import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface WorkoutCardProps {
  title: string;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ title }) => {
  return (
    <View style={styles.workout}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  workout: {
    width: 200,
    height: 200,
    padding: 10,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: "#574B90",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
  },
});

export default WorkoutCard;
