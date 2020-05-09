import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
/* components */
import { Form } from "../components/Form";
/* types */
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import { RouteProp } from "@react-navigation/native";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "User">;
  route: RouteProp<RootStackParamList, "User">;
};

export const UserScreen: React.FC<Props> = ({ navigation, route }: Props) => {
  const [name, setName] = useState<string>("");

  return (
    <SafeAreaView style={styles.container}>
      <Form value={name} onChangeText={(text) => setName(text)} label="名前" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
