import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import WorkoutCard from "./components/WorkoutCard";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <View style={styles.cta}>
          <Text style={styles.welcome}>Welcome Back, Neil!</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("create")}
          >
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={{ paddingLeft: 20 }}>My Workouts</Text>
        <View style={styles.workouts}>
          {[1, 2, 3, 4].map((workout) => (
            <WorkoutCard title={`Workout ${workout}`} />
          ))}
        </View>
      </View>
      <View style={[styles.bar, styles.bottomNav]}>
        <Text style={styles.welcome}>App Navigation</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "space-between",
    height: "100%",
  },
  bar: {
    backgroundColor: "#574B90",
    height: "25%",
    width: "100%",
    display: "flex",
    padding: 20,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  cta: {
    justifyContent: "space-between",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FC85AE",
    padding: 10,
    width: 100,
    top: 15,
    borderRadius: 10,
  },
  workouts: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  workout: {
    width: 200,
    height: 200,
    padding: 10,
    marginRight: 10,
    backgroundColor: "#574B90",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#000",
  },
  bottomNav: {
    height: "10%",
    backgroundColor: "#303A52",
  },
  welcome: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
});
