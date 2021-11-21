import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  BackHandler,
  GestureResponderEvent,
  StatusBar,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface BottomDrawerProps {
  title: string;
  onClose(event?: GestureResponderEvent): void;
}

const BottomDrawer: React.FC<BottomDrawerProps> = ({ onClose, children }) => {
  const slideAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const hardwareBackPress = "hardwareBackPress";

    const backPressHandler = () => {
      onClose();
      return true;
    };
    BackHandler.addEventListener(hardwareBackPress, backPressHandler);

    return () => {
      BackHandler.removeEventListener(hardwareBackPress, backPressHandler);
    };
  }, []);

  useEffect(() => {
    Animated.timing(slideAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [slideAnimation]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: slideAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [1500, 0],
              }),
            },
          ],
        },
      ]}
    >
      <SafeAreaView>{children}</SafeAreaView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    position: "absolute",
    top: StatusBar.currentHeight,
    left: 0,
    right: 0,
    bottom: 0,
  },
  headingContainer: {
    flexDirection: "row",
    paddingLeft: 15,
    alignItems: "center",
  },
});

export default BottomDrawer;
