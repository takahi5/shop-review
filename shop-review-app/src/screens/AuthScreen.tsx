import React, { useEffect, useContext } from "react";
import { StyleSheet, SafeAreaView, ActivityIndicator } from "react-native";

export const AuthScreen: React.FC = () => {
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
