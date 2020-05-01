import React, {useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
/* firebase */
import firebase from "firebase";
import "firebase/auth";
/* navigator */
import HomeStackNavigator from "./HomeStackNavigator";
import AuthStackNavigator from "./AuthStackNavigator";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isSignin, setIsSignin] = useState<boolean>(false);

  firebase.auth().onAuthStateChanged((user) => {
    if (!!user) {
      //setIsSignin(true);
    }
  });

  return (
    <NavigationContainer>
      {isSignin ? (
        <HomeStackNavigator />
      ) : (
        <AuthStackNavigator />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
