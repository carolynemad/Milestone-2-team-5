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
      width: "31.35vw ",
    },
  },
  food: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "48ch",
    },
  },

  titleStyle: {
    fontSize: "2vw",
    textAlign: "center",
    fontFamily: "Helvetica",
    color: "black",
    fontWeight: "bold",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "31.35vw ",
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
  root3: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
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

export default function UpdateFaculty() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [name, setName] = React.useState("");
  const [head, setHead] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const handleName = (e) => setName(e.target.value);
  const handleHead = (e) => setHead(e.target.value);
  const handleDepartment = (e) => setDepartment(e.target.value);

  const handleSubmit = (e) => {
    setOpen(true);
    e.preventDefault();
    const obj = {
      facultyName: name,
      departments: department,
      facultyHead: head,
    };
    console.log(obj);
    axios
      .post("/hrAccount/updateFaculty", obj)
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

  const handleClose1 = () => setShow(false);
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
          <Typography className={classes.titleStyle}>Update Faculty</Typography>

          <br></br>
        </tr>
        <tr>
          <hr style={{ width: "28vw" }} />
          <br></br>
        </tr>
        <tr className={classes.rowStyle}>
          <table>
            <tr>
              <td>
                <form className={classes.root2} noValidate autoComplete="off">
                  <TextField
                    required
                    id="outlined-basic"
                    label="Faculty Name"
                    variant="outlined"
                    size="small"
                    onChange={handleName}
                  />
                </form>
              </td>
            </tr>

            <tr>
              <td>
                <form className={classes.root2} noValidate autoComplete="off">
                  <TextField
                    id="outlined-basic"
                    label="Faculty Head"
                    variant="outlined"
                    size="small"
                    onChange={handleHead}
                  />
                </form>
              </td>
            </tr>

            <tr>
              <div className={classes.food}>
                <TextField
                  id="outlined-helperText"
                  label="Departments"
                  helperText="Enter Departments separated by commas"
                  variant="outlined"
                  onChange={handleDepartment}
                />
              </div>
            </tr>

            <tr></tr>
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
                  Update Information
                </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert onClose={handleClose} severity="success">
                    Information Updated.
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
