import React from "react";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Work from "@material-ui/icons/Work";
import Computer from "@material-ui/icons/Computer";
import { Typography } from "@material-ui/core";
import { GitHub } from "@material-ui/icons";
import {
  FaBookOpen,
  FaCode,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJira,
  FaPaintBrush,
  FaReact,
  FaRunning,
} from "react-icons/fa";
import { GrTest } from "react-icons/gr";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
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
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drawerHeaders: {},
}));

const topicArray = [
  { title: "HTML & CSS", Icon: FaHtml5 },
  { title: "Javascript", Icon: FaJava },
  { title: "React", Icon: FaReact },
  { title: "Material UI", Icon: FaPaintBrush },
  { title: "Cypress", Icon: FaCode },

  { title: "Agile Working", Icon: FaRunning },
  { title: "GitHub", Icon: FaGithub },
  { title: "Jira", Icon: FaJira },
  { title: "Learning resources", Icon: FaBookOpen },
];

export default function NavDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: props.isDrawerOpen,
        [classes.drawerClose]: !props.isDrawerOpen,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: props.isDrawerOpen,
          [classes.drawerClose]: !props.isDrawerOpen,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={props.closeDrawer}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {topicArray.slice(0, 4).map((item, index) => (
          <ListItem button key={item}>
            <ListItemIcon>
              <item.Icon size={24} />
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {topicArray.slice(4, 8).map((item, index) => (
          <ListItem button key={item}>
            <ListItemIcon>
              <item.Icon size={24} />
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
