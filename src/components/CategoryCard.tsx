import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Category } from "../services/useFetchWorkout";
import Card from "./Card";
import Text from "./Text";
import WorkoutTag, { tagColors } from "./WorkoutTag";

interface CategoryCardProps {
  category: Category;
  onCategoryClick(category: Category): void;
  numberOfExercisesSelected: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  onCategoryClick,
  numberOfExercisesSelected,
}) => {
  const renderExerciseSelectedCount = () =>
    numberOfExercisesSelected !== 0 && (
      <View
        style={{
          backgroundColor: "#D6F0FF",
          borderRadius: 50,
          width: 30,
          height: 30,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text style={{ color: "#303A52", fontSize: 15, fontWeight: "bold" }}>
          {numberOfExercisesSelected}
        </Text>
      </View>
    );

  const renderCardHeader = () => (
    <View
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 25,
          fontWeight: "bold",
        }}
      >
        {category.name}
      </Text>
      {renderExerciseSelectedCount()}
    </View>
  );

  const renderCardBody = () => (
    <>
      <WorkoutTag
        bodyPart={category.name}
        color={tagColors[category.categoryIndex % tagColors.length]}
      />
      <Text style={{ color: "white" }}>
        Lorem ipsum dolor, sit amet consectetur!
      </Text>
    </>
  );

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => onCategoryClick(category)}
    >
      <Card
        style={{
          width: 190,
          height: 170,
          marginRight: 5,
          marginLeft: 5,
          marginBottom: 10,
        }}
      >
        {renderCardHeader()}
        {renderCardBody()}
      </Card>
    </TouchableOpacity>
  );
};

export default CategoryCard;
