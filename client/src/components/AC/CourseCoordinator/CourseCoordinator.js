import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ViewHeadlineOutlinedIcon from "@material-ui/icons/ViewHeadlineOutlined";
import ScheduleOutlinedIcon from "@material-ui/icons/ScheduleOutlined";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import AllInboxOutlinedIcon from "@material-ui/icons/AllInboxOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import UpdateOutlinedIcon from "@material-ui/icons/UpdateOutlined";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import FunctionsIcon from "@material-ui/icons/Functions";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ViewListIcon from "@material-ui/icons/ViewList";
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import {Link} from 'react-router-dom'
import axios from "axios";
import Button from "@material-ui/core/Button";

const drawerWidth = 290;

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
}));

export default function ACpage() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  function changeBackgroundIn(e) {
    e.target.style.color = "#5D9EA6";
  }
  function changeBackgroundOut(e) {
    e.target.style.color = "Black";
  }
  const handleClose = () => setShow(false);
  const [show, setShow] = React.useState(false);

  const handleSubmit = (e) => {
    
    setOpen(true);
    e.preventDefault();
    axios
      .post("/account/logout")
      .then((res) => {
        console.log("success");
        localStorage.removeItem("authtoken")

        console.log(res)
      })
      .catch((err) => {
        console.log("There is an error ..." + err);
      });
    handleClose();
  };
  
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Course Coordinator
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[
            "Schedule",
            "Send Request",
            "View My Requests",
            "Notifications",
          ].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>{index % 2 === 0 ? <ViewHeadlineOutlinedIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemIcon>
                <Link to="/coursecoordinator/viewschedule">
                  {index === 0 && <ScheduleOutlinedIcon />}
                </Link>
                <Link to="/coursecoordinator/sendrequest">
                  {index === 1 && <SendOutlinedIcon />}
                </Link>
                <Link to="/coursecoordinator/viewrequests">
                  {index === 2 && <AllInboxOutlinedIcon />}
                </Link>
                <Link to="/coursecoordinator/viewnotifications">
                  {index === 3 && <NotificationsActiveOutlinedIcon />}
                </Link>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            "My Profile",
            "Update My Profile",
            "Reset My Password",
            "Attendance",
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <Link to="/coursecoordinator/viewprofile">
                  {index === 0 && <PermIdentityOutlinedIcon />}
                </Link>
                <Link to="/coursecoordinator/updateprofile">
                  {index === 1 && <UpdateOutlinedIcon />}
                </Link>
                <Link to="/coursecoordinator/restspassword">
                  {index === 2 && <LockOpenOutlinedIcon />}
                </Link>
                <Link to="/coursecoordinator/attendance">
                  {index === 3 && <ListAltOutlinedIcon />}
                </Link>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            "View Slots Assignment",
            "View Staff",
            "Add Course Slot",
            "Delete Course Slot",
            "Update Course Slot",
            "Accept/Reject Requests",
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <Link to="/coursecoordinator/viewslotassignment">
                  {index === 0 && <ViewListIcon />}
                </Link>
                <Link to="/coursecoordinator/viewmember">
                  {index === 1 && <ViewListIcon />}
                </Link>
                <Link to="/coursecoordinator/addcourseslot">
                  {index === 2 && <AddIcon />}
                </Link>
                <Link to="/coursecoordinator/removecourseslot">
                  {index === 3 && <RemoveIcon />}
                </Link>
                <Link to="/coursecoordinator/updatecourseslot">
                  {index === 4 && <ListAltOutlinedIcon />}
                </Link>
                <Link to="/coursecoordinator/acceptorrejectrequests">
                  {index === 5 && <QuestionAnswerIcon />}
                </Link>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Logout"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <Link to="/login">
                  {index === 0 && <ExitToAppOutlinedIcon />}
                </Link>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
        
        </Typography>
        <Typography paragraph>
          
        </Typography>
      </main>
    </div>
  );
}
