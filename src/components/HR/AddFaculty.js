import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '15vw ',
      },
    },
    root3: {
        '& > *': {
          margin: theme.spacing(1),
          width: '15vw ',
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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        width:'15vw',
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
  
export default function AddFaculty() {
    const classes = useStyles();
 
    const [name, setName] = React.useState('');

    const handleChange = (event) => {
      setName(event.target.value);
    };
  
    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
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
            <Typography className={classes.titleStyle}>Add Faculty</Typography>
  
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
                  <td>
                    <form className={classes.root} noValidate autoComplete="off">
                      <TextField
                        id="outlined-basic"
                        label="Faculty Name"
                        vari    ant="outlined"
                        size="small"
                      />
                    </form>
                  </td>
           
                  <td>
                
                  <div>
        <TextField
          id="Departments"
          label="Departments"
          multiline
          rows={4}
          defaultValue="Enter departments separated by commas"
          variant="outlined"
        />
      </div>
                    </td>
                    <br/>
                </table>
              </tr>
              <tr><div style={{justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',}}>
                <br/>
                <Button
                  className={classes.buttonStyle}
                  onMouseOver={changeBackgroundIn}
                  onMouseOut={changeBackgroundOut}
                  onClick={handleClick}
                  variant="contained"
                >
                  Add Faculty
                </Button>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
        Faculty Addd.
          </Alert>
        </Snackbar>
             </div> </tr>
            </table>
          </tr>
          
       
        </table>
        
      </div>
    )
}



