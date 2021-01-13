import React, { Component } from "react";

import TA from "./components/AC/TA/TA";
import Scheduler from "./components/AC/TA/ViewScheduler";
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

class App extends Component {
  render() {
    return (
      //////////////////////////////////////////////////////////////////////////////////
      //<SendRequestTA />
      //<UpdateProfileTA />
      //<ViewRequestsTA />*******
      //<NotificationsTA />
      //<ResetPasswordTA />
      //<TA />
      //<AttendanceTA />
      //<ProfileTA />
      // <div> ****************
      //     <div className='scheduler-container'>
      //         <Scheduler events={data}/>
      //     </div>
      // </div>
      //////////////////////////////////////////////////////////////////////////////////
      <Login />
      //<SignUp />
      //////////////////////////////////////////////////////////////////////////////////
      //<HR />
      //<AddMember />
      //<Notifications/>
      //<Attendance/>
      //<ResetPassword/>
      //<AddPassword/>
      //<Profile/>
      //<ViewMember />
      //<Schedule />
      //<RemoveMember/>
      //<AddLocation/>
      //<AddFaculty />
      //<RemoveFaculty/>
      //<RemoveDepartment/>
      //<AddDepartment />
      //<RemoveLocation/>
      //<AddCourse />
      //<RemoveCourse/>
      //<UpdateMember />
      //<UpdateProfile />
      //<UpdateFaculty />
      //<UpdateLocation />
      //<UpdateDepartment />
      //<UpdateCourse />
      //////////////////////////////////////////////////////////////////////////////////
      //<CourseInstructor />
      //<ScheduleIns />
      //<NotificationsIns />
      //<AttendanceIns />
      //<ResetPasswordIns />
      //<ProfileIns />
      //<ViewRequests />
      //<SendRequest />
      //<DeleteCourseAssignment />
      //<UpdateCourseAssignment />
      //<ViewSlotAssignment />
      //<ViewCourseCoverage />
      //<AssignCourseCoordinator />
      //<AssignSlot />
      //////////////////////////////////////////////////////////////////////////////////
      //<HOD />
      //<AcceptOrReject />
      //<AssignCourseInstructor/>
      //<AttendanceHOD/>
      //<DeleteCourseInstructor/>
      //<NotificationsHOD/>
      //<ProfileHOD/>
      //<ResetPasswordHOD/>
      //<SendRequestHOD />
      //<UpdateCourseInstructor />
      //<UpdateProfileHOD />
      //<ViewCourseCoverageHOD />
      //<ViewMembersHOD />
      //<ViewRequestHOD />
      //<ViewSlotAssignmentHOD />
      //////////////////////////////////////////////////////////////////////////////////
      //<CourseCoordinator />
      //<AcceptOrRejectCOO />
      //<AddCourseSlot />
      //<RemoveCourseSlot />
      //<UpdateCourseSlot />
      //<ViewRequestsCOO/>
    );
  }
}

export default App;
