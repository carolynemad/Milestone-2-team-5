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
export default function UpdateCourseInstructor() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [oldmemberid, setOldMemberID] = React.useState("");
  const [newmemberid, setNewMemberID] = React.useState("");
  const [courseid, setCourseID] = React.useState("");
  const handleOldMemberID = (e) => setOldMemberID(e.target.value);
  const handleNewMemberID = (e) => setNewMemberID(e.target.value);
  const handleCourseID = (e) => setCourseID(e.target.value);
  const [show, setShow] = React.useState(false);
  const handleClose1 = () => setShow(false);

  const handleSubmit = (e) => {
    setOpen(true);
    e.preventDefault();
    const course = {
      courseID: courseid,
      memberId1: oldmemberid,
      memberID2: newmemberid
    };
    console.log(course);
    axios
      .post("/acAccount/assignCourseInstructor", course)
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
          <Typography className={classes.titleStyle}>
            Update Course Instructor
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
                        label="Old Member ID"
                        variant="outlined"
                        size="small"
                        onChange={handleOldMemberID}
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
                        label="New Member ID"
                        variant="outlined"
                        size="small"
                        onChange={handleNewMemberID}
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
                        onChange={handleCourseID}
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
                  Update Course Instructor
                </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose1}
                >
                  <Alert onClose={handleClose1} severity="success">
                    Course Instructor Updated.
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
