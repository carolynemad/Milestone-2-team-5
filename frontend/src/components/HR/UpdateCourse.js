import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
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

export default function UpdateCourse() {
  const classes = useStyles();

  const [show, setShow] = React.useState(false);
  const handleClose1 = () => setShow(false);
  const [oldID, setOldID] = React.useState("");
  const [newID, setNewID] = React.useState("");
  const [courseName, setCourseName] = React.useState("");
  const [depName, setDepName] = React.useState("");
  const handleOldID = (e) => setOldID(e.target.value);
  const handleNewID = (e) => setNewID(e.target.value);
  const handleCourseName = (e) => setCourseName(e.target.value);
  const handleDepartmentName = (e) => setDepName(e.target.value);
  const [open, setOpen] = React.useState(false);
  const handleSubmit = (e) => {
    setOpen(true);
    e.preventDefault();
    const obj = {
      courseID: oldID,
      courseNewId: newID, //NOT SURE
      courseName: courseName,
      departmentName: depName,
    };
    console.log(obj);
    axios
      .post("/hrAccount/updateCourse", obj)
      .then((res) => {
        console.log("success");

        console.log(res);

        //swal(res.data.msg);
      })
      .catch((err) => {
        console.log("There is an error ..." + err);
      });
    handleClose1();
  };

  const handleClose = (event, reason) => {
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
            Update New Course
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
                <td>
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                      required
                      id="outlined-basic"
                      label="Old Course ID"
                      variant="outlined"
                      size="small"
                      onChange={handleOldID}
                    />
                  </form>
                </td>
                <td>
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                      id="outlined-basic"
                      label="New Course ID"
                      variant="outlined"
                      size="small"
                      onChange={handleNewID}
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
                      id="outlined-basic"
                      label="Course Name"
                      variant="outlined"
                      size="small"
                      onChange={handleCourseName}
                    />
                  </form>
                </td>
                <td>
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                      id="outlined-basic"
                      label="Department Name"
                      variant="outlined"
                      size="small"
                      onChange={handleDepartmentName}
                    />
                  </form>
                </td>
              </table>
            </tr>
            <tr></tr>
            <table></table>
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
                  Update Course
                </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert onClose={handleClose} severity="success">
                    Course Updated.
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
