import React from "react";
import { TouchableOpacity, View } from "react-native";
import { HomeStack } from "../screens/Home";
import { styles } from "../styles";
import Text from "./Text";

interface TopBarProps {
  navigation: HomeStack;
}

const TopBar: React.FC<TopBarProps> = ({ navigation }) => {
  return (
    <View style={styles.bar}>
      <View style={styles.cta}>
        <Text style={styles.welcome}>Welcome Back, Neil!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("New")}
        >
          <Text style={styles.buttonText}>New</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;
