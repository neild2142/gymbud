import React from "react";
import Text from "../shared/Text";
import { StyleProp, View, ViewStyle } from "react-native";
import { styles } from "../../../styles";

interface WorkoutTagProps {
  bodyPart: string;
  color: string;
  style?: StyleProp<ViewStyle>;
}

export const tagColors = ["#A6FFA5", "#F2A5FF", "#FFEBA5"];

const WorkoutTag: React.FC<WorkoutTagProps> = ({ bodyPart, color, style }) => {
  return (
    <View style={[styles.tag, { backgroundColor: color }, style]}>
      <Text style={styles.bodyPartTag}>{bodyPart}</Text>
    </View>
  );
};

export default WorkoutTag;
