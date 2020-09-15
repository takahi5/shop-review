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
  imageUrl?: string;
  user: UserRef;
  shop: ShopRef;
  updatedAt: firebase.firestore.Timestamp;
  createdAt: firebase.firestore.Timestamp;
};
