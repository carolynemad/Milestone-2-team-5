import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import Paper from '@material-ui/core/Paper';


import MuiAlert from "@material-ui/lab/Alert";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import axios from "axios";


const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [

];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
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

  rowStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function ViewMembers() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [memberId, setMember] = React.useState("");
  const [salary, setSalary] = React.useState(0);
  const [address, setAddress] = React.useState("");
  const [birthDate, setBirthDate] = React.useState("");

  const handleMember = (e) => setMember(e.target.value);
  const handleSalary = (e) => setSalary(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handleBirthDate = (e) => setBirthDate(e.target.value);
  const handleClose1 = () => setShow(false);

  const handleSubmit = (e) => {
    setOpen(true);
    e.preventDefault();
    const mem = {
      memberId: memberId,
     
    };
    console.log(mem);
    axios
      .post("/hrAccount/viewAttendanceLog", mem)
      .then((res) => {
        console.log("success");
        console.log(res.data.attendanceLog)

        //swal(res.data.msg);
      })
      .catch((err) => {
        console.log("There is an error ..." + err);
      });
    handleClose1();
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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
          <Typography className={classes.titleStyle}>Staff</Typography>

          <br></br>
        </tr>
        <tr>
          <hr style={{ width: "28vw" }} />
          <br></br>
        </tr>
        <tr className={classes.rowStyle}>
          <table>
            <tr>
            
                <td>
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                      required
                      onChange={handleMember}
                      id="outlined-basic"
                      label="Member ID"
                      variant="outlined"
                      size="small"
                    />
                  </form>
                </td>
                
                
            </tr>
            <tr>
              <br/><Button
                  className={classes.buttonStyle}
                  //onMouseOver={changeBackgroundIn}
                 // onMouseOut={changeBackgroundOut}
                  onClick={handleSubmit}
                  variant="contained"
                >
                  View Member
                </Button></tr>
            <tr></tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr></tr>
          </table>
        </tr>
      </table>
    </div>
  );
}
