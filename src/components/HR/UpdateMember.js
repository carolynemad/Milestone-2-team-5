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

  const [values, setValues] = React.useState({
    amount: "",
    day: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [type, setType] = React.useState("");

  const handleChange2 = (event) => {
    setType(event.target.type);
  };

  const [open, setOpen] = React.useState(false);

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
                      value={values.day}
                      onChange={handleChange2}
                      label="Days Off"
                    >
                      <MenuItem value=""></MenuItem>
                      <MenuItem value={10}>Saturday</MenuItem>
                      <MenuItem value={20}>Monday</MenuItem>
                      <MenuItem value={30}>Tuesday</MenuItem>
                      <MenuItem value={40}>Wednesday</MenuItem>
                      <MenuItem value={50}>Thursday</MenuItem>
                      <MenuItem value={60}>Friday</MenuItem>
                      <MenuItem value={70}>Sunday</MenuItem>
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
                  value={type}
                  onChange={handleChange2}
                  label="Staff Member Type"
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value={10}>Head Of Department</MenuItem>
                  <MenuItem value={20}>Course Instructor</MenuItem>
                  <MenuItem value={30}>Course Coordinator</MenuItem>
                  <MenuItem value={40}>HR Member</MenuItem>
                  <MenuItem value={50}>Teacher Assistant</MenuItem>
                  <MenuItem value={60}>Unassigned</MenuItem>
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
                  value={values.amount}
                  onChange={handleChange("amount")}
                  startAdornment={
                    <InputAdornment position="start">EGY POUNDS</InputAdornment>
                  }
                  labelWidth={60}
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
                  onClick={handleClick}
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
