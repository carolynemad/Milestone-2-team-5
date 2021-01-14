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

export default function UpdateProfile() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [show, setShow] = React.useState(false);
  const [address, setAddress] = React.useState("");
  const [gender, setGender] = React.useState("Other");
  const [date, setDate] = React.useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddress = (e) => setAddress(e.target.value);
  const handleGender = (e) => setGender(e.target.value);
  const handleDate = (e) => setDate(e.target.value);
  const handleClose1 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = (e) => {
    setOpen(true);
    e.preventDefault();
    const profile = {
      address: address,
      gender: gender,
      birthDate: date,
    };
    console.log(profile);
   
      try{
        axios
      .post("/account/updateProfile", profile , 
      {
        headers: {
          "tokenFrontEnd1": localStorage.getItem("tokenID"),
          "tokenFrontEnd": localStorage.getItem()
        }
      })
      .then((res) => {

      })
      .catch((err) => {
        console.log("There is an error ..." + err);
      });

      }
      catch {

      }
      
     
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
          <Typography className={classes.titleStyle}>Update Profile</Typography>

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
                  <FormControl
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
                </td>
              </table>
            </tr>
            <tr>
              <td>
                <form className={classes.root2} noValidate autoComplete="off">
                  <TextField
                    id="outlined-basic"
                    label="Address"
                    variant="outlined"
                    size="small"
                    onChange={handleAddress}
                  />
                </form>
              </td>
            </tr>
            <tr>
              <td>
                <form className={classes.container} noValidate>
                  <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="1999-04-02"
                    className={classes.textField}
                    onChange={handleDate}
                    InputLabelProps={{
                      shrink: true,
                    }}
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
                  Update Information
                </Button>
                <Snackbar
                  //open={open}
                  autoHideDuration={6000}
                  onClose={handleClose1}
                >
                  <Alert onClose={handleClose1} severity="success">
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
