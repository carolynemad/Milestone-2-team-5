import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import axios from "axios";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "15vw ",
    },
  },
  root2: {
    "& > *": {
      margin: theme.spacing(1),
      width: "15vw ",
    },
  },
  margin: {
    margin: theme.spacing(0.5),
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
  root3: {
    "& > *": {
      margin: theme.spacing(1),
      width: "30vw ",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "31.35vw",
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

export default function AddCourse() {
  const classes = useStyles();
  const [depName, setDepName] = React.useState("");
  const [courseName, setCourseName] = React.useState("");
  const [courseID, setCourseID] = React.useState("");
  const [coverage, setCoverage] = React.useState("");
  const [instructor, setInstructor] = React.useState("");
  const [coordinator, setCoordinator] = React.useState("");
  const [assistant, setAssistant] = React.useState("");
  const [slot, setSlot] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setShow(false);

  const handleClose1 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleShow = () => setShow(true);
  const handleDepName = (e) => setDepName(e.target.value);
  const handleCourseName = (e) => setCourseName(e.target.value);
  const handleCourseID = (e) => setCourseID(e.target.value);
  const handleCoverage = (e) => setCoverage(e.target.value);
  const handleInstructor = (e) => setInstructor(e.target.value);
  const handleCoordinator = (e) => setCoordinator(e.target.value);
  const handleAssistant = (e) => setAssistant(e.target.value);
  const handleSlot = (e) => setSlot(e.target.value);

  const handleSubmit = (e) => {
    setOpen(true);
    e.preventDefault();
    const course = {
      departmentName: depName,
      courseName: courseName,
      courseID: courseID,
      courseCoordinator: coordinator,
      courseInstructors: instructor,
      courseAssistant: assistant,
      slots: slot,
      courseCoverage: coverage,
    };
    console.log(course);
    axios
      .post("/hr/addCourse", course)
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
          <Typography className={classes.titleStyle}>Add New Course</Typography>

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
                <td>
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                      required
                      id="outlined-basic"
                      label="Department Name"
                      variant="outlined"
                      size="small"
                      onChange={handleDepName}
                    />
                  </form>
                </td>
                <td>
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                      required
                      id="outlined-basic"
                      label="Course Name"
                      variant="outlined"
                      size="small"
                      onChange={handleCourseName}
                    />
                  </form>
                </td>
              </table>
            </tr>
            <tr>
              <table>
                <td>
                  <form className={classes.root} noValidate autoComplete="off">
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
                <td>
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                      required
                      id="outlined-basic"
                      label="Course Coordinator"
                      variant="outlined"
                      size="small"
                      onChange={handleCoordinator}
                    />
                  </form>
                </td>
              </table>
            </tr>
            <tr></tr>
            <tr>
              <td>
                <FormControl
                  required
                  fullWidth
                  className={classes.margin}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Course Coverage
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    onChange={handleCoverage}
                    startAdornment={
                      <InputAdornment position="start">%</InputAdornment>
                    }
                    labelWidth={60}
                  />
                </FormControl>
              </td>
            </tr>
            <table>
              <tr>
                <td>
                  <form className={classes.root2} noValidate autoComplete="off">
                    <TextField
                      required
                      id="outlined-basic"
                      label="Course Instructors"
                      variant="outlined"
                      size="small"
                      onChange={handleInstructor}
                    />
                  </form>
                </td>
                <td>
                  <form className={classes.root2} noValidate autoComplete="off">
                    <TextField
                      required
                      id="outlined-basic"
                      label="Course Assistants"
                      variant="outlined"
                      size="small"
                      onChange={handleAssistant}
                    />
                  </form>
                </td>
              </tr>
            </table>
            <tr>
              <td>
                <form className={classes.root3} noValidate autoComplete="off">
                  <TextField
                    required
                    id="outlined-basic"
                    label="Slots"
                    variant="outlined"
                    size="small"
                    onChange={handleSlot}
                  />
                </form>
              </td>
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
                  Add Course
                </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose1}
                >
                  <Alert onClose={handleClose1} severity="success">
                    Course Added.
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
