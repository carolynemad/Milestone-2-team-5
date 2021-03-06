import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";

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

function changeBackgroundIn(e) {
  e.target.style.color = "#5D9EA6";
}
function changeBackgroundOut(e) {
  e.target.style.color = "Black";
}

export default function UpdateCourseAssignment() {
  const classes = useStyles();
  const [show, setShow] = React.useState(false);
  const [oldassistantname, setOldAssistantName] = React.useState("");
  const[newassistantname,setNewAssistantName] = React.useState("");
  const[courseid,setCourseID] = React.useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleOldAssistantName = (e) => setOldAssistantName(e.target.value);
  const handleNewAssistantName= (e) => setNewAssistantName(e.target.value);
  const handleCourseID = (e) => setCourseID(e.target.value);
  const [open, setOpen] = React.useState(false);
  const handleSubmit = (e) => {
    
    setOpen(true);
    e.preventDefault();
    const updatecourseassignment = {
      courseID:courseid,
      memberId:oldassistantname,
      memberId:newassistantname //to be changed in the backend

    };
    console.log(UpdateCourseAssignment);
    axios
      .post("/acAccount/instructorUpdateCourseAssignment", updatecourseassignment)
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        console.log("There is an error ..." + err);
      });
    handleClose();
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
            Update Course Assignment
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
                        label="Old assistant Name"
                        variant="outlined"
                        size="small"
                        onchange={handleOldAssistantName}
                      />
                    </form>
                  </td>
                </tr>
                <tr>
                  <td>
                    <form
                      className={classes.root3}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        required
                        id="outlined-basic"
                        label="New assistant Name"
                        variant="outlined"
                        size="small"
                        onchange={handleNewAssistantName}
                      />
                    </form>
                  </td>
                </tr>
                <tr>
                  <td>
                    <form
                      className={classes.root3}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        required
                        id="outlined-basic"
                        label="Course ID"
                        variant="outlined"
                        size="small"
                        onchange={handleCourseID}
                      />
                    </form>
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
                  Update Course Assignment
                </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert onClose={handleClose} severity="success">
                    Course Assignment Updated.
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
