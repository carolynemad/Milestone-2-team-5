import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

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
  
    titleStyle: {
        fontSize: '2vw',
        textAlign: 'center',
        fontFamily: 'Helvetica',
        color: 'black',
        fontWeight:'bold',
  
    },
 
    Schedule: {
      width: '31vw',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper, justifyContent: 'center',
      alignItems: 'center',
    },

    tableStyle: {
      width: '28vw',
      margin: '2vw',
      justifyContent: 'center',
      alignItems: 'center',
      // display:'flex'
    },
    rowStyle: {
      justifyContent: 'center',
      alignItems: 'center',
    },

  }))

function changeBackgroundIn(e) {
    e.target.style.color = '#5D9EA6'
  }
  function changeBackgroundOut(e) {
    e.target.style.color = 'Black'
  }
  
export default function Schedule() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([0]);
  
    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };
  
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
      <Typography className={classes.titleStyle}>Schedule</Typography>
  
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

                <tr>
                <List className={classes.Schedule}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
</tr>

                </table>
              </tr>
            </table>
          </tr>
          
       
        </table>
        
      </div>
    )
}

