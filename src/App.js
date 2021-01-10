import React, { Component } from "react";
import TA from "./components/AC/TA/TA";
import Scheduler from './components/AC/TA/ViewScheduler';
import './App.css';
import Notifications from './components/AC/TA/Notifications';
import SendRequest from './components/AC/TA/SendRequest';
import UpdateProfile from "./components/AC/TA/UpdateProfile";
import Profile from "./components/AC/TA/Profile";

import ViewRequests from "./components/AC/TA/ViewRequests";
import ResetPassword from "./components/AC/TA/ResetPassword";
import Attendance from "./components/AC/TA/Attendance";

// const data = [
//   { start_date:'2020-06-10 6:00', end_date:'2020-06-10 8:00', text:'Event 1', id: 1 },
//   { start_date:'2020-06-13 10:00', end_date:'2020-06-13 18:00', text:'Event 2', id: 2 }
// ];

class App extends Component { 
  render() {
      return (
       
        <SendRequest/>
      //<UpdateProfile/>
       //<ViewRequests/>
       //<Notifications/>
        //<ResetPassword/>
      // <TA/>
      //<Attendance/>
    //<Attendance/>
          // <div>
          //     <div className='scheduler-container'>
          //         <Scheduler events={data}/>
          //     </div>
          // </div>
      );
  }
}


export default App;
