import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Button } from "react-native-elements";
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
        <Button
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          title="New"
          onPress={() => navigation.navigate("New")}
        />
      </View>
    </View>
  );
};

export default TopBar;
