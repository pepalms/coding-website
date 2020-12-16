import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BasicTable from "./components/Table";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Appbar from "./components/Appbar";
import NavDrawer from "./components/Drawer";
import Welcome from "./components/Welcome";

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
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <Appbar
        isDrawerOpen={open}
        openDrawer={handleDrawerOpen}
        closeDrawer={handleDrawerClose}
      />
      <NavDrawer
        isDrawerOpen={open}
        openDrawer={handleDrawerOpen}
        closeDrawer={handleDrawerClose}
      />
      <Switch>
        <Route exact path="/">
          <Welcome isDrawerOpen={open} />
        </Route>
        <Route path="/tables">
          <BasicTable isDrawerOpen={open} />
        </Route>
      </Switch>
    </Router>
  );
}
