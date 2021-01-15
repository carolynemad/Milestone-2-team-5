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

export default function UpdateDepartment() {
  const classes = useStyles();
  const [show, setShow] = React.useState(false);
  const handleClose1 = () => setShow(false);
  const [open, setOpen] = React.useState(false);

  const [depName, setDepName] = React.useState("");
  const [depHeadName, setDepHeadName] = React.useState("");
  const [course, setCourse] = React.useState("");
  const [staff, setStaff] = React.useState("");
  const handleDepartmentName = (e) => setDepName(e.target.value);
  const handleStaff = (e) => setStaff(e.target.value);
  const handleCourse = (e) => setCourse(e.target.value);
  const handleDepartmentHeadName = (e) => setDepHeadName(e.target.value);


  const handleSubmit = (e) => {
    setOpen(true);
    e.preventDefault();
    const obj = {
      departmentHead: depHeadName,
      departmentName: depName,
      staff: staff,
      courses: course,
    };
    console.log(obj);
    axios
      .post("/hrAccount/updateDepartment", obj)
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
            Update Department
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
                        label="Department Name"
                        variant="outlined"
                        size="small"
                        onChange={handleDepartmentName}
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
                      
                        id="outlined-basic"
                        label="Department Head Name"
                        variant="outlined"
                        size="small"
                        onChange={handleDepartmentHeadName}
                      />
                    </form>

                    
                  </td>
                </tr>
                <tr>
                  <div className={classes.food}>
                    <TextField
                      id="outlined-helperText"
                      label="Courses"
                      helperText="Enter Courses separated by commas"
                      variant="outlined"
                      onChange={handleCourse}
                    />
                  </div>
                </tr>
                <tr>
                  <div className={classes.food}>
                    <TextField
                      id="outlined-helperText"
                      label="Staff"
                      helperText="Enter Staff ID(s) separated by commas"
                      variant="outlined"
                      onChange={handleStaff}
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
                  Update Department
                </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert onClose={handleClose} severity="success">
                    Department Updated.
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
