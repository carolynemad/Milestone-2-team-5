import React , {history , useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import axios from "axios";
import {Link , useHistory} from 'react-router-dom'
import HR from "../components/HR/HR";



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

export default function Login(props) {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [show, setShow] = React.useState(false);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const member = {
      email: email,
      password: password,
    };
    console.log(member);
    await axios.post("/account/login", member).then(
      (res) => {
        console.log(res);
        localStorage.setItem("tokenID" , res.data.tokenId)
        localStorage.setItem("authtoken", res.data.token);
        if(res.data.token){
          console.log(res.data.token);
          console.log(res.data.tokenId)
          console.log(localStorage.getItem("authtoken"));

          if((res.data.tokenId).substring(0,2) === "HR"){
            console.log("HERE");
            // console.log(this.props)
           props.history.push("/hr")
           
          }
          else {
            // //1-Instructor
            // if(res.data.tokenMemberType === "Course Instructor"){
            //   props.history.push("/hr")
            // }
            // //2-Coordinator
            // if(res.data.tokenMemberType === "Course Coordinator"){
            //   props.history.push("/coursecoordinator")
            // }
            // //3-HOD
            // if(res.data.tokenMemberType === "Head Of Department"){
            //   props.history.push("/hod")
            // }
            // //4-TA
            // if(res.data.tokenMemberType === "Teacher Assistant"){
            //   props.history.push("/ta")
            // }
  
          }
        }


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
