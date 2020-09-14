import React from "react";
import { NavigationContainer } from "@react-navigation/native";
/* screens */
import { HomeScreen } from "../screens/HomeScreen";

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
};
