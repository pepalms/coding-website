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
import {
  FaBookOpen,
  FaFlask,
  FaGithub,
  FaHome,
  FaHtml5,
  FaJava,
  FaJira,
  FaPencilAlt,
  FaReact,
  FaRunning,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { NavLink, useLocation } from "react-router-dom";

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
  linkLook: {
    textDecoration: "none",
    color: "inherit",
  },
  iconColor: {
    color: theme.palette.primary.main,
  },
  iconActive: {
    "& $iconColor": { fill: theme.palette.secondary.main },
  },
  listItems: {
    "&:hover $iconColor": {
      fill: theme.palette.secondary.main,
    },
  },
}));

const topicArray = [
  { title: "Welcome", Icon: FaHome, link: "/coding-website" },
  { title: "HTML & CSS", Icon: FaHtml5, link: "/HTML" },
  { title: "JavaScript", Icon: DiJavascript1, link: "/JavaScript" },
  { title: "React", Icon: FaReact, link: "/React" },
  { title: "Testing", Icon: FaFlask, link: "/Cypress" },
  { title: "Agile Working", Icon: FaRunning, link: "/Agile" },
  { title: "GitHub", Icon: FaGithub, link: "/GitHub" },
  { title: "Jira", Icon: FaJira, link: "/Jira" },
  { title: "Learning resources", Icon: FaBookOpen, link: "/Learning" },
];

export default function NavDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const pathName = useLocation();

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
        {topicArray.slice(0, 5).map((item, index) => (
          <NavLink
            to={item.link}
            className={classes.linkLook}
            activeClassName={classes.iconActive}
          >
            <ListItem
              button
              key={item}
              disabled={pathName.pathname === item.link ? true : false}
              className={classes.listItems}
            >
              <ListItemIcon>
                <item.Icon size={24} className={clsx(classes.iconColor)} />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider />
      <List>
        {topicArray.slice(5, 10).map((item, index) => (
          <NavLink
            to={item.link}
            className={classes.linkLook}
            activeClassName={classes.iconActive}
          >
            <ListItem
              button
              key={item}
              disabled={pathName.pathname === item.link ? true : false}
              className={classes.listItems}
            >
              <ListItemIcon>
                <item.Icon size={24} className={clsx(classes.iconColor)} />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Drawer>
  );
}
