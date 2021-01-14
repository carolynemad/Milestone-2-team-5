import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";

function changeBackgroundIn(e) {
  e.target.style.color = "#5D9EA6";
}
function changeBackgroundOut(e) {
  e.target.style.color = "Black";
}

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "30vw ",
    },
  },
  root3: {
    "& > *": {
      margin: theme.spacing(1),
      width: "30vw ",
    },
  },
  titleStyle: {
    fontSize: "2vw",
    textAlign: "center",
    fontFamily: "Helvetica",
    color: "black",
    fontWeight: "bold",
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "30vw",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function AssignSlot() {
  const classes = useStyles();
  const [memberID, setMemberID] = React.useState("");
  const [slotID, setSlotID] = React.useState("");
  const handleMemberID = (e) => setMemberID(e.target.value);
  const handleSlotID = (e) => setSlotID(e.target.value);
  const handleClose1 = () => setShow(false);
  const [show, setShow] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleShow = () => setShow(true);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = (e) => {
    setOpen(true);
    e.preventDefault();
    const course = {
      acID: memberID,
      slotID: slotID,
    };
    console.log(course);
    axios
      .post("/acAccount/assignAcMemberToUnassignedSlot", course)
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        console.log("There is an error ..." + err);
      });
    handleClose1();
  };

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
          <Typography className={classes.titleStyle}>Assigned Slot</Typography>

          <br></br>
        </tr>
        <tr>
          <hr style={{ width: "28vw" }} />
          <br></br>
        </tr>
        <tr className={classes.rowStyle}>
          <table>
            <tr>
              <table>
                <tr>
                  <td>
                    <form
                      className={classes.root}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        required
                        id="outlined-basic"
                        label="Member ID"
                        variant="outlined"
                        size="small"
                        onChange={handleMemberID}
                      />
                    </form>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className={classes.root}>
                      <TextField
                        required
                        id="outlined-basic"
                        label="Slot ID"
                        variant="outlined"
                        size="small"
                        onChange={handleSlotID}
                      />
                    </div>
                  </td>
                </tr>
              </table>
            </tr>
            <tr>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <br />
                <Button
                  className={classes.buttonStyle}
                  onMouseOver={changeBackgroundIn}
                  onMouseOut={changeBackgroundOut}
                  onClick={handleSubmit}
                  variant="contained"
                >
                  Assign Slots
                </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose1}
                >
                  <Alert onClose={handleClose1} severity="success">
                    Slots Assigned.
                  </Alert>
                </Snackbar>
              </div>{" "}
            </tr>
          </table>
        </tr>
      </table>
    </div>
  );
}
