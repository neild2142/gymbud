import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "../shared/Card";
import Text from "../shared/Text";
import WorkoutTag from "./WorkoutTag";

interface WorkoutCardProps {
  title: string;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ title }) => {
  return (
    <Card style={{ minHeight: 230 }}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.tags}>
        <WorkoutTag bodyPart="Arms" />
        <WorkoutTag bodyPart="Chest" />
        <WorkoutTag bodyPart="Legs" />
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          rerum.
        </Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
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

  description: {
    marginTop: 20,
  },
  descriptionText: {
    color: "white",
  },
});

export default WorkoutCard;
