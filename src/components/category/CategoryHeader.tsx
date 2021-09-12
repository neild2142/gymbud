import React from "react";
import { Button } from "react-native-elements";
import { styles } from "../../../styles";
import Header from "../shared/Header";
import { HeaderProps } from "../../shared";

const CategoryHeader: React.FC<HeaderProps> = ({ cancel }) => {
  return (
    <Header title="Details">
      <Button
        buttonStyle={[styles.buttonStyle, styles.secondaryButtonStyle]}
        titleStyle={styles.titleStyle}
        title="Back"
        onPress={cancel}
      />
    </Header>
  );
};

export default CategoryHeader;
