import firebase from "firebase";

export type User = {
  id?: string;
  name: string;
  updatedAt: firebase.firestore.Timestamp;
  createdAt: firebase.firestore.Timestamp;
};

export const initialUser: User = {
  name: "",
  updatedAt: firebase.firestore.Timestamp.now(),
  createdAt: firebase.firestore.Timestamp.now(),
};
