import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, SafeAreaView, TextInput } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation";
/* components */
/* types */
type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Search">;
  route: RouteProp<RootStackParamList, "Search">;
};

export const SearchScreen: React.FC<Props> = ({ navigation, route }: Props) => {
  const [keyword, setKeyword] = useState<string>();

  const onChangeText = (text: string) => {
    setKeyword(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={keyword}
        placeholder="検索キーワード"
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
