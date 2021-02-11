import firebase from "firebase";
import { Review } from "../types/review";
import { Shop } from "../types/shop";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const getShops = async () => {
  const snapshot = await firebase
    .firestore()
    .collection("shops")
    .orderBy("score")
    .get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Shop));
};

export const getReviews = async (shopId: string) => {
  const snapshot = await firebase
    .firestore()
    .collection("shops")
    .doc(shopId)
    .collection("reviews")
    .orderBy("createdAt", "desc")
    .get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Review));
};

export default firebase;
