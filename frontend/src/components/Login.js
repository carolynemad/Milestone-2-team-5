import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import axios from "axios";

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
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [show, setShow] = React.useState(false);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    const member = {
      email: email,
      password: password,
    };
    console.log(member);
    axios.post("/account/login", member).then(
      (res) => {
        console.log(res);
        console.log(res.headers)
        console.log(res.headers.authtoken);
        localStorage.setItem("authtoken", res.headers.authtoken);
        handleClose();
      },
      (err) => {
        console.log("There is an .." + err);
      }
    );
  };

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
            onChange={handleEmail}
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
            onChange={handlePassword}
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
            <Button onClick={handleSubmit}>Login</Button>
          </ButtonGroup>
        </tr>
      </table>
    </div>
  );
}
