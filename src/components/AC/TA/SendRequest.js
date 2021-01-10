import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const BootstrapInput = withStyles((theme) => ({

    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
          borderRadius: 4,
          borderColor: '#80bdff',
          boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
        
      },
    }))(InputBase);

    const useStyles = makeStyles((theme) => ({
        margin: {
          margin: theme.spacing(1),
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
              marginTop: theme.spacing(1),
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
          titleStyle: {
            fontSize: "2vw",
            textAlign: "center",
            fontFamily: "Helvetica",
            color: "black",
            fontWeight: "bold",
          }
          ,
      
      tableStyle: {
        width: "15vw",
        margin: "1vw",
        justifyContent: "center",
        alignItems: "center",
      }
          
        
      }));
      function changeBackgroundIn(e) {
        e.target.style.color = "#5D9EA6";
      }
      function changeBackgroundOut(e) {
        e.target.style.color = "Black";
      }
    ;
      export default function () {
        const classes = useStyles();
        const [age, setAge] = React.useState('');
        const handleChange1 = (event) => {
          setAge(event.target.value);
        };
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
          <div>

<div >
        <table className={classes.tableStyle}>
          <tr>
            <Typography className={classes.titleStyle}>Requests</Typography>
  
            <br></br>
          </tr>
          <tr>
            <hr style={{ width: "22vw" }} />
            <br></br>
          </tr>
          <tr className={classes.rowStyle}></tr>
            </table>
            <Typography> Send request</Typography>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor=""> Send Request/Link </InputLabel>
              <BootstrapInput id="" />
            </FormControl>
            
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="Requests">Request Type</InputLabel>
              <NativeSelect
                id="Requests"
                value={age}
                onChange={handleChange1}
                input={<BootstrapInput />}
              >
                <option aria-label="None" value="" />
                <option value={"Replacement"}>Replacement</option>
                <option value={"Slot"}>Slot linking</option>
              </NativeSelect>
            </FormControl>
            <br>
            </br>
            <Button
                  className={classes.buttonStyle}
                  onMouseOver={changeBackgroundIn}
                  onMouseOut={changeBackgroundOut}
                  onClick={handleClick}
                  variant="contained"
                >
                  Send Request.
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
                <table className={classes.tableStyle}>
          
          
          <tr className={classes.rowStyle}></tr>
            </table>
            
            <Typography> change day off</Typography>

            <FormControl className={classes.margin}>
              <InputLabel htmlFor="Requests">Day off</InputLabel>
              <NativeSelect
                id="Requests"
                value={age}
                onChange={handleChange1}
                input={<BootstrapInput />}
              >
                <option aria-label="None" value="" />
                <option value={"Day"}>Saturday</option>
                <option value={"Day"}>Sunday</option>
                <option value={"Day"}>Monday</option>
                <option value={"Day"}>Tuesday</option>
                <option value={"Day"}>Wednsday</option>
                <option value={"Day"}>Thursday</option>
              </NativeSelect>
            </FormControl>
            
            <FormControl className={classes.margin}>
              <InputLabel htmlFor=""> Reason </InputLabel>
              <BootstrapInput id="" />
            </FormControl>
            <br>
            </br>
            <Button
                  className={classes.buttonStyle}
                  onMouseOver={changeBackgroundIn}
                  onMouseOut={changeBackgroundOut}
                  onClick={handleClick}
                  variant="contained"
                >
                   send to HOD.
                </Button>
          </div>

          <table className={classes.tableStyle}>
          
          
          <tr className={classes.rowStyle}></tr>
            </table>
            
            <Typography> Leave request</Typography>

            <FormControl className={classes.margin}>
              <InputLabel htmlFor="Requests">Type</InputLabel>
              <NativeSelect
                id="Requests"
                value={age}
                onChange={handleChange1}
                input={<BootstrapInput />}
              >
                <option aria-label="None" value="" />
                <option value={"Compensation"}>Compensation</option>
                <option value={"Other"}>Other</option>
                
              </NativeSelect>
            </FormControl>
            
            <FormControl className={classes.margin}>
              <InputLabel htmlFor=""> Reason </InputLabel>
              <BootstrapInput id="" />
            </FormControl>
            <br>
            </br>
            <Button
                  className={classes.buttonStyle}
                  onMouseOver={changeBackgroundIn}
                  onMouseOut={changeBackgroundOut}
                  onClick={handleClick}
                  variant="contained"
                >
                   send to HOD.
                </Button>
          </div>
          
        );
      }