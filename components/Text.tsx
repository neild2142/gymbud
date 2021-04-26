import React from "react";
import {
  Text as NativeText,
  StyleSheet,
  StyleProp,
  TextStyle,
} from "react-native";

interface TextProps {
  style?: StyleProp<TextStyle>;
}

const Text: React.FC<TextProps> = ({ children, style }) => {
  return <NativeText style={[styles.text, style]}>{children}</NativeText>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "",
  },
});

export default Text;
