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
import { NavHashLink } from "react-router-hash-link";
import {
  FaBookOpen,
  FaCss3Alt,
  FaFlask,
  FaGithub,
  FaHome,
  FaHtml5,
  FaJira,
  FaReact,
  FaRunning,
} from "react-icons/fa";
import { IoServerOutline } from "react-icons/io5";
import { DiJavascript1 } from "react-icons/di";
import { SiCsharp, SiDotNet } from "react-icons/si";
import { NavLink, useLocation } from "react-router-dom";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

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
    width: theme.spacing(0) + 0,
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
    color: theme.palette.primary.light,
  },
  iconActive: {
    "& $iconColor": {
      fill: theme.palette.secondary.main,
      color: theme.palette.secondary.main,
    },
  },
  primaryIconColor: {
    fill: theme.palette.primary.main,
    color: theme.palette.primary.main,
  },
  listItems: {
    "&:hover $iconColor": {
      fill: theme.palette.secondary.main,
      color: theme.palette.secondary.main,
    },
  },
  primaryListItems: {
    "&:hover $primaryIconColor": {
      fill: theme.palette.secondary.main,
      color: theme.palette.secondary.main,
    },
  },
  accordianTop: {
    boxShadow: "none",
    padding: "0 16px 0 0",
    width: (props) => (props.isDrawerOpen ? "100%" : "74px"),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  accordianSummary: {
    boxShadow: "none",
    paddingLeft: "24px",
    justifyContent: "flex-start",
  },

  accordianDetails: {
    width: "240px",
    padding: 0,
  },
}));

const topicArray = [
  { title: "Welcome", Icon: FaHome, link: "/coding-website" },
  { title: "HTML", Icon: FaHtml5, link: "/Front-end#HTML" },
  { title: "CSS", Icon: FaCss3Alt, link: "/Front-end#CSS" },
  { title: "JavaScript", Icon: DiJavascript1, link: "/Front-end#JavaScript" },
  { title: "React", Icon: FaReact, link: "/Front-end#React" },
  { title: "C#", Icon: SiCsharp, link: "/Back-end#C-sharp" },
  { title: ".NET", Icon: SiDotNet, link: "/Back-end#.NET" },
  { title: "Testing", Icon: FaFlask, link: "/Testing" },
  { title: "Agile Working", Icon: FaRunning, link: "/Agile" },
  { title: "GitHub", Icon: FaGithub, link: "/GitHub" },
  { title: "Jira", Icon: FaJira, link: "/Jira" },
  { title: "Learning resources", Icon: FaBookOpen, link: "/Learning" },
];

export default function NavDrawer(props) {
  const classes = useStyles(props);
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
        {/* home page button  */}

        <NavHashLink
          to="/coding-website"
          smooth
          className={classes.linkLook}
          activeClassName={classes.iconActive}
        >
          <ListItem
            button
            disabled={pathName.pathname === "/coding-website" ? true : false}
            className={classes.listItems}
          >
            <ListItemIcon>
              <FaHome size={24} className={classes.iconColor} />
            </ListItemIcon>
            <ListItemText primary={"Welcome"} />
          </ListItem>
        </NavHashLink>
        <Divider />

        {/* front-end development section */}

        <ListItem className={classes.primaryListItems} disableGutters="true">
          <Accordion className={classes.accordianTop}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              className={classes.accordianSummary}
            >
              <ListItemIcon>
                <FaReact size={24} className={classes.primaryIconColor} />
              </ListItemIcon>
              <Typography className={classes.heading}>Front-end</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordianDetails}>
              <List className={classes.accordianDetails}>
                {topicArray.slice(1, 4).map((item) => (
                  <NavHashLink
                    to={item.link}
                    className={classes.linkLook}
                    activeClassName={classes.iconActive}
                  >
                    <ListItem
                      button
                      key={item}
                      disabled={pathName.pathname === item.link ? true : false}
                      className={clsx(classes.listItems)}
                    >
                      <ListItemIcon>
                        <item.Icon
                          size={20}
                          className={clsx(classes.iconColor)}
                        />
                      </ListItemIcon>
                      <ListItemText primary={item.title} />
                    </ListItem>
                  </NavHashLink>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </ListItem>

        <Divider />

        {/* back end section */}

        <ListItem className={classes.primaryListItems} disableGutters="true">
          <Accordion className={classes.accordianTop}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              className={classes.accordianSummary}
            >
              <ListItemIcon>
                <IoServerOutline
                  size={20}
                  className={classes.primaryIconColor}
                />
              </ListItemIcon>
              <Typography className={classes.heading}>Back-end</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordianDetails}>
              <List className={classes.accordianDetails}>
                {topicArray.slice(5, 7).map((item, index) => (
                  <NavHashLink
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
                        <item.Icon
                          size={24}
                          className={clsx(classes.iconColor)}
                        />
                      </ListItemIcon>
                      <ListItemText primary={item.title} />
                    </ListItem>
                  </NavHashLink>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </ListItem>

        <Divider />

        {/* testing section */}

        <ListItem className={classes.primaryListItems} disableGutters="true">
          <Accordion className={classes.accordianTop}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              className={classes.accordianSummary}
            >
              <ListItemIcon>
                <FaFlask size={20} className={classes.primaryIconColor} />
              </ListItemIcon>
              <Typography className={classes.heading}>Testing</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordianDetails}>
              <List className={classes.accordianDetails}>
                {topicArray.slice(7, 8).map((item, index) => (
                  <NavHashLink
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
                        <item.Icon
                          size={24}
                          className={clsx(classes.iconColor)}
                        />
                      </ListItemIcon>
                      <ListItemText primary={item.title} />
                    </ListItem>
                  </NavHashLink>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </ListItem>

        <Divider />

        {/* working section */}

        <ListItem className={classes.primaryListItems} disableGutters="true">
          <Accordion className={classes.accordianTop}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              className={classes.accordianSummary}
            >
              <ListItemIcon>
                <FaHome size={20} className={classes.primaryIconColor} />
              </ListItemIcon>
              <Typography className={classes.heading}>Working</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordianDetails}>
              <List className={classes.accordianDetails}>
                {topicArray.slice(8, 12).map((item) => (
                  <NavHashLink
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
                        <item.Icon
                          size={20}
                          className={clsx(classes.iconColor)}
                        />
                      </ListItemIcon>
                      <ListItemText primary={item.title} />
                    </ListItem>
                  </NavHashLink>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </ListItem>
      </List>
    </Drawer>
  );
}
