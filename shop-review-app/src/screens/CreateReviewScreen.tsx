import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, SafeAreaView, View, Image } from "react-native";
/* components */
import { IconButton } from "../components/IconButton";
import { TextArea } from "../components/TextArea";
import { StarInput } from "../components/StarInput";
import { Button } from "../components/Button";
import { Loading } from "../components/Loading";
import firebase from "firebase";
import { addReview } from "../lib/firebase";
/*contexts*/
import { UserContext } from "../contexts/userContext";
/* lib */
import { pickImage } from "../lib/image-picker";
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
  const [loading, setLoading] = useState<boolean>(false);
  const [imageUri, setImageUri] = useState<string>("");
  const { user } = useContext(UserContext);

  useEffect(() => {
    navigation.setOptions({
      title: shop.name,
      headerLeft: () => (
        <IconButton onPress={() => navigation.goBack()} name="x" />
      ),
    });
  }, [shop]);

  const onPickImage = async () => {
    const uri = await pickImage();
    setImageUri(uri);
  };

  const onSubmit = async () => {
    setLoading(true);
    // firestoreに保存する
    const review = {
      user: {
        name: user.name,
      },
      shop: {
        name: shop.name,
      },
      text,
      score,
      updatedAt: firebase.firestore.Timestamp.now(),
      createdAt: firebase.firestore.Timestamp.now(),
    } as Review;
    await addReview(shop.id, review);

    setLoading(false);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StarInput score={score} onChangeScore={(value) => setScore(value)} />
      <TextArea
        value={text}
        onChangeText={(value) => {
          setText(value);
        }}
        label="レビュー"
        placeholder="レビューを書いて下さい"
      />
      <View style={styles.photoContainer}>
        <IconButton onPress={onPickImage} name="camera" color="gray" />
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
      <Button text="レビューを投稿する" onPress={onSubmit} />
      <Loading visible={loading} />
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
