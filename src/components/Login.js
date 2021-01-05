import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles((theme) => ({
  loginUsername: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  buttonStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  textStyle: {
    fontSize: "2vw",
    textAlign: "center",
    fontFamily: "Helvetica",
    color: "black",
    fontWeight: "bold",
  },
  rowStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
}));

function changeBackgroundIn(e) {
  e.target.style.color = "#306073";
}
function changeBackgroundOut(e) {
  e.target.style.color = "Black";
}

export default function Login() {
  const classes = useStyles();

  return (
    <div
      style={{
        // backgroundImage:style=  `url("GUC1.jpeg")` ,
        width: "100vw",
        height: "50vw",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <table>
        <tr className={classes.rowStyle}>
          <img
            style={{
              width: "15vw",
              height: "5vw",
              justifyContent: "center",
              alignItems: "center",
            }}
            src="guc logo.jpeg"
          />
        </tr>
        <tr>
          <hr style={{ width: "15vw" }} />
          {/* <Typography className={classes.textStyle}>Login</Typography> */}
        </tr>
        <tr>
          <br />
        </tr>
        <tr>
          <TextField
            style={{ width: "15vw" }}
            id="outlined-basic"
            label="Username"
            variant="outlined"
            size="small"
          />
        </tr>
        <tr>
          <br />
        </tr>
        <tr>
          <TextField
            style={{ width: "15vw" }}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            color="white"
            size="small"
          />
        </tr>
        <tr>
          <br />
        </tr>
        <tr
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <ButtonGroup
            className={classes.buttonStyle}
            aria-label="contained primary button group"
            onMouseOver={changeBackgroundIn}
            onMouseOut={changeBackgroundOut}
          >
            <Button>Login</Button>
          </ButtonGroup>
        </tr>
      </table>
    </div>
  );
}
