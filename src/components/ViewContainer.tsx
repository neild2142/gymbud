import React from "react";
import { ImageBackground, StyleProp, ViewStyle } from "react-native";
import { styles } from "../../styles";

interface ContainerProps {
  style?: StyleProp<ViewStyle>;
}

const ViewContainer: React.FC<ContainerProps> = ({ style, children }) => {
  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      style={[styles.viewContainer, { width: "100%", height: "100%" }, style]}
    >
      {children}
    </ImageBackground>
  );
};

export default ViewContainer;
