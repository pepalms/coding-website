import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 72,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 240,
  },
}));

export default function Welcome(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div
      className={clsx(classes.content, {
        [classes.contentShift]: props.isDrawerOpen,
      })}
    >
      <div className={classes.toolBar} />

      <Typography>Does this move</Typography>
    </div>
  );
}
