import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles= makeStyles((theme) => ({
    root: {
      maxWidth: 470,
      '& > * + *': {
        marginTop: theme.spacing(3),
        
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
    }));
    
    function changeBackgroundIn(e) {
      e.target.style.color = "#5D9EA6";
    }
    function changeBackgroundOut(e) {
      e.target.style.color = "Black";
    }
  ;
const columns = [
  { field: 'id', headerName: 'Receiver ID', width: 130 },
  { field: 'ID', headerName: 'Request ID', width: 130 },
  { field: 'Type', headerName: 'Request Type', width: 140 },
  { field:'Date', headerName:'Request Date',width: 140,},
  {field:'Sent Request', headerName:'Request Sent',width:140,}
  
];

const rows = [
  { id: 1, lastName: 'mohamed', firstName: 'youssef'},
  { id: 2, lastName: 'sadek', firstName: 'Abdelrahman',  },
  { id: 3, lastName: 'Aboelnaga', firstName: 'youssef' },
  { id: 4, lastName: 'Emad', firstName: 'Caroline' },
  { id: 5, lastName: 'Ghobashy', firstName: 'Yahya' },
  { id: 6, lastName: 'Khalifa', firstName: 'Mohamed' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey' },
];

export default function ViewRequests() {
    const classes = useStyles();
  return (
    <div>
    <table className={classes.tableStyle}>
      <tr>
        <Typography className={classes.titleStyle}>ViewRequests</Typography>

        <br></br>
      </tr>
      <tr>
        <hr style={{ width: "18vw" }} />
        <br></br>
      </tr>
      <tr className={classes.rowStyle}></tr>
        </table>


    <div style={{ height: 450, width: '60%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div> </div>
  );
}