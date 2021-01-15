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
import {Link} from 'react-router-dom'
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import FunctionsIcon from "@material-ui/icons/Functions";
import ViewListIcon from "@material-ui/icons/ViewList";
//import UpdateOutlinedIcon from "@material-ui/icons/UpdateOutlined";
const drawerWidth = 280;

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
            Slim Abdelnadher
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
                <Link to = "/hod/viewschedule">{index === 0 && <ScheduleOutlinedIcon />}</Link>
                <Link to = "/hod/sendrequest">{index === 1 && <SendOutlinedIcon />}</Link>
                <Link to = "/hod/viewrequests">{index === 2 && <AllInboxOutlinedIcon />}</Link>
                <Link to = "/hod/viewnotifications">{index === 3 && <NotificationsActiveOutlinedIcon />}</Link>
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
            "Accept/Reject",
            "Assign Course Instructor",
            "Delete Course Instructor",
            "View Course Coverage",
            "View Members",
            "Update Course Instructor",
            "View Slot Assignment",
            
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
              <Link to = "/hod/viewprofile">{index === 0 && <PermIdentityOutlinedIcon />}</Link>
              <Link to = "/hod/updateprofile">{index === 1 && <UpdateOutlinedIcon />}</Link>
              <Link to = "/hod/resetpassword">{index === 2 && <LockOpenOutlinedIcon />}</Link>
              <Link to = "/hod/attendance">{index === 3 && <ListAltOutlinedIcon />}</Link>
              <Link to = "/hod/acceptorrejectrequests">{index === 4 && <QuestionAnswerIcon />}</Link>
              <Link to = "/hod/assigncourseinstructor">{index === 5 && <AddIcon />}</Link>
              <Link to = "/hod/deletecourseinstructor">{index === 6 && <RemoveIcon />}</Link>
              <Link to = "/hod/viewcoursecoverage">{index === 7 && <FunctionsIcon />}</Link>
              <Link to = "/hod/viewmember">{index === 8 && <ViewListIcon />}</Link>
              <Link to = "/hod/updatecourseinstructor">{index === 9&& <UpdateOutlinedIcon />}</Link>
              <Link to = "/hod/viewslotassignment">{index === 10 && <ViewListIcon />}</Link>
              
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
              <Link to = "/login">{index === 0 && <ExitToAppOutlinedIcon />}</Link>
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
