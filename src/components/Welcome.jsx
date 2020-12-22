import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import technical from "../images/techSkills.jpg";
import softSkills from "../images/agileWork.jpg";
import learningBanner from "../images/Learning-banner.jpg";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

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
  header: {
    fontWeight: 500,
    backgroundImage: `url(${learningBanner})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "40vh",
    display: "flex",
    justifyContent: "flex-start",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  headerText: {
    position: "relative",
    left: "25%",
    top: "15%",
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
  const theme = useTheme();
  //  needed to make the page move with the drawer might be worth turning off for mobile

  return (
    <div
      className={clsx(classes.content, {
        [classes.contentShift]: props.isDrawerOpen,
      })}
    >
      {/* shifts the page down under the toolbar */}

      <div className={classes.toolBar} />

      {/* header banner */}

      <Box className={classes.header} display={{ xs: "none", md: "block" }}>
        <Box align="start" className={classes.headerText}>
          <Typography variant="h2" fontFamily="Monospace">
            Learning is Fun
          </Typography>
          <Typography variant="subtitle2" gutterBottom="true">
            “Intellectual growth should commence at birth and cease only at
            death.” - <i> Einstein </i>
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="h2"
        color="Primary"
        align="center"
        gutterBottom="true"
        mt={2}
      >
        Topics
      </Typography>

      {/* topic cards */}
      <Box display="flex" justifyContent="center">
        <Grid container xs={10} spacing={2} align="center" m>
          <Grid item lg={4} md={6} xs={12} justify="center" align="center">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image={`${technical}`}
                  title="computer work"
                  height="240px"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Front-end development
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This is the part of the application that the user interacts
                    with. Its primarily a skeleton of HTML elements fleshed out
                    with styles from CSS and interactivity from Javascript
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item lg={4} md={6} xs={12} justify="center" align="center">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image={`${technical}`}
                  title="coding"
                  height="240px"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Back-end Development
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This is the part of the application that the user interacts
                    with. Its primarily a skeleton of HTML elements fleshed out
                    with styles from CSS and interactivity from Javascript
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item md={6} xs={12} justify="center" align="center">
            <Paper className={clsx(classes.technical, classes.subBanner)}>
              <Typography variant="h4">Back-end development</Typography>
              <Typography className={classes.skillsInformation}>
                These are the skills that are needed to help in the development
                of products
              </Typography>
            </Paper>
          </Grid>

          <Grid item md={6} xs={12} align="center">
            <Paper className={clsx(classes.soft, classes.subBanner)}>
              <Typography variant="h4">Transferable Skills</Typography>
              <Typography className={`${classes.skillsInformation}`}>
                These are the skills that are needed in order to work
                efficiently within the team
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
