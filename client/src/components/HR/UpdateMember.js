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

export default function UpdateMember() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const handleClose1 = () => setShow(false);
  const [memberID, setMemberID] = React.useState("");
  const [memberType, setMemberType] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [daysOff, setDaysOff] = React.useState("Friday");
  const [salary, setSalary] = React.useState(0);
  const [birthDate, setBirthDate] = React.useState("");
  const handleMemberType = (e) => setMemberType(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handleMemberID = (e) => setMemberID(e.target.value);
  const handleSalary = (e) => setSalary(e.target.value);
  const handleDaysOff = (e) => setDaysOff(e.target.value);
  const handleBirthDate = (e) => setBirthDate(e.target.value);

  const handleSubmit = (e) => {
    setOpen(true);
    e.preventDefault();
    const mem = {
      salary: salary,
      birthDate: birthDate,
      address: address,
      officeLocation: location,
      staffMemberType: memberType,
      daysOff: daysOff,
      memberId: memberID, //Needs to be changes in backend
    };
    console.log(mem);
    axios
      .post("/hrAccount/updateExistingMember", mem)
      .then((res) => {
        console.log("success");
        console.log(res)

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
            Update New Member
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
                      className={classes.root2}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        required
                        id="outlined-basic"
                        label="Member ID"
                        variant="outlined"
                        size="small"
                        onChange={handleMemberID}
                      />
                    </form>
                  </td>
                </tr>
                <td>
                  <form className={classes.root2} noValidate autoComplete="off">
                    <TextField
                      id="outlined-basic"
                      label="Office Location"
                      variant="outlined"
                      size="small"
                      onChange={handleLocation}
                    />
                  </form>

                  <FormControl
                    variant="outlined"
                    size="small"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Days Off
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      onChange={handleDaysOff}
                      label="Days Off"
                    >
                      <MenuItem value=""></MenuItem>
                      <MenuItem value={"Saturday"}>Saturday</MenuItem>
                      <MenuItem value={"Monday"}>Monday</MenuItem>
                      <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
                      <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
                      <MenuItem value={"Thursday"}>Thursday</MenuItem>
                      <MenuItem value={"Friday"}>Friday</MenuItem>
                      <MenuItem value={"Sunday"}>Sunday</MenuItem>
                    </Select>
                  </FormControl>
                </td>
              </table>
            </tr>
            <tr>
              <FormControl
                variant="outlined"
                size="small"
                className={classes.formControl}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  Staff Member Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  onChange={handleMemberType}
                  label="Staff Member Type"
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value={"Head Of Department"}>Head Of Department</MenuItem>
                  <MenuItem value={"Course Instructor"}>Course Instructor</MenuItem>
                  <MenuItem value={"Course Courdinator"}>Course Coordinator</MenuItem>
                  <MenuItem value={"HR Member"}>HR Member</MenuItem>
                  <MenuItem value={"Teacher Assistant"}>Teacher Assistant</MenuItem>
                  <MenuItem value={"Unassigned"}>Unassigned</MenuItem>
                </Select>
              </FormControl>
            </tr>
            <tr>
              <FormControl
                fullWidth
                className={classes.root2}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-amount">
                  Salary
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  onChange={handleSalary}
                  startAdornment={
                    <InputAdornment position="start">EGY POUNDS</InputAdornment>
                  }
                  labelWidth={50}
                />
              </FormControl>
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
                    variant="outlined"
                    defaultValue="1999-04-02"
                    onChange={handleBirthDate}
                    className={classes.textField}
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
                  Update Member
                </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert onClose={handleClose} severity="success">
                    Member Updated.
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