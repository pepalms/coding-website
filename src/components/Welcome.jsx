import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Grid, Paper, Typography } from "@material-ui/core";

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
  welcomeContainer: {
    paddingTop: "2rem",
  },
  hide: {
    display: "none",
  },
}));

export default function Welcome(props) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.content, {
        [classes.contentShift]: props.isDrawerOpen,
      })}
    >
      <div className={classes.toolBar} />
      <Grid
        container
        justify="center"
        xs={12}
        className={classes.welcomeContainer}
      >
        <Grid item md={5} align="center">
          <Paper>
            <Typography variant="h1"> Learning is good</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
