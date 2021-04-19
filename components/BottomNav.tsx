import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { styles } from "../styles";

const BottomNav = () => {
  return (
    <View style={[styles.bar, styles.bottomNav]}>
      <Text style={styles.welcome}>App Navigation</Text>
    </View>
  );
};

export default BottomNav;
