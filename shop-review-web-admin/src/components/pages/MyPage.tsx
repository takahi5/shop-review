import React from "react";
import firebase from "../../firebase";
/* components */
import Button from "@material-ui/core/Button";
import { GenericTemplate } from "../templates/GenericTemplate";
/* types */

export const MyPage: React.FC = () => {
  const onPressLogout = async () => {
    if (window.confirm("ログアウトしますか?")) {
      await firebase.auth().signOut();
    }
  };

  return (
    <GenericTemplate title="マイページ">
      <Button color="primary" variant="contained" onClick={onPressLogout}>
        ログアウト
      </Button>
    </GenericTemplate>
  );
};
