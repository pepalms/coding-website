import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { Box } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    marginLeft: 4,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },

  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  linkLook: {
    textDecoration: "none",
    color: "inherit",
  },
  iconHolder: {
    display: "flex",
    justifyContent: "flex-end",
    flexGrow: 1,
    paddingRight: "1vw",
  },
}));

export default function MiniDrawer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.isDrawerOpen,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.openDrawer}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: props.isDrawerOpen,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/coding-website" className={classes.linkLook}>
            <Typography variant="h6" noWrap className={classes.title}>
              2020 SE Learning
            </Typography>
          </Link>
          <Box className={classes.iconHolder}>
            <a
              target="_blank"
              href="https://github.com/pepalms/coding-website"
              rel="noopener noreferrer"
            >
              <IconButton>
                <FaGithub color="white" size={32} />
              </IconButton>
            </a>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
