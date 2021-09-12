import React from "react";
import { Button } from "react-native-elements";
import { styles } from "../../../styles";
import Header from "../shared/Header";
import { HeaderProps } from "../../shared";

const HomeHeader: React.FC<HeaderProps> = ({ next }) => {
  return (
    <Header title="Welcome Back, Neil!">
      <Button
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.titleStyle}
        title="New"
        onPress={next}
      />
    </Header>
  );
};

export default HomeHeader;
