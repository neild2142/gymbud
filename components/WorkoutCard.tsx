import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "./Text";

interface WorkoutCardProps {
  title: string;
}

interface WorkoutTagProps {
  bodyPart: string;
  color: string;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ title }) => {
  return (
    <View style={styles.workout}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.tags}>
        <WorkoutTag bodyPart="bicep" color="#A6FFA5" />
        <WorkoutTag bodyPart="chest" color="#F2A5FF" />
        <WorkoutTag bodyPart="shoulders" color="#FFEBA5" />
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          rerum.
        </Text>
      </View>
    </View>
  );
};

const WorkoutTag: React.FC<WorkoutTagProps> = ({ bodyPart, color }) => {
  return (
    <View style={[styles.tag, { backgroundColor: color }]}>
      <Text style={styles.bodyPartTag}>{bodyPart}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  workout: {
    width: 200,
    minHeight: 230,
    padding: 20,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: "#574B90",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tags: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    minWidth: 60,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    marginRight: 10,
    marginTop: 10,
  },
  bodyPartTag: {
    padding: 5,
  },
  description: {
    marginTop: 20,
  },
  descriptionText: {
    color: "white",
  },
});

export default WorkoutCard;
