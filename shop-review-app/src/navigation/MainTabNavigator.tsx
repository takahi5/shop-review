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
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === "Home") {
        iconName = "home";
      } else if (route.name === "User") {
        iconName = "user";
      }

      return <Feather name={iconName} size={size} color={color} />;
    },
  });

  const tabBarOptions = {
    activeTintColor: "#900",
    inactiveTintColor: "#999",
  };

  return (
    <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
};
