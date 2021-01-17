import React from "react";
import firebase from "../../firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useHistory } from "react-router-dom";
import { GenericTemplate } from "../templates/GenericTemplate";

export const SignIn: React.FC = () => {
  const history = useHistory();

  const uiConfig: firebaseui.auth.Config = {
    signInFlow: "redirect",
    signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        customParameters: { lang: "ja" },
      },
    ],
    callbacks: {
      signInSuccessWithAuthResult: (authResult, redirectUrl) => {
        console.log(authResult);
        history.push("/");
        return false;
      },
    },
  };
  return (
    <GenericTemplate title="サインイン" beforeSingIn>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </GenericTemplate>
  );
};
