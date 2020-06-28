import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, SafeAreaView, TextInput, FlatList } from "react-native";
import { searchReviews } from "../lib/algolia";
/* components */
import { SearchReviewItem } from "../components/SearchReviewItem";
/* types */
import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation";
import { Review } from "../types/review";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Search">;
  route: RouteProp<RootStackParamList, "Search">;
};

export const SearchScreen: React.FC<Props> = ({ navigation, route }: Props) => {
  const [keyword, setKeyword] = useState<string>();
  const [reviews, setReviews] = useState<Review[]>([]);

  const onChangeText = async (text: string) => {
    setKeyword(text);
    if (!text) {
      setReviews([]);
    } else {
      const result = await searchReviews(text);
      if (result.hits.length > 0) {
        const reviews = result.hits.map((hit) => {
          return (hit as unknown) as Review;
        });
        setReviews(reviews);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={keyword}
        placeholder="検索キーワード"
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => <SearchReviewItem review={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  input: {
    height: 50,
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 18,
    margin: 16,
  },
});
