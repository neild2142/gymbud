import React from "react";
import Text from "./Text";
import { View } from "react-native";
import { styles } from "../../styles";

interface WorkoutTagProps {
  bodyPart: string;
  color: string;
}

export const tagColors = ["#A6FFA5", "#F2A5FF", "#FFEBA5"];

const WorkoutTag: React.FC<WorkoutTagProps> = ({ bodyPart, color }) => {
  return (
    <View style={[styles.tag, { backgroundColor: color }]}>
      <Text style={styles.bodyPartTag}>{bodyPart}</Text>
    </View>
  );
};

export default WorkoutTag;
