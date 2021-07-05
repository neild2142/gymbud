import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { styles } from "../../styles";
import Text from "../components/Text";

interface HeaderProps {
  title: string;
  style?: StyleProp<ViewStyle>;
}

const Header: React.FC<HeaderProps> = ({ title, style, children }) => (
  <View style={[styles.header, style]}>
    <Text style={styles.welcome}>{title}</Text>
    <View style={{ marginTop: 10 }}>{children}</View>
  </View>
);

export default Header;
