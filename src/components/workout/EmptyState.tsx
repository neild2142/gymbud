import React from "react";
import { View } from "react-native";
import Text from "../../components/shared/Text";
import WorkoutSVG from "../shared/WorkoutSVG";

const EmptyState = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            textAlign: "center",
            color: "#3a3a3a",
            fontWeight: "bold",
          }}
        >
          Oops.. No Exercises Added
        </Text>
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            color: "#3a3a3a",
            marginTop: 10,
          }}
        >
          Looks like you haven't added any exercises to the workout!
        </Text>
      </View>
      <WorkoutSVG />
    </View>
  );
};

export default EmptyState;
