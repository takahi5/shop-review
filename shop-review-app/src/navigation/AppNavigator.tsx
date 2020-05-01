import React from "react";
import { NavigationContainer } from "@react-navigation/native";
/* navigators */
import { MainTabNavigator } from "./MainTabNavigator";

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
  );
};
