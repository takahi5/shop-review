import React, { useCallback, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
/* navigators */
import { MainTabNavigator } from "./MainTabNavigator";
/* screents */
import { AuthScreen } from "../screens/AuthScreen";
/* contexts */
import { UserContext } from "../contexts/userContext";

export const AppNavigator = () => {
  const { user } = useContext(UserContext);

  return (
    <NavigationContainer>
      {!user ? <AuthScreen /> : <MainTabNavigator />}
    </NavigationContainer>
  );
};
