import React, { useEffect } from "react";
import {
  Box,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import firebase from "../../firebase";
/* components */
import Button from "@material-ui/core/Button";
import { GenericTemplate } from "../templates/GenericTemplate";
/* types */

export const MyPage: React.FC = () => {
  return (
    <GenericTemplate title="マイページ">
      <p>マイページ</p>
      <Button color="primary" variant="contained">
        ボタン
      </Button>
    </GenericTemplate>
  );
};
