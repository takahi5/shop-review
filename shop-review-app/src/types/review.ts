import firebase from "firebase";

type UserRef = {
  name: string;
};

type ShopRef = {
  name: string;
};

export type Review = {
  id?: string;
  text: string;
  score: number;
  user: UserRef;
  shop: ShopRef;
  updatedAt: firebase.firestore.Timestamp;
  createdAt: firebase.firestore.Timestamp;
};
