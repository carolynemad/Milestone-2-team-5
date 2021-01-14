import React, { Component } from "react";

import TA from "./components/AC/TA/TA";
import ViewScheduler from "./components/AC/TA/ViewScheduler";
import "./App.css";
import NotificationsTA from "./components/AC/TA/Notifications";
import SendRequestTA from "./components/AC/TA/SendRequest";
import UpdateProfileTA from "./components/SignUp";
import ProfileTA from "./components/AC/TA/Profile";
import ViewRequestsTA from "./components/AC/TA/ViewRequests";
import ResetPasswordTA from "./components/AC/TA/ResetPassword";
import AttendanceTA from "./components/AC/TA/Attendance";
//////////////////////////////////////////////////////////////////////////////////
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import HR from "./components/HR/HR";
import HOD from "./components/HOD/HOD";
import CourseInstructor from "./components/AC/CourseInstructor/CourseInstructor";
import AddMember from "./components/HR/AddMember";
import Notifications from "./components/HR/Notifications";
import Attendance from "./components/HR/Attendance";
import ResetPassword from "./components/HR/ResetPassword";
import AddPassword from "./components/HR/UpdatePassword";
import Profile from "./components/HR/Profile";
import ViewMember from "./components/HR/ViewMembers";
import Schedule from "./components/HR/Schedule";
import RemoveMember from "./components/HR/RemoveMember";
import AddLocation from "./components/HR/AddLocation";
import AddFaculty from "./components/HR/AddFaculty";
import RemoveFaculty from "./components/HR/RemoveFaculty";
import RemoveDepartment from "./components/HR/RemoveDepartment";
import AddDepartment from "./components/HR/AddDepartment";
import RemoveLocation from "./components/HR/RemoveLocation";
import AddCourse from "./components/HR/AddCourse";
import RemoveCourse from "./components/HR/RemoveCourse";
import UpdateMember from "./components/HR/UpdateMember";
import UpdateProfile from "./components/HR/UpdateProfile";
import UpdateFaculty from "./components/HR/UpdateFaculty";
import UpdateLocation from "./components/HR/UpdateLocation";
import UpdateDepartment from "./components/HR/UpdateDepartment";
import UpdateCourse from "./components/HR/UpdateCourse";
//////////////////////////////////////////////////////////////////////////////////
import ScheduleIns from "./components/AC/CourseInstructor/ScheduleIns";
import NotificationsIns from "./components/AC/CourseInstructor/NotificationsIns";
import AttendanceIns from "./components/AC/CourseInstructor/AttendanceIns";
import ResetPasswordIns from "./components/AC/CourseInstructor/ResetPasswordIns";
import ProfileIns from "./components/AC/CourseInstructor/ProfileIns";
import UpdateProfileIns from "./components/AC/CourseInstructor/UpdateProfileIns";
import ViewRequests from "./components/AC/CourseInstructor/ViewRequests";
import SendRequest from "./components/AC/CourseInstructor/SendRequest";
import ViewMembersIns from "./components/AC/CourseInstructor/ViewMembersIns";
import DeleteCourseAssignment from "./components/AC/CourseInstructor/DeleteCourseAssignment";
import UpdateCourseAssignment from "./components/AC/CourseInstructor/UpdateCourseAssignment";
import ViewSlotAssignment from "./components/AC/CourseInstructor/ViewSlotAssignment";
import ViewCourseCoverage from "./components/AC/CourseInstructor/ViewCourseCoverage";
import AssignCourseCoordinator from "./components/AC/CourseInstructor/AssignCourseCoordinator";
import AssignSlot from "./components/AC/CourseInstructor/AssignSlot";
//////////////////////////////////////////////////////////////////////////////////
import AcceptOrReject from "./components/HOD/AcceptOrReject";
import AssignCourseInstructor from "./components/HOD/AssignCourseInstructor";
import AttendanceHOD from "./components/HOD/AttendanceHOD";
import DeleteCourseInstructor from "./components/HOD/DeleteCourseInstructor";
import NotificationsHOD from "./components/HOD/NotificationsHOD";
import ProfileHOD from "./components/HOD/ProfileHOD";
import ResetPasswordHOD from "./components/HOD/ResetPasswordHOD";
import SendRequestHOD from "./components/HOD/SendRequestHOD";
import UpdateCourseInstructor from "./components/HOD/UpdateCourseInstructor";
import UpdateProfileHOD from "./components/HOD/UpdateProfileHOD";
import ViewCourseCoverageHOD from "./components/HOD/ViewCourseCoverageHOD";
import ViewMembersHOD from "./components/HOD/ViewMembersHOD";
import ViewRequestHOD from "./components/HOD/ViewRequestsHOD";
import ViewSlotAssignmentHOD from "./components/HOD/ViewSlotAssignmentHOD";
//////////////////////////////////////////////////////////////////////////////////
import CourseCoordinator from "./components/AC/CourseCoordinator/CourseCoordinator";
import AcceptOrRejectCOO from "./components/AC/CourseCoordinator/AcceptOrRejectCOO";
import AddCourseSlot from "./components/AC/CourseCoordinator/AddCourseSlot";
import RemoveCourseSlot from "./components/AC/CourseCoordinator/RemoveCourseSlot";
import UpdateCourseSlot from "./components/AC/CourseCoordinator/UpdateCourseSlot";
import ViewRequestsCOO from "./components/AC/CourseCoordinator/ViewRequestsCOO";

// const data = [
//   { start_date:'2020-06-10 6:00', end_date:'2020-06-10 8:00', text:'Event 1', id: 1 },
//   { start_date:'2020-06-13 10:00', end_date:'2020-06-13 18:00', text:'Event 2', id: 2 }
// ];

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ViewMembers from "./components/HR/ViewMembers";
import UpdatePassword from "./components/HR/UpdatePassword";
// import { resetPassword } from "../../api/controllers/account_controller";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
      <Route path="/login" exact component={Login}/>
      {/* HR */}
      <Route path="/hr" exact component={HR}/>
      <Route path="/hr/addcourse" exact component={AddCourse}/>
      <Route path="/hr/adddepartment" exact component={AddDepartment}/>
      <Route path="/hr/addfaculty" exact component={AddFaculty}/>
      <Route path="/hr/addlocation" exact component={AddLocation}/>
      <Route path="/hr/addmember" exact component={AddMember}/>
      <Route path="/hr/viewattendance" exact component={Attendance}/>
      <Route path="/hr/viewnotifications" exact component={Notifications}/>
      <Route path="/hr/viewprofile" exact component={Profile}/>
      <Route path="/hr/removecourse" exact component={RemoveCourse}/>
      <Route path="/hr/removedepartment" exact component={RemoveDepartment}/>
      <Route path="/hr/removefaculty" exact component={RemoveFaculty}/>
      <Route path="/hr/removelocation" exact component={RemoveLocation}/>
      <Route path="/hr/removemember" exact component={RemoveMember}/>
      <Route path="/hr/resetpassword" exact component={ResetPassword}/>
      <Route path="/hr/viewschedule" exact component={Schedule}/>
      <Route path="/hr/updatecourse" exact component={UpdateCourse}/>
      <Route path="/hr/updatedepartment" exact component={UpdateDepartment}/>
      <Route path="/hr/updatefaculty" exact component={UpdateFaculty}/>
      <Route path="/hr/updatelocation" exact component={UpdateLocation}/>
      <Route path="/hr/updatemember" exact component={UpdateMember}/>
      <Route path="/hr/updatepassword" exact component={UpdatePassword}/>
      <Route path="/hr/updateprofile" exact component={UpdateProfile}/>
      <Route path="/hr/viewmember" exact component={ViewMembers}/>
      {/* Course Coordinator */}
      <Route path="/coursecoordinator" exact component={CourseCoordinator}/>
      <Route path="/coursecoordinator/acceptorrejectrequests" exact component={AcceptOrRejectCOO}/>
      <Route path="/coursecoaddordinator/addcourseslot" exact component={AddCourseSlot}/>
      <Route path="/coursecoordinator/removecourseslot" exact component={RemoveCourseSlot}/>
      <Route path="/coursecoordinator/updatecourseslot" exact component={UpdateCourseSlot}/>
      <Route path="/coursecoordinator/viewrequests" exact component={ViewRequestsCOO}/>
      {/* Course Instructor */}
      <Route path="/courseinstructor" exact component={CourseInstructor}/>
      <Route path="/courseinstructor/assigncoursecoordinator" exact component={AssignCourseCoordinator}/>
      <Route path="/courseinstructor/assignslot" exact component={AssignSlot}/>
      <Route path="/courseinstructor/attendance" exact component={Attendance}/>
      <Route path="/courseinstructor/deletecourseassignment" exact component={DeleteCourseAssignment}/>
      <Route path="/courseinstructor/viewnotifications" exact component={Notifications}/>
      <Route path="/courseinstructor/viewprofile" exact component={ProfileIns}/>
      <Route path="/courseinstructor/resetpassword" exact component={ResetPassword}/>
      <Route path="/courseinstructor/viewschedule" exact component={ScheduleIns}/>
      <Route path="/courseinstructor/sendrequest" exact component={SendRequest}/>
      <Route path="/courseinstructor/updatecourseassignment" exact component={UpdateCourseAssignment}/>
      <Route path="/courseinstructor/updateprofile" exact component={UpdateProfileIns}/>
      <Route path="/courseinstructor/viewcoursecoverage" exact component={ViewCourseCoverage}/>
      <Route path="/courseinstructor/viewrequests" exact component={ViewRequests}/>
      <Route path="/courseinstructor/viewmember" exact component={ViewMembersIns}/>
      <Route path="/courseinstructor/viewslotassignment" exact component={ViewRequests}/>
      {/* TA */}
      <Route path="/ta" exact component={TA}/>
      <Route path="/ta/attendance" exact component={Attendance}/>
      <Route path="/ta/viewnotifications" exact component={Notifications}/>
      <Route path="/ta/viewprofile" exact component={Profile}/>
      <Route path="/ta/resetpassword" exact component={ResetPassword}/>
      <Route path="/ta/sendrequest" exact component={SendRequest}/>
      <Route path="/ta/updateprofile" exact component={UpdateProfile}/>
      <Route path="/ta/viewrequests" exact component={ViewRequests}/>
      {/* <Route path="/ta/viewschedule" exact component={ViewScheduler}/> */}
      {/* HOD */}
      <Route path="/hod" exact component={HOD}/>
      <Route path="/hod/acceptorrejectrequests" exact component={AcceptOrReject}/>
      <Route path="/hod/assigncourseinstructor" exact component={AssignCourseInstructor}/>
      <Route path="/hod/attendance" exact component={AttendanceHOD}/>
      <Route path="/hod/deletecourseinstructor" exact component={DeleteCourseInstructor}/>
      <Route path="/hod/viewnotifications" exact component={NotificationsHOD}/>
      <Route path="/hod/viewprofile" exact component={ProfileHOD}/>
      <Route path="/hod/resetpassword" exact component={ResetPasswordHOD}/>
      <Route path="/hod/sendrequest" exact component={SendRequestHOD}/>
      <Route path="/hod/updatecourseinstructor" exact component={UpdateCourseInstructor}/>
      <Route path="/hod/updateprofile" exact component={UpdateProfileHOD}/>
      <Route path="/hod/viewcoursecoverage" exact component={ViewCourseCoverageHOD}/>
      <Route path="/hod/viewrequests" exact component={ViewRequestHOD}/>
      <Route path="/hod/viewmember" exact component={ViewMembersHOD}/>
      <Route path="/hod/viewslotassignment" exact component={ViewSlotAssignmentHOD}/>
      </div>
      </Router>

    );
  }
}

export default App;
