import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import Constants from "expo-constants";
/* types */
import {Shop} from "../types/shop";
import {initialUser} from "../types/user";

if (!firebase.apps.length) {
  firebase.initializeApp(Constants.manifest.extra.firebase);
}

export const getShops = async () => {
  try {
    const snapshot = await firebase
      .firestore()
      .collection("shops")
      .orderBy("score", "desc")
      .get();
    const shops = snapshot.docs.map(
      (doc) => doc.data() as Shop,
    );
    return shops;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const signin = async () => {
  const userCredential = await firebase
    .auth()
    .signInAnonymously();
  const {uid} = userCredential.user;
  console.log("uid", uid);
  const userDoc = await firebase
    .firestore()
    .collection("users")
    .doc(uid)
    .get();
  if (!userDoc.exists) {
    await firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .set(initialUser);
  }
};
