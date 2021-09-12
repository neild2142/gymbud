import React, { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, TextInput, View } from "react-native";
import { FormSet, Set } from "../../shared";
import Text from "../shared/Text";

const SetInput: React.FC<{
  setNumber: number;
  createNewSet(set: FormSet): void;
  set: Set;
}> = ({ setNumber, createNewSet, set: { complete, weight, reps } }) => {
  const repsRef = useRef(null);

  const { control, handleSubmit } = useForm<FormSet>({
    mode: "onBlur",
  });

  const completeSet = handleSubmit((set: FormSet) => {
    createNewSet(set);
  });

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
          <Controller
            control={control}
            name="weight"
            defaultValue={weight}
            render={({ field: { onChange, value, onBlur } }) => (
              <TextInput
                style={stylesheet.input}
                keyboardType="number-pad"
                returnKeyType="next"
                onSubmitEditing={() => repsRef.current.focus()}
                blurOnSubmit={false}
                value={value}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
              />
            )}
          />
        </View>
        <View style={stylesheet.formColumn}>
          <Text>Reps</Text>
          <Controller
            control={control}
            name="reps"
            defaultValue={reps}
            render={({ field: { onChange, value, onBlur } }) => (
              <TextInput
                style={stylesheet.input}
                keyboardType="number-pad"
                value={value}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                ref={repsRef}
                onSubmitEditing={completeSet}
              />
            )}
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

export default SetInput;
