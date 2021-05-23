import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "./Card";
import Text from "./Text";
import WorkoutTag from "./WorkoutTag";

interface WorkoutCardProps {
  title: string;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ title }) => {
  return (
    <Card style={{ minHeight: 230 }}>
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
