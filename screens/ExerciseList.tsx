import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { Button, ListItem } from "react-native-elements";
import Card from "../components/Card";
import Header from "../components/Header";
import Text from "../components/Text";
import ViewContainer from "../components/ViewContainer";
import WorkoutTag, { tagColors } from "../components/WorkoutTag";
import { styles } from "../styles";
import { RootStack } from "./RootStack";

const CALVES = 14;

interface Category {
  id: number;
  name: string;
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

  useEffect(() => {
    const getCategoryList = async () => {
      setCategories(await getCategories());
    };
    getCategoryList();
  }, []);

  if (!categories) {
    return null;
  }

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
            .filter((category) => category.id !== CALVES)
            .map((category, i) => (
              <Card
                style={{
                  width: 190,
                  height: 170,
                  marginVertical: 5,
                  marginHorizontal: 10,
                  marginRight: 0,
                }}
                key={`${category.name}-${i}`}
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
                  color={tagColors[i % tagColors.length]}
                />
                <Text style={{ color: "white" }}>
                  Lorem ipsum dolor, sit amet consectetur!
                </Text>
              </Card>
            ))}
        </View>
      </ScrollView>
    </ViewContainer>
  );
};

export default ExerciseList;
