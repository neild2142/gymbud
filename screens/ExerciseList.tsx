import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Text from "../components/Text";
import axios from "axios";
import { Container, Content, List, ListItem } from "native-base";

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

const ExerciseList = () => {
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
    <Container>
      <Content>
        <List>
          {categories
            .filter((category) => category.id !== CALVES)
            .map((category) => (
              <Category name={category.name} key={category.id}>
                <Exercises />
              </Category>
            ))}
        </List>
      </Content>
    </Container>
  );
};

const Category: React.FC<{ name: string }> = ({ name, children }) => {
  return (
    <>
      <ListItem itemDivider>
        <Text>{name}</Text>
      </ListItem>
      {children}
    </>
  );
};

const Exercises: React.FC = () => {
  return (
    <ListItem>
      <Text>Some Exercise</Text>
    </ListItem>
  );
};

export default ExerciseList;
