import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";
import Text from "../shared/Text";

const BottomDrawerHeader: React.FC<{
  title: string;
  onClose(): void;
}> = ({ title, onClose }) => {
  return (
    <View style={styles.headingContainer}>
      <Icon
        name="close-outline"
        type="ionicon"
        size={32}
        color="#303A52"
        onPress={onClose}
      />
      <Text style={styles.headingTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
    paddingLeft: 15,
    alignItems: "center",
  },
  headingTitle: {
    fontSize: 24,
    color: "black",
    marginLeft: 15,
    width: "80%",
  },
});

export default BottomDrawerHeader;
