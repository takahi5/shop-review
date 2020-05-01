import React from "react";
import { NavigationContainer } from "@react-navigation/native";
/* navigators */
import { MainTabNavigator } from "./MainTabNavigator";
/* screents */
import { AuthScreen } from "../screens/AuthScreen";

export const AppNavigator = () => {
  // login user
  // TODO: ログインしたらuserをセットする
  const user = { name: "hoge" };

  return (
    <NavigationContainer>
      {!user ? <AuthScreen /> : <MainTabNavigator />}
    </NavigationContainer>
  );
};
