import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '30vw ',
      },
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
  
export default function Notifications() {
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
          <tr>
            <Typography className={classes.titleStyle}>Notifications</Typography>
  
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
                <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
 
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>                </table>
              </tr>
            </table>
          </tr>
          
       
        </table>
        
      </div>
    )
}











