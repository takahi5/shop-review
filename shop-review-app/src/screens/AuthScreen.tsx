import React, { useEffect, useContext } from "react";
import { StyleSheet, SafeAreaView, ActivityIndicator } from "react-native";
import { signin } from "../lib/firebase";

export const AuthScreen: React.FC = () => {
  useEffect(() => {
    const fetchUser = async () => {
      const user = await signin();
      console.log(user);
    };
    fetchUser();
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
