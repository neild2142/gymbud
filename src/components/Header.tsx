import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { styles } from "../../styles";

interface HeaderProps {
  style?: StyleProp<ViewStyle>;
}

const Header: React.FC<HeaderProps> = ({ style, children }) => {
  return <View style={[styles.header, style]}>{children}</View>;
};

export default Header;
