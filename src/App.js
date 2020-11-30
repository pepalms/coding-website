import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Table from "./Table";
import Box from "@material-ui/core/Box";
import MenuIcon from "@material-ui/icons/Menu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <Container maxWidth="sm">
        <div className={classes.root}>
          <AppBar color="secondary" position="fixed">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon color="inherit" />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                First attempt using Material-UI
              </Typography>
              <Button variant="contained" color="secondary">
                Login
              </Button>
            </Toolbar>
          </AppBar>
        </div>
        <Box mt={15}>
          <Table />
        </Box>
      </Container>
    </Router>
  );
}
