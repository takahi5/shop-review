import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
/* components */
import { Stars } from "./Stars";
/* types */
import { Shop } from "../types/shop";

type Props = {
  shop: Shop;
};

export const ShopDetail: React.FC<Props> = ({ shop }: Props) => {
  const { name, place, imageUrl, score } = shop;

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image style={styles.image} source={{ uri: imageUrl }}></Image>
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={styles.gradient}
        />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.place}>{place}</Text>
        </View>
      </View>
      <View style={styles.starContainer}>
        <Stars score={score} starSize={28} textSize={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  nameContainer: {
    position: "absolute",
    left: 16,
    bottom: 16,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  starContainer: {
    margin: 16,
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  name: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  place: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 16,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 250,
  },
});
