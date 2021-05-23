import React from "react";
import { TouchableOpacity } from "react-native";
import { Category } from "../screens/ExerciseList";
import Card from "./Card";
import WorkoutTag, { tagColors } from "./WorkoutTag";
import Text from "./Text";

interface CategoryCardProps {
  category: Category;
  onCategoryClick(category: Category): void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  onCategoryClick,
}) => {
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
          marginTop: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 25,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          {category.name}
        </Text>
        <WorkoutTag
          bodyPart={category.name}
          color={tagColors[category.categoryIndex % tagColors.length]}
        />
        <Text style={{ color: "white" }}>
          Lorem ipsum dolor, sit amet consectetur!
        </Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CategoryCard;
