import { Box, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import HTML from "./HTML";
import FrontEndBanner from "../../images/frontEnd-banner.jpg";
import CSS from "./CSS";
import JavaScript from "./JavaScript";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  contentShift: {
    //width: `calc(100% - 168px)`,
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
    backgroundImage: `url(${FrontEndBanner})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "20vh",
    display: "flex",
    justifyContent: "flex-start",
    color: theme.palette.primary.contrastText,
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

export default function FrontEnd(props) {
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
        <Box pt="2vh" pl="5vw">
          <Typography variant="h2" fontFamily="Monospace">
            Front-end Development
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom="true"
            className={classes.hideWhenSmall}
          >
            The bit that the user interacts with.
          </Typography>
        </Box>
      </Box>
      <Box className={classes.outerContainer}>
        <Box className={classes.innerContainer}>
          <HTML />
          <CSS />
          <JavaScript />
        </Box>
      </Box>
    </div>
  );
}
