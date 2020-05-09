import React, { useState, useContext } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { updateUser } from "../lib/firebase";
import firebase from "firebase";
/* components */
import { Form } from "../components/Form";
import { Button } from "../components/Button";
/* contexts */
import { UserContext } from "../contexts/userContext";
/* types */
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import { RouteProp } from "@react-navigation/native";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "User">;
  route: RouteProp<RootStackParamList, "User">;
};

export const UserScreen: React.FC<Props> = ({ navigation, route }: Props) => {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState<string>(user.name);

  const onSubmit = async () => {
    const updatedAt = firebase.firestore.Timestamp.now();
    await updateUser(user.id, { name, updatedAt });
    setUser({ ...user, name, updatedAt });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Form value={name} onChangeText={(text) => setName(text)} label="名前" />
      <Button onPress={onSubmit} text="保存する" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
