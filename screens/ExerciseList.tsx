import axios from "axios";
import React, { useEffect, useState } from "react";
import { ImageBackground, View } from "react-native";
import { Button, ListItem } from "react-native-elements";
import { styles } from "../styles";
import Text from "../components/Text";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
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
    <View style={{ width: "100%", height: "100%" }}>
      <View style={styles.bar}>
        <Text style={[styles.welcome, { color: "black" }]}>Category</Text>
        <Button
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          title="Back"
          onPress={() => navigation.navigate("New")}
        />
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        {categories
          .filter((c) => c.id !== CALVES)
          .map((l, i) => (
            <ListItem key={i} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>
                  Lorem ipsum dolor, sit amet consectetur!
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
      </View>
    </View>
  );
};

export default ExerciseList;
