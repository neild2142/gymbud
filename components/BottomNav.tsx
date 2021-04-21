import React from "react";
import { View } from "react-native";
import { styles } from "../styles";
import Text from "./Text";

const BottomNav = () => {
  return (
    <View style={[styles.bar, styles.bottomNav]}>
      <Text style={styles.welcome}>App Navigation</Text>
    </View>
  );
};

export default BottomNav;
