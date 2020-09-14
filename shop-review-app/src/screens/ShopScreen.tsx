import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";

export const ShopScreen: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Shop Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
});
