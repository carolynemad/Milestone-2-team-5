import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Snackbar from '@material-ui/core/Snackbar';

const action = (
    <Button color="secondary" size="large"  >
    
    </Button>
  );
  
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 470,
      '& > * + *': {
        marginTop: theme.spacing(3),
        textAlign: "center",
        alignItems: "center",
        
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
    
      tableStyle: {
        width: "28vw",
        margin: "2vw",
        justifyContent: "center",
        alignItems: "center",
        
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
        justifyContent: 'center',
        alignItems: 'center',
      },
      root3: {
        width: "50%",
        "& > * + *": {
          marginTop: theme.spacing(1),
          flex: 1,
    flexDirection: 'column',
        },
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
        width: "31.35vw",
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
        justifyContent: 'center',
        alignItems: 'center',
      },
    }));
  
  
  export default function Notifications() {
    const classes = useStyles();
    
  
    return (
        
        <div >
        <table className={classes.tableStyle}>
          <tr>
            <Typography className={classes.titleStyle}>Notifications</Typography>
  
            <br></br>
          </tr>
          <tr>
            <hr style={{ width: "28vw" }} />
            <br></br>
          </tr>
          <tr className={classes.rowStyle}></tr>
            </table>
              
             
         <br></br>

         <table>
      <div className={classes.root}>
     
    <SnackbarContent message="Leave Request" action={action} /> 
        <SnackbarContent
          message={
            'link of switch'
          }
        />
        <SnackbarContent align="center"  message="Grading Schedule" action={action} />
        <SnackbarContent
          message={
            'Compensation'
          }
          action={action}
        />

<SnackbarContent
          message={
            'Date of request'
          }
          />
      </div>
      </table>
      </div>
      
    );
    
    
  }