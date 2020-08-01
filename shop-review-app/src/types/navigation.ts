import { Shop } from "./shop";

export type RootStackParamList = {
  Main: undefined;
  Home: undefined;
  Shop: { shop: Shop };
  User: undefined;
  Search: undefined;
  CreateReview: { shop: Shop };
};
