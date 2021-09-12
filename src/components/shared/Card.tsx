import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { styles } from "../../../styles";

interface CardProps {
  style?: StyleProp<ViewStyle>;
}

const Card: React.FC<CardProps> = ({ style, children }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

export default Card;
