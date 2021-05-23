import React from "react";
import { Pressable } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { BottomSheet, ListItem } from "react-native-elements";

interface ExerciseListBottomSheetProps {
  bottomSheetVisible: boolean;
  hideBottomShelf(): void;
}

const ExerciseListBottomSheet: React.FC<ExerciseListBottomSheetProps> = ({
  bottomSheetVisible,
  hideBottomShelf,
}) => {
  const list = [
    {
      title: "Barbell Curl 1",
      subtitle: "Barbell Curl Subtitle",
      onPress: () => console.log("curl 1"),
    },
    {
      title: "Hammer Curl 2",
      subtitle: "Hammer Curl Subtitle",
      onPress: () => console.log("curl 2"),
    },
    {
      title: "Cancel",
      containerStyle: { backgroundColor: "#303A52" },
      titleStyle: { color: "white" },
      onPress: () => hideBottomShelf(),
    },
  ];

  return (
    <TouchableWithoutFeedback onPress={() => hideBottomShelf()}>
      <BottomSheet
        modalProps={{
          animationType: "fade",
          onRequestClose: () => hideBottomShelf(),
          statusBarTranslucent: true,
        }}
        isVisible={bottomSheetVisible}
        containerStyle={{ backgroundColor: "rgba(0.5, 0.25, 0, 0.2)" }}
      >
        {list.map((l, i) => (
          <ListItem
            containerStyle={l.containerStyle}
            onPress={() => console.log(l.title)}
            key={i}
          >
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
              {l.subtitle && (
                <ListItem.Subtitle style={l.titleStyle}>
                  {l.subtitle}
                </ListItem.Subtitle>
              )}
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </TouchableWithoutFeedback>
  );
};

export default ExerciseListBottomSheet;
