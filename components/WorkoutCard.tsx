import React from "react";

import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";

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
    backgroundColor: "#574B90",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
  },
});

export default WorkoutCard;
