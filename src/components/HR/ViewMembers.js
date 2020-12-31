import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
          margin: theme.spacing(1),
        },
      },
      orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
      },
      purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
      },
    root2: {
      '& > *': {
        margin: theme.spacing(1),
        width: '31.35vw ',
      },
    },
  
    titleStyle: {
        fontSize: '2vw',
        textAlign: 'center',
        fontFamily: 'Helvetica',
        color: 'black',
        fontWeight:'bold',
  
    },
 
 
    tableStyle: {
      width: '28vw',
      margin: '2vw',
      justifyContent: 'center',
      alignItems: 'center',
      // display:'flex'
    },
  
    buttonStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      
        '& > *': {
          margin: theme.spacing(0.75),
        },
      },
    rowStyle: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    colStyle: {
      width: '50vw',
    },
    root3: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        width:'31.35vw',
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }))

function changeBackgroundIn(e) {
    e.target.style.color = '#5D9EA6'
  }
  function changeBackgroundOut(e) {
    e.target.style.color = 'Black'
  }
  
export default function Profile() {
    const classes = useStyles();
  
    return (
        <div
        style={{
          background: '#f6f6f6',
          width: '100vw',
          height:'50vw',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        
        <table className={classes.tableStyle}>
          <tr> <div className={classes.root}>
      <Avatar className={classes.purple}>C</Avatar>
      <Typography className={classes.titleStyle}>Staff</Typography>

    </div> 
  
            <br></br>
          </tr>
          <tr>
          <hr style={{width:"28vw"}}/>
            <br></br>
          </tr>
          <tr className={classes.rowStyle}>
            <table>
              <tr>
                <table>

{/* Fixed header */}


                </table>
              </tr>
            </table>
          </tr>
          
       
        </table>
        
      </div>
    )
}

