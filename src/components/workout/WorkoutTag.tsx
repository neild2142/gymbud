import React from "react";
import Text from "../shared/Text";
import { StyleProp, View, ViewStyle } from "react-native";
import { styles } from "../../../styles";
import { categoryTagColours } from "../../data/categories";
import { BodyPart } from "../../shared";

interface WorkoutTagProps {
  bodyPart: BodyPart;
  style?: StyleProp<ViewStyle>;
}

const WorkoutTag: React.FC<WorkoutTagProps> = ({ bodyPart, style }) => {
  return (
    <View
      style={[
        styles.tag,
        { backgroundColor: categoryTagColours[bodyPart] },
        style,
      ]}
    >
      <Text style={styles.bodyPartTag}>{bodyPart}</Text>
    </View>
  );
};

export default WorkoutTag;
