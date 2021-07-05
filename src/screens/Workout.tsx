import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "../../styles";
import Header from "../components/Header";
import Text from "../components/Text";
import ViewContainer from "../components/ViewContainer";
import { RootStack } from "./RootStack";

export type WorkoutStack = StackNavigationProp<RootStack, "Workout">;

const Workout: React.FC = () => {
  const navigation = useNavigation<WorkoutStack>();
  const { exercises } = useRoute<RouteProp<RootStack, "Workout">>().params;

  return (
    <ViewContainer style={{ position: "relative" }}>
      <Header title="New">
        <Button
          buttonStyle={[
            styles.buttonStyle,
            // TODO: Make secondary button style
            {
              backgroundColor: "transparent",
              borderColor: "grey",
              borderWidth: 1,
              marginRight: 10,
            },
          ]}
          titleStyle={styles.titleStyle}
          title="Cancel"
          onPress={() => navigation.goBack()}
        />
      </Header>
      <View>
        {exercises.map((exercise) => (
          <Text key={exercise.id}>{exercise.name}</Text>
        ))}
      </View>
    </ViewContainer>
  );
};

export default Workout;
