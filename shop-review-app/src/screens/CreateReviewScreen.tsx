import React, { useEffect, useState, useContext, useCallback } from "react";
import { StyleSheet, SafeAreaView, View, Image } from "react-native";
import firebase from "firebase";
import { addReview } from "../lib/firebase";
import { pickImage } from "../lib/image-picker";
import { UserContext } from "../contexts/userContext";
/* components */
import { IconButton } from "../components/IconButton";
import { TextArea } from "../components/TextArea";
import { StarInput } from "../components/StarInput";
import { Button } from "../components/Button";
/* types */
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import { RouteProp } from "@react-navigation/native";
import { Review } from "../types/review";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "CreateReview">;
  route: RouteProp<RootStackParamList, "CreateReview">;
};

export const CreateReviewScreen: React.FC<Props> = ({
  navigation,
  route,
}: Props) => {
  const { shop } = route.params;
  const [text, setText] = useState<string>("");
  const [score, setScore] = useState<number>(3);
  const [imageUri, setImageUri] = useState<string>("");
  const { user } = useContext(UserContext);

  useEffect(() => {
    navigation.setOptions({
      title: shop.name,
      headerLeft: () => (
        <IconButton name="x" onPress={() => navigation.goBack()} />
      ),
    });
  }, [shop]);

  const onSubmit = async () => {
    const review = {
      user: {
        name: user.name,
        id: user.id,
      },
      shop: {
        name: shop.name,
        id: shop.id,
      },
      text,
      score,
      updatedAt: firebase.firestore.Timestamp.now(),
      createdAt: firebase.firestore.Timestamp.now(),
    } as Review;
    await addReview(shop.id, review);
  };

  const onPickImage = async () => {
    const uri = await pickImage();
    setImageUri(uri);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StarInput score={score} onChangeScore={(value) => setScore(value)} />
      <TextArea
        value={text}
        onChangeText={(value) => setText(value)}
        label="レビュー"
        placeholder="レビューを書いて下さい"
      />
      <View style={styles.photoContainer}>
        <IconButton name="camera" onPress={onPickImage} color="#ccc" />
        {!!imageUri && (
          <Image source={{ uri: imageUri }} style={styles.image} />
        )}
      </View>
      <Button text="レビューを投稿する" onPress={onSubmit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  photoContainer: {
    margin: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 8,
  },
});
