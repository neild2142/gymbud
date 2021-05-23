import React from "react";
import { ActivityIndicator, StyleSheet, ScrollView, View } from "react-native";
import { BottomSheet, ListItem } from "react-native-elements";
import { Exercise } from "../screens/ExerciseList";

interface ExerciseListBottomSheetProps {
  bottomSheetVisible: boolean;
  hideBottomShelf(): void;
  exercises: Exercise[] | null;
}

const ExerciseListBottomSheet: React.FC<ExerciseListBottomSheetProps> = ({
  bottomSheetVisible,
  hideBottomShelf,
  exercises,
}) => {
  const renderLoadingSpinner = () => {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#A6FFA5" />
      </View>
    );
  };

  if (!exercises) {
    return renderLoadingSpinner();
  }

  const renderCancellationItem = () => {
    return (
      <ListItem
        onPress={() => hideBottomShelf()}
        containerStyle={{ backgroundColor: "#303A52" }}
      >
        <ListItem.Content>
          <ListItem.Title style={{ color: "white" }}>Close</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <BottomSheet
      modalProps={{
        animationType: "fade",
        onRequestClose: () => hideBottomShelf(),
        statusBarTranslucent: true,
      }}
      isVisible={bottomSheetVisible}
      containerStyle={{ backgroundColor: "rgba(0.5, 0.25, 0, 0.2)" }}
    >
      <ScrollView>
        <View>
          {exercises.map((exercise, i) => (
            <ListItem key={i} onPress={() => console.log(exercise.name)}>
              <ListItem.Content>
                <ListItem.Title>{exercise.name}</ListItem.Title>
                <ListItem.Subtitle>
                  Subtitle meta information of exercise.
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
          {renderCancellationItem()}
        </View>
      </ScrollView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default ExerciseListBottomSheet;
