import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "../../styles";
import Header from "../components/Header";
import { HeaderProps } from "../shared";

const WorkoutHeader: React.FC<HeaderProps> = ({ cancel, add }) => {
  return (
    <Header title="Workout">
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Button
          buttonStyle={[styles.buttonStyle, styles.secondaryButtonStyle]}
          titleStyle={styles.titleStyle}
          title="Cancel"
          onPress={cancel}
        />
        <Button
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          title="Add"
          onPress={add}
        />
      </View>
    </Header>
  );
};

export default WorkoutHeader;
