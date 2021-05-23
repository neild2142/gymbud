import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-elements";
import CategoryCard from "../components/CategoryCard";
import ExerciseListBottomSheet from "../components/ExerciseListBottomSheet";
import Header from "../components/Header";
import Text from "../components/Text";
import ViewContainer from "../components/ViewContainer";
import { styles } from "../styles";
import { RootStack } from "./RootStack";

const CALVES = 14;

export interface Category {
  id: number;
  name: string;
  categoryIndex: number;
}

interface CategoryResponse {
  results: Category[];
  count: number;
}

async function getCategories() {
  const response = await axios.get<CategoryResponse>(
    "https://wger.de/api/v2/exercisecategory/"
  );
  return response.data.results;
}

type NewWorkoutStack = StackNavigationProp<RootStack, "ExerciseList">;

const ExerciseList = () => {
  const navigation = useNavigation<NewWorkoutStack>();
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);

  useEffect(() => {
    const getCategoryList = async () => {
      setCategories(await getCategories());
    };
    getCategoryList();
  }, []);

  if (!categories) {
    return null;
  }

  const onCategoryClick = (category: Category): void => {
    setBottomSheetVisible(!bottomSheetVisible);
    setCurrentCategory(category);
  };

  const hideBottomShelf = (): void => {
    setBottomSheetVisible(false);
  };

  return (
    <ViewContainer>
      <Header>
        <Text style={[styles.welcome, { color: "black" }]}>Category</Text>
        <Button
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          title="Back"
          onPress={() => navigation.navigate("New")}
        />
      </Header>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {categories
            .filter((c) => c.id !== CALVES)
            .map((c, index) => (
              <CategoryCard
                key={`${c.name}-${c.id}`}
                category={{ ...c, categoryIndex: index }}
                onCategoryClick={onCategoryClick}
              />
            ))}
        </View>
        {currentCategory && (
          <ExerciseListBottomSheet
            hideBottomShelf={hideBottomShelf}
            bottomSheetVisible={bottomSheetVisible}
          />
        )}
      </ScrollView>
    </ViewContainer>
  );
};

export default ExerciseList;
