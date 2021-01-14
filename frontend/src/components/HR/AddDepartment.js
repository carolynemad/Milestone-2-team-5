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
      width: "30vw ",
    },
  },
  root3: {
    "& > *": {
      margin: theme.spacing(1),
      width: "15vw ",
    },
  },
  titleStyle: {
    fontSize: "2vw",
    textAlign: "center",
    fontFamily: "Helvetica",
    color: "black",
    fontWeight: "bold",
  },
  food: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "48ch",
    },
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

export default function AddDepartment() {
  const classes = useStyles();
  const [depName, setDepName] = React.useState("");
  const [depHeadName, setDepHeadName] = React.useState("");
  const [courses, setCourses] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleDepName = (e) => setDepName(e.target.value);
  const handleDepHeadName = (e) => setDepHeadName(e.target.value);
  const handleCourses = (e) => setCourses(e.target.value);
  const handleClose1 = () => setShow(false);

  const handleSubmit = (e) => {
    setOpen(true);
    e.preventDefault();
    const dep = {
      departmentName: depName,
      department: {
        //To be revisited 3ashan el backend bya5od department kamla
        depHeadName: depHeadName,
        course: courses,
      },
    };
    console.log(dep);
    axios
      .post("/hrAccount/addDepartment", dep)
      .then((res) => {
        console.log("success");
        //console.log(res.data.msg)

        //swal(res.data.msg);
      })
      .catch((err) => {
        console.log("There is an error ..." + err);
      });
    handleClose1();
  };

  const handleClick = () => {
    setOpen(true);
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
          <Typography className={classes.titleStyle}>Add Department</Typography>

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
                        label="Department Name"
                        variant="outlined"
                        size="small"
                        onChange={handleDepName}
                      />
                    </form>
                  </td>
                </tr>
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
                        label="Department Head Name"
                        variant="outlined"
                        size="small"
                        onChange={handleDepHeadName}
                      />
                    </form>
                  </td>
                </tr>
                <tr>
                  <div className={classes.food}>
                    <TextField
                      required
                      id="outlined-helperText"
                      label="Courses"
                      helperText="Enter Courses separated by commas"
                      variant="outlined"
                      onChange={handleCourses}
                    />
                  </div>
                </tr>

                <br />
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
                  Add Department
                </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert onClose={handleClose} severity="success">
                    Department Addd.
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
