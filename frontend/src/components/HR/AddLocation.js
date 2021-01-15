import React, { useState } from "react";
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
      width: "30vw ",
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
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

export default function AddLocation() {
  const classes = useStyles();
  const [show, setShow] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleClose1 = () => setShow(false);

  const [locName, setLocName] = React.useState("");
  const [locCapacity, setLocCapacity] = React.useState(0);
  const [locType, setLocType] = React.useState("");
  const handleLocationName = (e) => setLocName(e.target.value);
  const handleLocationCapacity = (e) => setLocCapacity(e.target.value);
  const handleLocationType = (e) => setLocType(e.target.value);

  const handleSubmit = (e) => {
    setOpen(true);
    e.preventDefault();
    const loc = {
      locationName: locName,
      locationType: locType,
      capacity: locCapacity,
    };
    console.log(loc);
    axios
      .post("/hrAccount/addLocation", loc)
      .then((res) => {
        console.log("success");
        console.log(res)
        //console.log(res.data.msg)
        console.log(res);

        //swal(res.data.msg);
      })
      .catch((err) => {
        console.log("There is an error ..." + err);
      });
    handleClose1();
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
          <Typography className={classes.titleStyle}>Add Location</Typography>

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
                        label="Location Name"
                        variant="outlined"
                        size="small"
                        onChange={handleLocationName}
                      />
                    </form>
                  </td>
                </tr>
                <tr>
                  <td>
                    <form
                      className={classes.root3}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        required
                        id="outlined-basic"
                        label="Location Capacity"
                        variant="outlined"
                        size="small"
                        onChange={handleLocationCapacity}
                      />
                    </form>
                  </td>
                </tr>
                <tr>
                  <td>
                    <FormControl
                      required
                      variant="outlined"
                      size="small"
                      className={classes.formControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Location Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        onChange={handleLocationType}
                        label="Location Type"
                      >
                        <MenuItem value=""></MenuItem>
                        <MenuItem value={"lecture"}>Lecture</MenuItem>
                        <MenuItem value={"lab"}>Lab</MenuItem>
                        <MenuItem value={"tutorial"}>Tutorial</MenuItem>
                        <MenuItem value={"TAoffice"}>TAoffice</MenuItem>
                        <MenuItem value={"DRoffice"}>DRoffice</MenuItem>
                        <MenuItem value={"Exam Hall"}>Exam Hall</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
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
                  Add Location
                </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert onClose={handleClose} severity="success">
                    Location Addd.
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
