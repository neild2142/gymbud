import React from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "../styles";
import Text from "./Text";

const TopBar = () => {
  return (
    <View style={styles.bar}>
      <View style={styles.cta}>
        <Text style={styles.welcome}>Welcome Back, Neil!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("create")}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;
