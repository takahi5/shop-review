import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
/* navigators */
import { HomeStackNavigator } from "./HomeStackNavigator";
/* screens */
import { UserScreen } from "../screens/UserScreen";
/* types */
import { RootStackParamList } from "../types/navigation";

const Tab = createBottomTabNavigator<RootStackParamList>();

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
};
