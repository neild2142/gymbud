import React, { useEffect, useRef } from "react";
import { Animated, BackHandler, StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";
import Text from "./Text";

interface BottomDrawerProps {
  title: string;
  onClose(): void;
}

const BottomDrawer: React.FC<BottomDrawerProps> = ({
  title,
  onClose,
  children,
}) => {
  const slideAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const backPressHandler = () => {
      onClose();
      return true;
    };
    BackHandler.addEventListener("hardwareBackPress", backPressHandler);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backPressHandler);
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
                outputRange: [2000, 0],
              }),
            },
          ],
        },
      ]}
    >
      <View>
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
        {children}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    position: "absolute",
    top: 30,
    bottom: 0,
    left: 0,
    right: 0,
  },
  headingContainer: {
    flexDirection: "row",
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 15,
    alignItems: "center",
  },
  headingTitle: {
    fontSize: 32,
    color: "black",
    marginLeft: 15,
  },
});

export default BottomDrawer;
