import React, { useRef, useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Text from "../shared/Text";

const Set: React.FC<{
  setNumber: number;
  createNewSet(): void;
}> = ({ setNumber, createNewSet }) => {
  const repsRef = useRef(null);
  const [complete, setComplete] = useState(false);

  const completeSet = () => {
    setComplete(true);
    createNewSet();
  };

  return (
    <>
      <View style={stylesheet.formContainer}>
        <View>
          <Text
            style={{
              padding: 12,
              backgroundColor: complete ? "#A6FFA5" : "#606e91",
              borderRadius: 50,
              width: 40,
              height: 40,
              textAlign: "center",
              color: complete ? "black" : "white",
            }}
          >
            {setNumber}
          </Text>
        </View>
        <View style={stylesheet.formColumn}>
          <Text>Weight (kg)</Text>
          <TextInput
            style={stylesheet.input}
            keyboardType="number-pad"
            returnKeyType="next"
            onSubmitEditing={() => repsRef.current.focus()}
            blurOnSubmit={false}
          />
        </View>
        <View style={stylesheet.formColumn}>
          <Text>Reps</Text>
          <TextInput
            style={stylesheet.input}
            keyboardType="number-pad"
            ref={repsRef}
            onSubmitEditing={completeSet}
          />
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "#d3d3d3aa",
          borderBottomWidth: 1,
          width: "90%",
          alignSelf: "center",
        }}
      />
    </>
  );
};

const stylesheet = StyleSheet.create({
  formContainer: {
    paddingVertical: 30,
    paddingHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  formColumn: {
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#d3d3d3",
    padding: 10,
    borderRadius: 5,
    width: 80,
    marginTop: 20,
  },
});

export default Set;
