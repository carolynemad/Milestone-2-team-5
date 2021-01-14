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
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import ViewListIcon from "@material-ui/icons/ViewList";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import {Link} from 'react-router-dom'


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
    padding: theme.spacing(20),
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
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
            Heba El Mougy
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
          {["Schedule", "Notifications"].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>{index % 2 === 0 ? <ViewHeadlineOutlinedIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemIcon>
              <Link to = "/hr/viewschedule">{index === 0 &&<ScheduleOutlinedIcon />}</Link>
              <Link to = "hr/viewnotifications">{index === 1 && <NotificationsActiveOutlinedIcon />}</Link>
              
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
                <Link to = "/hr/viewprofile">{index === 0 && <PermIdentityOutlinedIcon />}</Link>
                <Link to = "/hr/updateprofile">{index === 1 && <UpdateOutlinedIcon />}</Link>
                <Link to = "/hr/resetpassword">{index === 2 && <LockOpenOutlinedIcon />}</Link>
                <Link to = "/hr/attendance">{index === 3 && <ListAltOutlinedIcon />}</Link>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Add Member", "Remove Member", "Update Member", "View Member"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                <Link to = "/hr/addmember">{index === 0 && <AddIcon />}</Link>
                <Link to = "/hr/removemember">{index === 1 && <RemoveIcon />}</Link>
                <Link to = "/hr/updatemember">{index === 2 && <SystemUpdateAltIcon />}</Link>
                <Link to = "/hr/viewmember">{index === 3 && <ViewListIcon />}</Link>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <List>
          {["Add Faculty", "Remove Faculty", "Update Faculty"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                <Link to = "/hr/addfaculty">{index === 0 && <AddIcon />}</Link>
                <Link to = "/hr/removefaculty">{index === 1 && <RemoveIcon />}</Link>
                <Link to = "/hr/updatefaculty"> {index === 2 && <SystemUpdateAltIcon />}</Link>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <List>
          {["Add Department", "Remove Department", "Update Department"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                <Link to = "/hr/adddepartment">{index === 0 && <AddIcon />}</Link>
                <Link to = "/hr/removedepartment"> {index === 1 && <RemoveIcon />}</Link>
                <Link to = "/hr/updatedepartment">{index === 2 && <SystemUpdateAltIcon />}</Link>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <List>
          {["Add Location", "Remove Location", "Update Location"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                <Link to = "/hr/addlocation">{index === 0 && <AddIcon />}</Link>
                <Link to = "/hr/removelocation">{index === 1 && <RemoveIcon />}</Link>
                <Link to = "/hr/updatelocation">{index === 2 && <SystemUpdateAltIcon />}</Link>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <List>
          {["Add Course", "Remove Course", "Update Course"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                <Link to = "/hr/addcourse">{index === 0 && <AddIcon />}</Link>
                <Link to = "/hr/removecourse">{index === 1 && <RemoveIcon />}</Link>
                <Link to = "/hr/updatecourse">{index === 2 && <SystemUpdateAltIcon />}</Link>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
        <Divider />

        <List>
          {["Missing SignIn / SignOut"].map((text, index) => (
            <ListItem button key={text}>
              
               <ListItemIcon><Link to = "/hr/missingsigninsignout">{index === 0 && <MeetingRoomIcon />} </Link></ListItemIcon>
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
      </main>
    </div>
  );
}
