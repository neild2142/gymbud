import React from "react";
import { Animated, Easing, View } from "react-native";
import Text from "../../components/shared/Text";
import WorkoutSVG from "../shared/WorkoutSVG";

const EmptyState = () => {
  let opacity = new Animated.Value(0);
  const animate = () => {
    opacity.setValue(0);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  React.useEffect(() => {
    animate();
  }, []);

  const animatedStyles = {
    opacity,
  };

  return (
    <Animated.View
      style={[
        {
          alignItems: "center",
          justifyContent: "center",
        },
        animatedStyles,
      ]}
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
    </Animated.View>
  );
};

export default EmptyState;
