import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Appbar from "./components/Appbar";
import NavDrawer from "./components/Drawer";
import Welcome from "./components/Welcome";
import FrontEnd from "./components/FrontEnd/FrontEnd";
import BackEnd from "./components/BackEnd/BackEnd";
import theme from "./components/Theme";
import { ThemeProvider } from "@material-ui/core/styles";

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
      <ThemeProvider theme={theme}>
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
          <Route exact path="/coding-website">
            <Welcome isDrawerOpen={open} />
          </Route>
          <Route path="/Front-end">
            <FrontEnd isDrawerOpen={open} />
          </Route>
          <Route path="/Back-end">
            <BackEnd isDrawerOpen={open} />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
