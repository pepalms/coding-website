import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Grid, Paper, Typography } from "@material-ui/core";
import technical from "../images/techSkills.jpg";
import softSkills from "../images/agileWork.jpg";

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
    margin: "auto",
  },
  hideWhenSmall: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  hideWhenReallySmall: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  subBanner: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "40vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    paddingTop: "2rem",
    "&:hover": {
      cursor: "pointer",
      boxShadow: `0 0.4rem 1.4rem 0 ${theme.palette.primary.main}`,
      transform: "translateY(-0.1rem)",
      transition: "transform 150ms",
    },
  },
  skillsInformation: {
    backgroundColor: "rgba(0,0,0, 0.5)",
    width: "100%",
    padding: "5%",
  },
  technical: { backgroundImage: `url(${technical})` },
  soft: { backgroundImage: `url(${softSkills})` },
}));

export default function Welcome(props) {
  const classes = useStyles();
  //  needed to make the page move with the drawer might be worth turning off for mobile

  return (
    <div
      className={clsx(classes.content, {
        [classes.contentShift]: props.isDrawerOpen,
      })}
    >
      {/* shifts the page down under the toolbar */}

      <div className={classes.toolBar} />

      <Grid
        container
        justify="center"
        xs={11}
        className={classes.welcomeContainer}
        spacing={6}
      >
        {/* main banner */}

        <Grid item md={7} align="center" className={classes.hideWhenSmall}>
          <Paper>
            <Typography variant="h1">LEARNING IS FUN</Typography>
            <Typography variant="body1" gutterBottom="true">
              “Intellectual growth should commence at birth and cease only at
              death.” - <i> Einstein </i>
            </Typography>
            <br />
            <Typography variant="body1">
              This is a scrapbook of techniques, it's by no means exhaustive and
              might actually be wrong in some places buts it's the engineering
              world as we understand it today (2 months into the scheme).
            </Typography>
          </Paper>
        </Grid>

        {/* sub banners */}

        <Grid item md={6} xs={12} justify="center" align="center">
          <Paper className={clsx(classes.technical, classes.subBanner)}>
            <Typography variant="h4"> Technical Skills</Typography>
            <Typography className={classes.skillsInformation}>
              These are the skills that are needed to help in the development of
              products
            </Typography>
          </Paper>
        </Grid>

        <Grid item md={6} xs={12} align="center">
          <Paper className={clsx(classes.soft, classes.subBanner)}>
            <Typography variant="h4">Transferable Skills</Typography>
            <Typography className={`${classes.skillsInformation}`}>
              These are the skills that are needed in order to work efficiently
              within the team
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
