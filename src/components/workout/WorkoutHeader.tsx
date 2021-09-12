import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "../../../styles";
import Header from "../shared/Header";
import { HeaderProps } from "../../shared";

const WorkoutHeader: React.FC<HeaderProps> = ({ back, next }) => {
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
          onPress={back}
        />
        <Button
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          title="Add"
          onPress={next}
        />
      </View>
    </Header>
  );
};

export default WorkoutHeader;
