import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

type Props = {};
export const Row: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return <Box className={classes.root}>{children}</Box>;
};
