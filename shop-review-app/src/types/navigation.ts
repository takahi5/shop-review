import { Shop } from "./shop";

export type RootStackParamList = {
  Main: undefined;
  Home: undefined;
  Shop: { shop: Shop };
  User: undefined;
  CreateReview: { shop: Shop };
};
