import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography } from "@material-ui/core";
import technical from "../images/techSkills.jpg";
import learningBanner from "../images/Learning-banner.jpg";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import backEnd from "../images/backEnd.jpg";
import agileWorking from "../images/agileWork.jpg";
import testing from "../images/testing.jpg";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const useStyles = makeStyles((theme) => ({
  toolBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
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
  cardStyle: {
    height: "100%",
    "&:hover": {
      cursor: "pointer",
      boxShadow: `0 0.4rem 1.4rem 0 ${theme.palette.primary.main}`,
      transform: "translateY(-0.1rem)",
      transition: "transform 150ms",
    },
  },
  media: {
    height: "56%",
  },
  cardAction: {
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    flexBasis: "fill",
    justifyContent: "space-between",
  },
  linkLook: {
    textDecoration: "none",
    color: "inherit",
  },
}));

export default function Welcome(props) {
  const classes = useStyles();

  //  needed to make the page move with the drawer might be worth turning off for mobile

  return (
    <div>
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
      <Box justifyContent="center" width="75%" mx="auto" my={4}>
        <Box display={{ xs: "none", md: "block" }}>
          <Typography variant="body1" align="center" gutterBottom="true" mt={2}>
            This is basically a scrapbook of techniques and technologies that we
            have been attempting to learn over the past couple of months. It's
            by no means exhaustive and it might not be correct in places so use
            it as a loose guide rather than a set of instructions. The code
            itself is probably more useful than what its actually displaying so
            apologies if its hideous looking!
          </Typography>
          <Typography variant="h2" align="center" gutterBottom="true" mt={2}>
            Topics
          </Typography>
        </Box>

        {/* topic cards */}

        <Grid container xs={12} spacing={2}>
          <Grid item lg={3} md={4} xs={12}>
            <NavHashLink to="/Front-end#top" className={classes.linkLook}>
              <Card className={classes.cardStyle}>
                <CardActionArea className={classes.cardAction}>
                  <CardMedia
                    component="img"
                    className={classes.media}
                    image={`${technical}`}
                    title="computer work"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Front-end development
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      The part of the application that the user interacts with.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </NavHashLink>
          </Grid>

          <Grid item lg={3} md={4} xs={12} direction="column">
            <NavHashLink to="Back-end#top" className={classes.linkLook}>
              <Card className={classes.cardStyle}>
                <CardActionArea className={classes.cardAction}>
                  <CardMedia
                    component="img"
                    className={classes.media}
                    image={`${backEnd}`}
                    title="coding"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Back-end Development
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Databases?... Servers?... other stuff I've not looked at
                      yet.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </NavHashLink>
          </Grid>

          <Grid item lg={3} md={4} xs={12}>
            <NavHashLink to="/Testing#top" className={classes.linkLook}>
              <Card className={classes.cardStyle}>
                <CardActionArea className={classes.cardAction}>
                  <CardMedia
                    component="img"
                    className={classes.media}
                    image={`${testing}`}
                    title="coding"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Testing
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      You've gotta check and double check that it all works. All
                      of it!
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </NavHashLink>
          </Grid>

          <Grid item lg={3} md={4} xs={12}>
            <NavHashLink to="/Working#top" className={classes.linkLook}>
              <Card className={classes.cardStyle}>
                <CardActionArea className={classes.cardAction}>
                  <CardMedia
                    component="img"
                    className={classes.media}
                    image={`${agileWorking}`}
                    title="coding"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Ways of Working
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Techniques and technology that help everyone work
                      effectively.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </NavHashLink>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
