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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "31.5vw ",
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

export default function UpdateCourseSlot() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
  });
  const [number, setNumber] = React.useState("");
  const [type, setType] = React.useState("");
  const [day, setDay] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setNumber(event.target.value);
    setType(event.target.value);
    setDay(event.target.value);
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
          <Typography className={classes.titleStyle}>
            Update New Course Slot
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
                        label="Slot ID"
                        variant="outlined"
                        size="small"
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
                        label="Course ID"
                        variant="outlined"
                        size="small"
                      />
                    </form>
                  </td>
                </tr>
                <tr>
                  <td>
                    <FormControl
                      variant="outlined"
                      size="small"
                      className={classes.formControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Slot Day
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={day}
                        onChange={handleChange}
                        label="Slot Day"
                      >
                        <MenuItem value=""></MenuItem>
                        <MenuItem value={10}>Saturday</MenuItem>
                        <MenuItem value={20}>Sunday</MenuItem>
                        <MenuItem value={30}>Monday</MenuItem>
                        <MenuItem value={40}>Tuesday</MenuItem>
                        <MenuItem value={50}>Wednesday</MenuItem>
                        <MenuItem value={60}>Thursday</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td>
                    <FormControl
                      variant="outlined"
                      size="small"
                      className={classes.formControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Slot Number
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={number}
                        onChange={handleChange}
                        label="Slot Number"
                      >
                        <MenuItem value=""></MenuItem>
                        <MenuItem value={10}>First</MenuItem>
                        <MenuItem value={20}>Second</MenuItem>
                        <MenuItem value={30}>Third</MenuItem>
                        <MenuItem value={40}>Forth</MenuItem>
                        <MenuItem value={50}>Fifth</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
              </table>
            </tr>
            <table>
              <tr>
                <td>
                  <FormControl
                    variant="outlined"
                    size="small"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Slot Type
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={type}
                      onChange={handleChange}
                      label="Slot Type"
                    >
                      <MenuItem value=""></MenuItem>
                      <MenuItem value={10}>Lecture</MenuItem>
                      <MenuItem value={20}>Lab</MenuItem>
                      <MenuItem value={30}>Tutoial</MenuItem>
                    </Select>
                  </FormControl>
                </td>
              </tr>

              <tr>
                <td>
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                      id="outlined-basic"
                      label="Member ID"
                      variant="outlined"
                      size="small"
                    />
                  </form>
                </td>
              </tr>
              <tr>
                <td>
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                      id="outlined-basic"
                      label="Location"
                      variant="outlined"
                      size="small"
                    />
                  </form>
                </td>
              </tr>
            </table>

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
                  Update Course Slot
                </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert onClose={handleClose} severity="success">
                    Course Slot Updated.
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
