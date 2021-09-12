import React from "react";
import { ScrollView, View } from "react-native";
import { Category } from "../../services/useFetchExercises";
import CategoryCard from "./CategoryCard";

interface CategoryListProps {
  categories: Category[];
  onCategoryClick(category: Category): void;
  exercisesForCategory(id: number): number;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  onCategoryClick,
  exercisesForCategory,
}) => {
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {categories.map((category, index) => (
          <CategoryCard
            key={`${category.name}-${category.id}`}
            category={{ ...category, categoryIndex: index }}
            onCategoryClick={onCategoryClick}
            numberOfExercisesSelected={exercisesForCategory(category.id)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default CategoryList;
