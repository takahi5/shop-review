import React, { useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  Text,
} from "react-native";
import { signin } from "../lib/firebase";

export const AuthScreen: React.FC = () => {
  useEffect(() => {
    const fetchUser = async () => {
      await signin();
    };
    fetchUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" />
      <Text style={styles.text}>ログイン中...</Text>
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
  text: {
    marginTop: 16,
    fontSize: 12,
    color: "#888",
  },
});
