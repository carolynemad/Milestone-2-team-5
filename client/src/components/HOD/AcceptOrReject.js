import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "30vw ",
    },
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    justifyContent: "center",
    alignItems: "center",
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },

  titleStyle: {
    fontSize: "2vw",
    textAlign: "center",
    fontFamily: "Helvetica",
    color: "black",
    fontWeight: "bold",
  },

  Schedule: {
    width: "31vw",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    justifyContent: "center",
    alignItems: "center",
  },

  tableStyle: {
    width: "28vw",
    margin: "2vw",
    justifyContent: "center",
    alignItems: "center",
    // display:'flex'
  },
  rowStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
}));

function changeBackgroundIn(e) {
  e.target.style.color = "#5D9EA6";
}
function changeBackgroundOut(e) {
  e.target.style.color = "Black";
}
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function AcceptOrReject() {
  const classes = useStyles();
  const [show, setShow] = React.useState(false);
  const [requestid, setRequestID] = React.useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleRequestID= (e) => setRequestID(e.target.value);
  const [open, setOpen] = React.useState(false);
  const handleSubmit = (e) => {
    
    setOpen(true);
    e.preventDefault();
    const acceptorrejectrequests = {
      requestID:requestid
    };
    console.log(acceptorrejectrequests);
    axios
      .post("/acAccount/coordinatorAcceptSlotLinkingRequest", acceptorrejectrequests)
      
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        console.log("There is an error ..." + err);
      });
    handleClose();
  };
  

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose1 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
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
          <Typography className={classes.titleStyle}>
            Reply to Requests
          </Typography>

          <br></br>
        </tr>
        <tr>
        
          <hr style={{ width: "28vw" }} />
          <br></br>
        </tr>
        <tr className={classes.rowStyle}>
          <table>
            <tr>
            <TextField
            style={{ width: "25vw" }}
            id="outlined-basic"
            label="Request ID"
            variant="outlined"
            size="small"
           onChange={handleRequestID}
            />
            </tr>
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
                Accept 
              </Button>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose1}
              >
                <Alert onClose={handleClose1} severity="success">
                  Accepted
                </Alert>
              </Snackbar>
            </div>{" "}
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
                Reject
              </Button>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose1}
              >
                <Alert onClose={handleClose1} severity="success">
                  Rejected
                </Alert>
              </Snackbar>
            </div>{" "}
          </table>
        </tr>
      </table>
    </div>
  );
}
