import firebase from "firebase";
import { Shop } from "../types/shop";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const getShops = async () => {
  const snapshot = await firebase.firestore().collection("shops").get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Shop));
};

export default firebase;
