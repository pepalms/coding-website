/*
express framework
C#
GraphQL
node.js - its a runtime environment for executings JS its not a browser its not a framwork its not a language
node package manager
middleware - anything that run between the time that the server gets a request and sends out a response
API - rest, axios, 

*/

import { Box, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import backEndBanner from "../../images/backEnd-banner.jpg";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  contentShift: {
    marginLeft: 168,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  conditionalMargin: {
    marginLeft: theme.spacing(9) + 1,
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0",
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  header: {
    fontWeight: 500,
    backgroundImage: `url(${backEndBanner})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "20vh",
    display: "flex",
    justifyContent: "flex-start",
    color: theme.palette.primary.contrastText,
  },
  headerText: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    boxShadow: "0px 0px 10px 10px rgba(0, 0, 0, 0.5)",
  },
  outerContainer: {
    backgroundColor: theme.palette.grey[200],
  },
  innerContainer: {
    backgroundColor: "white",
    maxWidth: "1100px",
    margin: " auto",
    paddingTop: "10px",
  },
  hideWhenSmall: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

export default function BackEnd(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.conditionalMargin}>
      <div className={classes.toolbar} />
      <Box
        className={clsx(classes.header, {
          [classes.contentShift]: props.isDrawerOpen,
        })}
      >
        <Box pt="2vh" pl="5vw" className={classes.headerText}>
          <Typography variant="h2" fontFamily="Monospace">
            Back-end Development
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom="true"
            className={classes.hideWhenSmall}
          >
            The bit that makes everything work (but we don't see).
          </Typography>
        </Box>
      </Box>
      <Box className={classes.outerContainer}>
        <Box className={classes.innerContainer}>
          {/* <Csharp />
          <DotNet />
          <API /> */}
        </Box>
      </Box>
    </div>
  );
}

console.log(process.env.PORT);
