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
  container: {
    display: "flex",
    flexWrap: "wrap",
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

export default function SendRequest() {
  const classes = useStyles();
  const [show, setShow] = React.useState(false);
  const [receiver, setReceiver] = React.useState("");
  const[request,setRequest] = React.useState("");
  const[comments,setComments] = React.useState("");
  const[slotid,setSlotid] = React.useState("");
  const[activedate,setAcitvedate] = React.useState("");
  const[enddate,setEnddate] = React.useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleReceiver = (e) => setReceiver(e.target.value);
  const handleRequest = (e) => setRequest(e.target.value);
  const handleComments = (e) => setComments(e.target.value);
  const handleSlotid = (e) => setSlotid(e.target.value);
  const handleActivedate = (e) => setAcitvedate(e.target.value);
  const handleEnddate = (e) => setEnddate(e.target.value);
  
  
  const [open, setOpen] = React.useState(false);
  const handleSubmit = (e) => {
    setOpen(true);
    e.preventDefault();
    const Sendrequest = {
      //receiverID: receiver,
      recieverID:receiver,
      requestType: request,
      comments : comments,
      activeDate: activedate,
      //endDate: enddate, //must be added in the backend
      slotID:slotid,
      
    };
    console.log(SendRequest);
    axios
      .post("/acAccount/sendSlotLinkingRequest", SendRequest)
      .then((res) => {
        console.log("success");
console.log(res)
        //swal(res.data.msg);
      })
      .catch((err) => {
        console.log("There is an error ..." + err);
      });
    handleClose();
  };
  

  const handleClick = () => {
    setOpen(true);  
  };
  const handleClose1 = (event, reason) => {
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
          <Typography className={classes.titleStyle}>Send Request</Typography>

          <br></br>
        </tr>
        <tr>
          <hr style={{ width: "28vw" }} />
          <br></br>
        </tr>
        <tr className={classes.rowStyle}>
          <table>
            <table>
              <tr>
                <td>
                  <form className={classes.root2} noValidate autoComplete="off">
                    <FormControl
                      required
                      variant="outlined"
                      size="small"
                      className={classes.formControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Receiver
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        
                        onChange={handleReceiver}
                        label="Reciever"
                      >
                        <MenuItem value=""></MenuItem>
                        <MenuItem value={10}>Head Of Department</MenuItem>
                        <MenuItem value={20}>HR</MenuItem>
                      </Select>
                    </FormControl>
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
                      Request Type
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                     
                      onChange={handleRequest}
                      label="Request Type"
                    >
                      <MenuItem value=""></MenuItem>
                      <MenuItem value={10}>Accidental Leave</MenuItem>
                      <MenuItem value={20}>Annual Leave</MenuItem>
                      <MenuItem value={30}>Compensation Leave</MenuItem>
                      <MenuItem value={40}>Maternity Leave</MenuItem>
                      <MenuItem value={50}>Sick Leave</MenuItem>
                      <MenuItem value={60}>Replacement</MenuItem>
                      <MenuItem value={70}>ChangeDayOff</MenuItem>
                      <MenuItem value={80}>SlotLinking</MenuItem>
                    </Select>
                  </FormControl>
                </td>
              </tr>
            </table>

            <tr>
              <td>
                <form className={classes.root2} noValidate autoComplete="off">
                  <TextField
                    id="outlined-basic"
                    label="Brief/Comments"
                    variant="outlined"
                    size="small"
                    onChange={handleComments}
                  />
                </form>
              </td>
            </tr>
            <tr>
              <td>
                <form className={classes.root2} noValidate autoComplete="off">
                  <TextField
                    id="outlined-basic"
                    label="Slot ID"
                    variant="outlined"
                    size="small"
                    onChange={handleSlotid}
                  />
                </form>
              </td>
            </tr>
            <tr>
              <td>
                <form className={classes.container} noValidate>
                  <TextField
                    id="date"
                    label="Active Date"
                    type="date"
                    defaultValue="1999-04-02"
                    className={classes.textField}
                    onChange={handleActivedate}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </form>
              </td>
            </tr>
            <tr>
              <td>
                <form className={classes.container} noValidate>
                  <TextField
                    id="date"
                    label="End Date"
                    type="date"
                    defaultValue="1999-04-02"
                    className={classes.textField}
                    //onChange={handleEnddate}
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
                  Send Request
                </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert onClose={handleClose} severity="success">
                    Request Sent.
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
