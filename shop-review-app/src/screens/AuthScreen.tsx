import React, { useEffect } from "react";
import { StyleSheet, SafeAreaView, ActivityIndicator } from "react-native";
import { signin } from "../lib/firebase";

export const AuthScreen = () => {
  useEffect(() => {
    signin();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
