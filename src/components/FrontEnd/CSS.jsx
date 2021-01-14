import { Box, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import cssBanner from "../../images/css-banner.jpg";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  line: {
    height: "1px",
    margin: "25px auto",
    borderRadius: "1px",
    backgroundImage: `linear-gradient(to right, transparent, ${theme.palette.primary.main}, transparent)`,
  },
  header: {
    fontWeight: 500,
    height: "20vh",
    display: "flex",
    justifyContent: "flex-start",
    backgroundImage: `url(${cssBanner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPostion: "50% 90%",
    color: "white",
    margin: "0 auto",
  },
  headerText: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    boxShadow: "0px 0px 10px 10px rgba(0, 0, 0, 0.5)",
    padding: "1vh",
  },
  gridContainer: {
    marginTop: "5px",
    margin: "-2px",
  },
  hideWhenSmall: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  informationBox: {
    overflowY: "scroll",
    flexDirection: "column",
    //the max height needs to change based on the height of the other two components but I don't know how to get it to do that
    maxHeight: "465px",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.secondary.main,
      outline: "",
    },
  },
}));

export default function CSS() {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.line}></Box>
      <Box className={classes.header}>
        <Box mx="auto" my="auto" className={classes.headerText}>
          <Typography id="CSS" variant="h6">
            CSS
          </Typography>
          <Typography>
            It's very fancy, and it makes everything else fancy.
          </Typography>
        </Box>
      </Box>
      <Grid container xs={12} spacing={1} className={classes.gridContainer}>
        <Grid item container xs={12} md={8} spacing={1}>
          <Grid item xs={12}>
            <Paper elevation={3} style={{ backgroundColor: "#b2dfdb" }}>
              <Box p={1}>
                <Typography variant="h6">Summary</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ backgroundColor: "#b2dfdb" }}>
              <Box p={1}>
                <Typography variant="h6">Something Else</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ backgroundColor: "#b2dfdb" }}>
              <Box p={1}>
                <Typography variant="h6">Where to learn more</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ backgroundColor: "#b2dfdb" }}>
            <Box p={1} className={classes.informationBox}>
              <Typography variant="h6">Key Features</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
