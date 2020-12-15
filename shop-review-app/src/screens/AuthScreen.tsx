import React, { useEffect, useContext } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  Text,
} from "react-native";
import { signin, updateUser } from "../lib/firebase";
import { registerForPushNotificationsAsync } from "../lib/notification";
import { UserContext } from "../contexts/userContext";

export const AuthScreen: React.FC = () => {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await signin();
      // push通知のtokenを取得
      const pushToken = await registerForPushNotificationsAsync();
      if (pushToken && user.pushToken !== pushToken) {
        await updateUser(user.id, { pushToken });
        user.pushToken = pushToken;
      }

      setUser(user);
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
