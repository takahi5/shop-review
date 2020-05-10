import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, SafeAreaView, View, Image, Alert } from "react-native";
/* components */
import { IconButton } from "../components/IconButton";
import { TextArea } from "../components/TextArea";
import { StarInput } from "../components/StarInput";
import { Button } from "../components/Button";
import { Loading } from "../components/Loading";
import firebase from "firebase";
import { createReviewRef, uploadImage } from "../lib/firebase";
/*contexts*/
import { UserContext } from "../contexts/userContext";
import { ReviewsContext } from "../contexts/reviewsContext";
/* lib */
import { pickImage } from "../lib/image-picker";
/* util */
import { getExtention } from "../utils/file";
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
  const { reviews, setReviews } = useContext(ReviewsContext);

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
    if (!text || !imageUri) {
      Alert.alert("レビューまたは画像がありません");
      return;
    }

    setLoading(true);

    // documentのidを先に取得
    const reviewDocRef = await createReviewRef(shop.id);
    // storageのpathを決定
    const ext = getExtention(imageUri);
    const storagePath = `reviews/${reviewDocRef.id}.${ext}`;
    // 画像をstorageにアップロード
    const downloadUrl = await uploadImage(imageUri, storagePath);
    // firestoreに保存する
    const review = {
      user: {
        id: user.id,
        name: user.name,
      },
      shop: {
        id: shop.id,
        name: shop.name,
      },
      text,
      score,
      imageUrl: downloadUrl,
      updatedAt: firebase.firestore.Timestamp.now(),
      createdAt: firebase.firestore.Timestamp.now(),
    } as Review;
    await reviewDocRef.set(review);

    // レビュー一覧に即時反映する
    setReviews([review, ...reviews]);

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
        {!!imageUri && (
          <Image source={{ uri: imageUri }} style={styles.image} />
        )}
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
