import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
/* screens */
import {HomeScreen} from "../screens/HomeScreen";
import {ShopScreen} from "../screens/ShopScreen";

const Stack = createStackNavigator();

export const HomeStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: "#000",
    }}>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen name="Shop" component={ShopScreen} />
  </Stack.Navigator>
);
