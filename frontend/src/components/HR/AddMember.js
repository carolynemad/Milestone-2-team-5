import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
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
      width: "15vw ",
    },
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

export default function AddMember() {
  const classes = useStyles();
  const [show, setShow] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [gender, setGender] = React.useState("Other");
  const [memberType, setMemberType] = React.useState("HR");
  const [email, setEmail] = React.useState("");
  const [location, setLocation] = React.useState("");
  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleGender = (e) => setGender(e.target.value);
  const handleMemberType = (e) => setMemberType(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);
  const handleClose1 = () => setShow(false);

  const handleSubmit = (e) => {
    setOpen(true);
    e.preventDefault();
    const mem = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      officeLocation: location,
      memberType: memberType,
    };
    console.log(mem);
    axios
      .post("/hrAccount/addNewMember", mem)
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
          <Typography className={classes.titleStyle}>Add New Member</Typography>

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
                      label="First Name"
                      variant="outlined"
                      size="small"
                      onChange={handleFirstName}
                    />
                  </form>
                </td>
                <td>
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                      required
                      id="outlined-basic"
                      label="Last Name"
                      variant="outlined"
                      size="small"
                      onChange={handleLastName}
                    />
                  </form>
                </td>
              </table>
            </tr>
            <tr>
              <FormControl
                required
                variant="outlined"
                size="small"
                className={classes.formControl}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  Gender
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  onChange={handleGender}
                  label="Gender"
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value={"MALE"}>Male</MenuItem>
                  <MenuItem value={"FEMALE"}>Female</MenuItem>
                  <MenuItem value={"OTHER"}>Other</MenuItem>
                </Select>
              </FormControl>
            </tr>
            <tr>
              <FormControl
                required
                variant="outlined"
                size="small"
                className={classes.formControl}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  Member Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  onChange={handleMemberType}
                  label="Member Type"
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value={"AC"}>Academic</MenuItem>
                  <MenuItem value={"HR"}>HR</MenuItem>
                </Select>
              </FormControl>
            </tr>
            <tr>
              <td>
                <form className={classes.root2} noValidate autoComplete="off">
                  <TextField
                    required
                    id="outlined-basic"
                    label="Email Address"
                    variant="outlined"
                    size="small"
                    onChange={handleEmail}
                  />
                </form>
              </td>
            </tr>
            <tr>
              <td>
                <form className={classes.root2} noValidate autoComplete="off">
                  <TextField
                    required
                    id="outlined-basic"
                    label="Office Location"
                    variant="outlined"
                    size="small"
                    onChange={handleLocation}
                  />
                </form>
              </td>
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
                  Add Member
                </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert onClose={handleClose} severity="success">
                    Member Added.
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
