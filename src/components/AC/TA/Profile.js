import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import EmailIcon from "@material-ui/icons/Email";
import CakeIcon from "@material-ui/icons/Cake";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import RoomIcon from "@material-ui/icons/Room";
import CommuteIcon from "@material-ui/icons/Commute";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  root2: {
    "& > *": {
      margin: theme.spacing(1),
      width: "31.35vw ",
    },
  },

  titleStyle: {
    fontSize: "2vw",
    textAlign: "center",
    fontFamily: "Helvetica",
    color: "black",
    fontWeight: "bold",
  },

  profile: {
    width: "32vw",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },

  tableStyle: {
    width: "28vw",
    margin: "2vw",
    justifyContent: "center",
    alignItems: "center",
    // display:'flex'
  },

  buttonStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& > *": {
      margin: theme.spacing(0.75),
    },
  },
  rowStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  colStyle: {
    width: "50vw",
  },
  root3: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function changeBackgroundIn(e) {
  e.target.style.color = "#5D9EA6";
}
function changeBackgroundOut(e) {
  e.target.style.color = "Black";
}

export default function Profile() {
  const classes = useStyles();

  return (
    <div
      style={{
        background: "#f6f6f6",
        width: "100vw",
        height: "50vw",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <table className={classes.tableStyle}>
        <tr>
          {" "}
          <div className={classes.root}>
            <Avatar className={classes.purple}>C</Avatar>
            <Typography className={classes.titleStyle}>
              Nora Sadek
            </Typography>
          </div>
          <br></br>
        </tr>
        <tr>
          <hr style={{ width: "25vw" }} />
          <br></br>
        </tr>
        <tr className={classes.rowStyle}>
          <table>
            <tr>
              <table>
                <List className={classes.profile}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <PermIdentityIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="ID" secondary="AC1" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <EmailIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Email" secondary="NS@guc.edu.eg" />
                  </ListItem>

                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <CakeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Birthdate"
                      secondary="April 2, 1999"
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <AttachMoneyIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Salary" secondary="$100,000" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <BeachAccessIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Days Off" secondary="Saturday" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <RoomIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Office Location"
                      secondary="C7.312"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <ExitToAppIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Annual leave balance"
                      secondary="10"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <CommuteIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Accident leave balance"
                      secondary="4"
                    />
                  </ListItem>
                </List>
              </table>
            </tr>
          </table>
        </tr>
      </table>
    </div>
  );
}
