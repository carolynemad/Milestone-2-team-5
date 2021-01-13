READ ME 
1.	UML: https://drive.google.com/file/d/1x2mhYdEewr7ReMZPjP1a7hzPhPIEdu2B/view?usp=sharing
2.	Portal.js launches the server of our project. 
3.	Server is listening on port: 3000
4.	MongoDB URI is in config/keys_dev.js
5.	Functionalities:
N/A means Not Applicable / Not Available
1.	Functionality: Logging in 
Route: localhost:3000/account/login
Request type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: {“Account”:{“email”: “yahya.ghobashy@student.guc.edu.eg” , “password”: “$2a$10$G8MM2dqkemwqQyD/Y.JITuk1r8slQWw.dLvkq3lJJqj8is13ATkpK”}}
Output: {“statusCode”:0, “message”: “Sign in process was successful”, “token”: “…<token value>...”}
Output type/format: JSON
Example Output: N/A
2.	Functionality: Logging in 
Route: localhost:3000/account/login
Request type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: {“Account”: {“email”: “ahmed.ahmed@student.guc.edu.eg”, “password”: “$2a$10$G8MM2dqkemwqQyD/Y.JITuk1r8slQWw.dLvkq3lJJqj8is13ATkpK”}}
Output: {“statusCode”:905, “message”: “Account does not exist” }
Output type/format: JSON
Example Output: N/A
3.	Functionality: Home Page
Route: localhost:3000/
Request type: GET
Parameters: N/A
Example on how to call the route: N/A
Request Body: N/A
Output: Home Page Route
Output type/format: HTML
Example Output: Home Page Route
4.	Functionality: View Profile
Route: localhost:3000/account/viewProfile
Request type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: N/A
Output: {“statusCode” : 0, “firstName”: “AbdelRahman”, “lastName”: “Sadek”, “email” : abdelrahman.sadek@student.guc.edu.eg, “gender”: “male”, “birthDate”: “1999-05-12T21:00:00.000Z”, “address”: “New Cairo”, “salary”:5000}
Output type/format: JSON
Example Output: N/A
5.	Functionality: View Profile
Route: localhost:3000/account/viewProfile
Request type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: N/A
Output: {“statusCode”: 906, “error”: “Account not found” }
Output type/format: JSON
Example Output: N/A
6.	Functionality: Update Profile
Route: localhost:3000/account/updateProfile
Request type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body:{“Account”:{“memberId”: “caroline01”, “address” : “aaaaa” , “salary” : “301500000”}}
Output: {“statusCode”: 1110, “error”: “Only HR Member can Edit These Fields”}
Output type/format: JSON
Example Output: N/A
7.	Functionality: Reset Password
Route: localhost:3000/account/resetPassword
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Account”: {“email”: “carolineemad@guc.edu.eg”, “newPassword”: “GGFFFTTTHHBB”}}
Output: {“statusCode”: 0 , “message”: “Password has been changed successfully”}
Output type/format: JSON
Example Output: N/A
8.	Functionality: sign in to campus
Route: localhost:3000/account/signInToCampus
 Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: N/A
Output: {“statusCode”: 0 , “message”: “You Are Signed In Successfully”}
Output type/format: JSON
Example Output: N/A
9.	Functionality: sign out from campus
Route: localhost:3000/account/signOutFromCampus
 Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: N/A
Output: {“statusCode”: 0 , “message”: “You Need To Sign In In Order To Sign Out Or Contact An Hr Member”}
Output type/format: JSON
Example Output: N/A
10.	Functionality: View Missing/Extra Hours
Route: localhost:3000/account/viewMissingOrExtraHours
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: N/A
Output: {statusCode: 0, “ Your missing Hours: 30” , “Your Extra Hours : 0”}
Output type/format: JSON
Example Output: N/A
11.	Functionality: Update Profile (HR)
Route: localhost:3000/account/updateProfile
Request type: POST
Parameters:N/A
Example on how to call the route: N/A
Request Body: {“Account”:{“memberId”: “yahya01”, “address”: “aaaaa”, “salary”: “301500000”}}
Output: {“statusCode”:0 , “message”: “Account info updated successfully”}
Output type/format: JSON
Example Output: N/A
12.	Functionality: Update Profile (Non-HR)
Route: localhost:3000/account/updateProfile
Request type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: {“Account”:{“memberId”: “caroline01”, “address”: “bbbb”, “birthDate”: “1-1-2001”, “gender”: “female”}}
Output: {“statusCode”:0, “message”: “Account info updated successfully”}
Output type/format: JSON
Example Output: N/A
13.	Functionality: Add new Location (HR)
Route: localhost:3000/hrAccount/addLocation
Request type: POST
Parameters:N/A
Example on how to call the route: N/A
Request Body: {“Location”:{“locationName”: “C7.04”, “locationType” : “Exam Hall”, “capacity”: “100”}}
Output: {“statusCode”: 0 , “message”: “New location created”}
Output type/format: JSON
Example Output: N/A
14.	Functionality: Add new Location (HR)
Route: localhost:3000/hrAccount/addLocation
Request type: POST
Parameters:N/A
Example on how to call the route: N/A
Request Body: {“Location”:{“locationName”: “C7.02”, “locationType” : “Exam Hall”, “capacity”: “100”}}
Output: {“statuCode”: 2000 , “message”: “This oction lready Exists”}
Output type/format: JSON
Example Output: N/A
15.	Functionality: Deleting Location (HR)
Route: localhost:3000/hrAccount/removeLocation
Request type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: {“Location”: {“locationName”: “C7.04”}}
Output: {“statusCode”:0, “message”: “Location Removed”}
Output type/format: JSON
Example Output: N/A
16.	Functionality: Deleting Location (HR)
Route: localhost:3000/hrAccount/removeLocation
Request type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: {“Location”: {“locationName”: “C7.07”}}
Output: {“statusCode”:2001, “error”: “This Location Not found”}
Output type/format: JSON
Example Output: N/A
17.	Functionality: Update Location (HR)
Route: localhost:3000/hrAccount/updateLocation
Request type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: {“Location”:{“locationName”: “C7.01”, “capacity”: “200”, “locationType”: “lab”}}
Output: {“statusCode”: 0, “error”: “Location Updated”}
Output type/format: JSON
Example Output: N/A
18.	Functionality: Update Location (HR)
Route: localhost:3000/hrAccount/updateLocation
Request type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: {“Location”:{“locationName”: “C7.04”, “capacity”: “200”, “locationType”: “lab”}}
Output: {“statusCode”: 2001, “error”: “This Location Not Found”}
Output type/format: JSON
Example Output: N/A
19.	Functionality: Add Faculty (HR)
Route: localhost:3000/hrAccount/addFaculty
Request type: POST 
Parameters: N/A
Example on how to call the route: N/A
Request Body: {“Faculty”:{“facultyName”:“MET”, “departments” : {“MET”, “DMET”}, “facultyHead”: “Slim”}}
Output: {“statusCode”: 0 , “message”: “New Faculty Created”}
Output type/format: JSON
Example Output: N/A
20.	Functionality: Add Faculty (HR)
Route: localhost:3000/hrAccount/addFaculty
Request type: POST 
Parameters: N/A
Example on how to call the route: N/A
Request Body: {“Faculty”:{“facultyName”:“MET”, “departments” : {“MET”, “DMET”}, “facultyHead”: “Slim”}}
Output: {“statusCode”: 1001 , “message”: “Faculty Already Exists”}
Output type/format: JSON
Example Output: N/A
21.	Functionality: Remove Faculty (HR)
Route: localhost:3000/hrAccount/deleteFaculty
Request type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: {“Faculty” : {“facultyName”: “EMS”}}
Output: {“statusCode”: 0 , “message”: “Faculty Removed”}
Output type/format: JSON
Example Output: N/A
22.	Functionality: Remove Faculty (HR)
Route: localhost:3000/hrAccount/deleteFaculty
Request type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: {“Faculty”: {“facultyName”: “EMeesS”}}
Output: {“statusCode”: 1000, “error” : “Faculty not found”}
Output type/format: JSON
Example Output: N/A
23.	Functionality: Update Faculty (HR)
Route: localhost:3000/hrAccount/updateFaculty
Request type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: {“Faculty”: {“facultyName” : “MET”, “departments”: {“MET”, “DMET”, “New Dept”}, “facultyHead”: “Slim”}}
Output: {“statusCode”: 0, “message” : “Faculty Updated”}
Output type/format: JSON
Example Output: N/A
24.	Functionality: Add new department (HR)
Route: localhost:3000/hrAccount/addDepartment
Request type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: {“Department” : {“departmentName”: “MET”, “departmentHead”: “Ahmed”, “courses”: {“CSEN100”, “CSEN101”}, “staff”: {“Ahmed”, “Ali”, “Omar”}}}
Output: {“statusCode”:0, “message” : “New Department Created” }
Output type/format: JSON
Example Output: N/A
25.	Functionality: Add New Department (HR)
Route: localhost:3000/hrAccount/addDepartment
Request type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: {“Department” : {“departmentName”: “MET”, “departmentHead”: “Ahmed”, “courses”: {“CSEN100”, “CSEN101”}, “staff”: {“Ahmed”, “Ali”, “Omar”}}}
Output: {“statusCode”: 1005, “error”: “Department already exists”}
Output type/format: JSON
Example Output: N/A
26.	Functionality: Remove a department (HR)
Route: localhost:3000/hrAccount/deleteDepartment
Request type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: {“Department”: {“departmentName”: “DMET”}}
Output: {“statusCode”: 0 , “message”: “Department Removed”}
Output type/format: JSON
Example Output: N/A
27.	Functionality: Remove a department (HR)
Route: localhost:3000/hrAccount/deleteDepartment
Request type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: { “Department”: {“departmentName” : “DMET”}}
Output: {“statusCode”: 1003, “error”: “Department Not Found”}
Output type/format: JSON
Example Output: N/A
28.	Functionality: Update Department (HR)
Route: localhost:3000/hrAccount/updateDepartment
Request type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: {“Department” : {“departmentName”: “MET”, “departmentHead”: “Omar”, “courses”: {“CSEN100”, “CSEN101”, “CSEN200”}, “staff”: {“Ahmed”, “Ali”, “Omar”}}}
Output: {“statusCode”: 0, “message”: “Department Updated”}
Output type/format: JSON
Example Output: N/A
29.	Functionality: Add New Member (HR)
Route: localhost:3000/hrAccount/addNewMember
Request type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: { "Account":{ "email": "abdelrahman.khalifa@guc.edu.eg","password":" $2a$10$G8MM2dqkemwqQyD/Y.JITuk1r8slQWw.dLvkq3lJJqj8is13ATkpK","firstName":"AbdelRahman","lastName":"Khalifa","gender":"Male","dateOfBirth":"1-1-2000","address":"New Cairo","salary":"10000","officeLocation":"C7.210","staffMemberType":"HR Member"}}
Output: {“statusCode”: 0, “message”: “New Member Added”}
Output type/format: JSON
Example Output: N/A
30.	Functionality: Add new member (HR)
Route: localhost3000/hrAccount/addNewMember
Request type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: { "Account":{ "email": "abdelrahman.khalifa@guc.edu.eg","password":" $2a$10$G8MM2dqkemwqQyD/Y.JITuk1r8slQWw.dLvkq3lJJqj8is13ATkpK","firstName":"AbdelRahman","lastName":"Khalifa","gender":"Male","dateOfBirth":"1-1-2000","address":"New Cairo","salary":"10000","officeLocation":"C7.210","staffMemberType":"HR Member"}}
Output: {“statusCode”: 1007, “error” : “Email Already Exists”}
Output type/format: JSON
Example Output: N/A
31.	Functionality: Updating Existing Member (HR)
Route: localhost:3000/hrAccount/updateExistingMember
Request Type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: {“Account”: {“email”: “yahya.elghobashy”@guc.edu.eg”, “gender: “Male”, “dateOfBirth” : “1-1-2000”, “salary”: “50000000”, “officeLocation”: “C7.301”, “staffMemberType” : “HR Member”}}
Output: {“statusCode”: 0, “message” : “Member info updated successfully”}
Output type/format: JSON
Example Output: N/A
32.	Functionality: View Attendance Log of a Member (HR)
Route: localhost:3000/hrAccount/viewAttendanceLog
Request Type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: {“Account”:{“email”: “yahya.elghobashy@guc.edu.eg”}}
Output:{“statusCode”:0, “firstName” : “Yahya”, “lastName” : “el Ghobashy”, “attendanceLog” : []}
Output type/format: JSON 
Example Output: N/A
33.	Functionality: Removing a member (HR)
Route: localhost:3000/hrAccount/removeExistingMember
Request Type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: {“Account” : {“email” : “raneem.wael@guc.edu.eg”}}
Output: {“statusCode”: 0, “message” : “Member deleted successfully”}
Output type/format: JSON
Example Output: N/A
34.	Functionality: Remove Existing Member (HR)
Route: localhost:3000/hrAccount/removeExistingMember
Request Type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: {“Account”: {“email”: “ranee11m@guc.edu.eg”}}
Output: {“statusCode”: 1009, “error” : “Member not found ”
Output type/format: JSON
Example Output: N/A
35.	Functionality: Updating course info (HR)
Route: localhost:3000/hrAccount/updateCourse
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Body”: {“courseId”: “DMET505”, “courseNewId”: “CSEN502”}}
Output: {“statusCode”: 0, “message”: “Course Info Updated”}
Output type/format: JSON
Example Output: N/A
36.	Functionality: Adding a new course (HR)
Route: localhost:3000/hrAccount/addCourse
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Body”: {“departmentName”: “Networks”, “courseName”: “Networks”, “courseId”: “Net503”}}
Output: {“statusCode”: 0, “message”: “New Course Created”}
Output type/format: JSON
Example Output: N/A
37.	Functionality: Adding a new course (HR)
Route: localhost:3000/hrAccount/addCourse
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Body”: {“departmentName”: “Networks”, “courseName”: “Networks”, “courseId”: “Net503”}}
Output: {“statusCode”: 9110, “message”: “Course Already Exists”}
Output type/format: JSON
Example Output: N/A
38.	Functionality: Deleting a Course (HR)
Route: localhost:3000/hrAccount/deleteCourse
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Body” : {“courseId”: “CSEN704”}}
Output:{“”statusCode”: 0, “message”: “Course Removed”}
Output type/format: JSON
Example Output: N/A
39.	Functionality: Delete a course instructor (HOD)
Route: localhost:3000/acAccount/deleteCourseInstructor
Request Type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: {“Body”: {“courseName” : “lol”, “memberId”: “AC4”}}
Output: {“statusCode”: 909, “error”: “Course not found”}
Output type/format: JSON
Example Output: N/A
40.	Functionality: Updates a course instructor (HOD)
Route: localhost:3000/acAccount/updateCourseInstructor
Request Type : POST
Request Body : {“Body”: {“courseID”: “DME596”, “memberId1”: “AC4”, “memberId2”: “AC3”}}
Output: {“statusCode” : 0, “message”: “instructors assigned to this course” }
Output type/format: JSON
41.	Functionality: Delete a course instructor (HOD)
Route: localhost:3000/acAccount/deleteCourseInstructor
Request Type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: {“Body”: {“courseName”: “Graphics”, “memberId”: “AC4”}}
Output: {“statusCode”: 1009, “error”: “Member not found”}
Output type/format: JSON
Example Output: N/A
42.	Functionality: Delete a course instructor (HOD)
Route: localhost:3000/acAccount/deleteCourseInstructor
Request Type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: {“Body”: {“courseName” : “Graphics”, “memberId”: “AC6”}}
Output: {“statusCode”: 0, “message”: “Instructor removed from course successfully”}
Output type/format: JSON
Example Output: N/A
43.	Functionality: Assign Course Instructor (HOD)
Route: localhost:3000/acAccount/assignCourseInstructor
Request Type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: { “Body” : {“courseName” : “Graphics”, “memberId”: “AC4”}}
Output:{“statusCode”: 0, “message”: “Instructors Assigned to this course”}
Output type/format: JSON
Example Output: N/A
44.	Functionality: Assign Course Instructor (HOD)
Route: localhost:3000/acAccount/assignCourseInstructor
Request Type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: {“Body” : {“courseName” : “Graphics”, “memberId”: “AC8”}}
Output:{“statusCode”: 906 , “error”: “Account not found”}
Output type/format: JSON
Example Output: N/A
45.	Functionality: Assign Course Instructor (HOD)
Route: localhost:3000/acAccount/assignCourseInstructor
Request Type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: { “Body” : {“courseName” : “Grapsssshics”, “memberId”: “AC4”}}
Output:{“statusCode”: 909, “message”: “Course not found”}
Output type/format: JSON
Example Output: N/A
46.	Functionality: View Days Off (HOD)
Route: localhost:3000/acAccount/viewDaysOff
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Department”: {“departmentName”: “MEY”} }
Output: {“statusCode”: 1003, “message”: “Department not found”}
Output type/format: JSON
Example Output: N/A
47.	Functionality: View Staff of a department (HOD)
Route: : localhost:3000/acAccount/ViewDepartmentStaff
Request Type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: {“Body”: {“departmentName”: “MET”}}
Output: {“arr”: [{“daysOff” : [“Saturday”], “_id” : “…<id>…”, “email”: “river@guc.edu.eg”, “password”: “$2a$10$G8MM2dqkemwqQyD/Y.JITuk1r8slQWw.dLvkq3lJJqj8is13ATkpK”, “firstName”: “River”, “lastName”: “Love”, “gender”: “Female”, “dateOfBirth” : “1-1-2000”, “address”: “Cairo”, “salary”: 100000, “officeLocation”: “C4.04”, “staffMemberType”: “HR Member”, “memberId”: “HR1”, “createdAt”: “…<timestamp>…”, “updatedAt”: “…<timestamp>…”, “__v” : 0}, {“daysOff” : null , “_id” : “…<id>…”, “email”: “nile@guc.edu.eg”, “password”: “$2a$10$G8MM2dqkemwqQyD/Y.JITuk1r8slQWw.dLvkq3lJJqj8is13ATkpK”, “firstName”: “Robert”, “lastName”: “Love”, “gender”: “Male”, “dateOfBirth” : “1-1-2000”, “address”: “Cairo”, “salary”: 100, “officeLocation”: “C4.05”, “staffMemberType”: “HR Member”, “memberId”: “HR2”, “createdAt”: “…<timestamp>…”, “updatedAt”: “…<timestamp>…”, “__v” : 0}]}
Output type/format: JSON
Example Output: N/A
48.	Functionality: View Staff of a department (HOD)
Route: : localhost:3000/acAccount/ViewDepartmentStaff
Request Type: POST
Parameters: N/A
Example on how to call the route: N/A
Request Body: {“Body”: {“departmentName”: “MET55”}}
Output: {“statusCode”:1003, “error”: “Department not found”}
Output type/format: JSON
Example Output: N/A
49.	Functionality: View all requests in a department (HOD)
Route: localhost:3000/acAccount/viewRequests
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Department”: {“departmentName”: “MET”}}
Output:{“requests”: [{{“_id”: “…<id>…”, “senderID” : “HR1”, “recieverID”: “HR2”, “requestDate”: “2020-12-20-T22:00:00.000Z”, “status”: “Pending”, “requestType”: “Replacement”, “brief”: “asfd”, “comments”: “gytg”, “requestID”: 1}, {“_id”: “…<id>…”, “senderID” : “HR1”, “recieverID”: “HR2”, “requestDate”: “2020-12-20-T22:00:00.000Z”, “status”: “Pending”, “requestType”: “Sick Leave”, “brief”: “asfd”, “comments”: “gytg”, “requestID”: 2}}]}
Output type/format: JSON
Example Output: N/A
50.	Functionality: View all requests in a department (HOD)
Route: localhost:3000/acAccount/viewRequests
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Department”: {“departmentName”: “MEST”}}
Output: {“statusCode”: 1003, “error”: “Department not found”}
Output type/format: JSON
Example Output: N/A
51.	Functionality: View staff members by courses in Department (HOD)
Route: localhost:3000/acAccount/hodViewDepartmentStaffPerCourse
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Body”: {“departmentName”: “MET”}}
Output: { “statusCode” : 0, “message”: “Here are the requested data”, “arr” : {“Graphics”,[{“daysOff”: null, “attendanceLog”; [], “loggedIn”: “false”, “requestLog”: [“1”, “2”, “3”], “_id”: “…<id>…”, “email”: “amy.winehouse@backtoblack.com” , “password” : “$2a$10$G8MM2dqkemwqQyD/Y.JITuk1r8slQWw.dLvkq3lJJqj8is13ATkpK”, “firstName”: “Sia”, “lastName”: “Furler”, “gender”: “Female”, “dateOfBirth”: “18-12-1975”, “address”: “Australia”, “salary”: “10000000”, “officeLocation”: “C7.301”, “staffMemberType”: “Head of Department”, “memberId”: “AC1”, “createdAt” : “2020-12-20T18:42:46.786Z”, “updatedAt”: “2020-12-22T01:55:27.753Z”, “__v”: 2}]}}
Output type/format: JSON
Example Output: N/A
52.	Functionality: View staff members by courses in Department (HOD)
Route: localhost:3000/acAccount/hodViewDepartmentStaffPerCourse
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Body”: {“departmentName”: “MER”}}
Output: {“statucsCode”: 1003, “error”: “Department Not Found”}
Output type/format: JSON
Example Output: N/A
53.	Functionality: View Course Coverage (HOD)
Route: localhost:3000/acAccount/viewCourseCoverage
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Department”: {“departmentName”: “DMET”}}
Output: {“coursesCoverage”: [[“DMET501”, 0.0],[“DMET502”, 70.0]]}
Output type/format: JSON
Example Output: N/A
54.	Functionality: View Course Coverage (HOD)
Route: localhost:3000/acAccount/viewCourseCoverage
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Department”: {“departmentName”: “DMSSSET”}}
Output: {“statucsCode”: 1003, “error”: “Department Not Found”}
Output type/format: JSON
Example Output: N/A
55.	Functionality: View teaching assignments  (HOD)
Route: localhost:3000/acAccount/viewTeachingAssignments
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Body”: {“departmentName”: “MEeEeET”}}
Output: {“statusCode”:1003, “error”: “Department Not Found” }
Output type/format: JSON
Example Output: N/A
56.	Functionality: Reject a request (HOD)
Route: localhost:3000/acAccount/hodRejectRequest
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Body” :{ “departmentName”: “DMET”, “requestID”: “4”}}
Output: {“statusCode”: 1011, “error”: “This request does not exist”}
Output type/format: JSON
Example Output: N/A
57.	Functionality: Reject a request (HOD)
Route: localhost:3000/acAccount/hodRejectRequest
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Body” :{ “departmentName”: “DMEaaT”, “requestID”: “1”}}
Output: {“statusCode”: 1003, “error”: “Department not found”}
Output type/format: JSON
Example Output: N/A
58.	Functionality: Reject a request (HOD)
Route: localhost:3000/acAccount/hodRejectRequest
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Body” :{ “departmentName”: “DMET”, “requestID”: “1”}}
Output: {“statusCode”: 0, “error”: “Request Rejected”}
Output type/format: JSON
Example Output: N/A
59.	Functionality: Accept a request (HOD)
Route: localhost:3000/acAccount/hodAcceptRequest
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: N/A
Output:{“statusCode”: 900, “error”: “Replacements Should Occur Only between Instructors or Teacher Assistants”}
Output type/format: JSON
Example Output: N/A
60.	Functionality: Academic Member Viewing Their Schedule (Teaching Activities / Replacements)
Route: localhost:3000/acAccount/viewSchedule
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Account”: {“memberID”: “AC3”}}
Output: {“final”: [{“_id”: “…<id>…”, “slotID” : “tu3c3201”, “slotNumber”: “Third”, “slotDay”: “Tuesday”, “slotType”: “Lecture”, “acID”  : “AC3”, “courseID”: “DMET502”, “location”: “c3.201”},{ “_id”: “…<id>…”, “slotID” : “tu3c4401”, “slotNumber”: “Fourth”, “slotDay”: “Tuesday”, “slotType”: “Lecture”, “acID”  : “AC3”, “courseID”: “DMET502”, “location”: “c3.201”}]}
Output type/format: JSON
Example Output: N/A
61.	Functionality: Academic member viewing replacement requests
Route: localhost:3000/acAccount/viewReplacementRequests
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Account”:{“memberID”: “AC8”}}
Output: {“statusCode”: 0, “message”: “These are your replacement requests”, “ReplacementRequests”: [{“_id”: “…<id>…”, “senderID”: “AC3”, “recieverID”: “AC8”, “requestDate”: “2020-12-20T22:00:00.000Z”, “status”: “Pending”, “requestType”: “Replacement”, “brief”: “asdfghjk” , “comment”: “null”, “requestID”: “11”}]}
Output type/format: JSON
Example Output: N/A
62.	Functionality: Send replacement requests (Academic member)
Route: localhost:3000/acAccount/sendReplacementRequests
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Body”: {“senderID”: “AC2”, “recieverID”: “AC3”, “replacementDate”: “2-2-2020”, “slotID”: “We3c3201”}}
Output: {“message”: “Replacement request sent”}
Output type/format: JSON
Example Output: N/A
63.	Functionality: Send replacement requests (Academic member)
Route: localhost:3000/acAccount/sendReplacementRequests
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: { “Body”: {“senderID”: “AC2”, “recieverID”: “748432”, “replacementDate”: “2-2-2020”, “slotID”: “We3c3201”}}
Output: {“statusCode”: 906 , “message”: “Account not Found”}
Output type/format: JSON
Example Output: N/A
64.	Functionality: Sending a Slot-linking Request (Academic Member)
Route: localhost:3000/acAccount/sendSlotLinkingRequest
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Body”: {“slotID”: “tu1c7303”, “brief”: “tredc”, “comments”: “erfgbhnm”}}
Output: {“message”: “Slot Linking Request Sent”}
Output type/format: JSON
Example Output: N/A
65.	Functionality: Sending a Slot-linking Request (Academic Member)
Route: localhost:3000/acAccount/sendSlotLinkingRequest
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Body”: {“slotID”: “tu1cZZZZZ7303”, “brief”: “tredc”, “comments”: “erfgbhnm”}}
Output: {“statucCode”: 9998, “message”: “Slot does not exist”}
Output type/format: JSON
Example Output: N/A
66.	Functionality: Notified whenever their requests are accepted or rejected. (Academic Member)
Route: localhost:3000/acAccount/showNotifications
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: N/A
Output: {“statusCode”:0, “message”: “You have Responses To Your Requests”}
Output type/format: JSON
Example Output: N/A
67.	Functionality: Notified whenever their requests are accepted or rejected. (Academic Member)
Route: localhost:3000/acAccount/showNotifications
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: N/A
Output: {“statusCode”:900, “message”: “You have No New Responses To Your Requests”}
Output type/format: JSON
Example Output: N/A
68.	Functionality: Cancel a Valid Pending Request (Academic Member)
Route: localhost:3000/acAccount/cancelStillPendingRequest
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: { “Body”: {“requestId”: “1234”}}
Output: {“statusCode”: 0, “error”: “Your Request is Cancelled”}
Output type/format: JSON
Example Output: N/A
69.	Functionality: View all requests with specific status (Academic Member)
Route: localhost:3000/acAccount/viewStatusOfAllSubmittedRequests
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Body”: {“criteria”: “Accepted”}}
Output: { “results”: {“Request Type: Replacement – Request Id:1 – Status: Accepted – Sent To Member With ID AC1”, “Request Type: Replacement – Request Id:2 – Status: Accepted – Sent To Member With ID AC2”}, “statusCode”: 0, “error”: “Requests Upon Criteria” }
Output type/format: JSON
Example Output: N/A
70.	Functionality: View all requests with specific status (Academic Member)
Route: localhost:3000/acAccount/viewStatusOfAllSubmittedRequests
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Body”: {“criteria”: “BALABIZO”}}
Output: { “statucCode”: 900, “error”: “Please Choose Criteria for viewing your submitted requests [All, Pending, Accepted, Rejected]”}
Output type/format: JSON
Example Output: N/A
71.	Functionality: View Request Log (Academic Member)
Route: localhost:3000/acAccount/viewStatusOfAllSubmittedRequests
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Body”: {“criteria”: “All”}}
Output: {“results”: [“Request Type : ChangeDayOff – Request Id: 33 – Status: Pending – Sent to Member with ID: AC33”, “Request Type : Replacement – Request Id: 35 – Status: Accepted – Sent to Member with ID: AC76”]}
Output type/format: JSON
Example Output: N/A
72.	Functionality: Submitting a compensation leave (No reason) (Academic Member)
Route: localhost:3000/acAccount/submitAnyTypeOfLeaves
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: { “Body”: {“requestType”: “Compensation Leave”, “activeDate”: “12-12-2021”}}
Output: {“statusCode”: 900, “error”: “Compensation Leaves must have a brief”}
Output type/format: JSON
Example Output: N/A
73.	Functionality: Submit a leave request to the HOD (Academic Member)
Route: localhost:3000/acAccountsubmitAnyTypeOfLeaves
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Body”: {“requestType”: “Compensation leave”, “activeDate”: “12-12-2021”, “brief”: “BRIEF BRIEF BRIEF”}}
Output:{statusCode:0, “error”: “Request sent to your Head of department”}
Output type/format: JSON
Example Output: N/A
74.	Functionality: Send a Change Day Off Request (Academic Member)
Route: localhost:3000/acAccount/changeDayOff
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Body”: “brief”: “dfghmtrfvb”}
Output: {“statusCode”: 0, “message”: “Request Sent”}
Output type/format: JSON
Example Output: N/A
75.	Functionality: Add slots to course (Course Coordinator)
Route: localhost:3000/acAccount/coordinatorAddCourseSlots
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Body”: {“courseID”: “DMET502”, “slotID”: “Su3c3201”, “slotNumber”: “First”, “slotDay”: “Sunday”, “slotType”: “Lab”: “acID”: “AC1”, “location”: C3.201}}
Output: {“statusCode”: 0, “message”: “New Slot Assigned ”}
Output type/format: JSON
Example Output: N/A
76.	Functionality: Add slots to course (Course Coordinator)
Route: localhost:3000/acAccount/coordinatorAddCourseSlots
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Body”: {“courseID”: “DMET5555502”, “slotID”: “Su3c3201”, “slotNumber”: “First”, “slotDay”: “Sunday”, “slotType”: “Lab”: “acID”: “AC1”, “location”: C7.202}}
Output: {“statusCode”: 1111, “message”: “Course Does not Exist ”}
Output type/format: JSON
Example Output: N/A
77.	Functionality: Update Course Slot (Coordinator)
Route: localhost:3000/acAccount/coordinatorUpdateCourseSlots
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Body”: {“courseID”: “DMET502”, “slotID”: “Su3c3202”, “slotNumber”: “Third”}}
Output: {“statusCode”:0, “message”: “Slot Updated”}
Output type/format: JSON
Example Output: N/A
78.	Functionality: Update Course Slot (Coordinator)
Route: localhost:3000/acAccount/coordinatorUpdateCourseSlots
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Body”: {“courseID”: “DMET50002”, “slotID”: “Su3c3202”, “slotNumber”: “Third”}}
Output: {“statusCode”:1111, “error”: “Course Does not Exist”}
Output type/format: JSON
Example Output: N/A
79.	Functionality: Update Course Slot (Coordinator) (Case: SlotID is not correct)
Route: localhost:3000/acAccount/coordinatorUpdateCourseSlots
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Body”: {“courseID”: “DMET50002”, “slotID”: “Su3c4242”, “slotNumber”: “Third”}}
Output: {“statusCode”:900, “error”: “Could not update slot”}
Output type/format: JSON
Example Output: N/A
80.	Functionality: Delete Slots (Course Coordinator)
Route: localhost:3000/acAccount/coordinatorDeleteCourseSlots
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: { “Body”: {“courseID”: “DMET503” , “slotID”: “Su3c3201”}}
Output: {“statusCode”: 0, “message”: “slot Deleted”}
Output type/format: JSON
Example Output: N/A
81.	Functionality: Delete Slots (Course Coordinator)
Route: localhost:3000/acAccount/coordinatorDeleteCourseSlots
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: { “Body”: {“courseID”: “DMET503” , “slotID”: “Su3c3201”}}
Output: {“statusCode”: 900, “message”: “could not delete slot”}
Output type/format: JSON
Example Output: N/A
82.	Functionality: Accept Slot-linking request (Coordinator)
Route: localhost:3000/acAccount/coordinatorAcceptSlotLinkingRequest
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: N/A
Output: {“statusCode”: 0, “message”: “Request Accepted successfully”}
Output type/format: JSON
Example Output: N/A
83.	Functionality: View Slot Linking requests (Coordinator)
Route: localhost:3000/acAccount/coordinatorViewSlotLinking
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Body”: {“memberId”: “AC6”}}
Output: {“statusCode”: 0, “message”: “Slot linking requests viewed”, “result”: [[“AC1”, “34”],[“AC2”, “556”]]}
Output type/format: JSON
Example Output: N/A
84.	Functionality: Accept Slot-linking request (Coordinator)
Route: localhost:3000/acAccount/coordinatorAcceptSlotLinkingRequest
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: N/A
Output: {“statusCode”: 912 , “message”: “No requests to view”}
Output type/format: JSON
Example Output: N/A
85.	Functionality: Reject Slot-linking request (Coordinator)
Route: localhost:3000/acAccount/coordinatorRejectSlotLinkingRequest
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: NA
Output: {statusCode:0, “message”: “Request Rejected Successfully”}
Output type/format: JSON
Example Output: N/A
86.	Functionality: View Course Coverage (Course instructor)
Route: localhost:3000/acAccount/coordinatorViewCourseCoverage
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: N/A
Output: {“statusCode”: 0, “result”: [{[“Graphics DMET501”, 0.8], [“Advanced Computer Lab CSEN704”, 70.8]}]}
Output type/format: JSON
Example Output: N/A
87.	Functionality: View staff’s profile per course (Course Instructor)
Route: localhost:3000/acAccount/instructorViewDepartmentStaffPerCourse
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: N/A
Output: { “statusCode” : 0, “message”: “Here are the requested data”, “arr” : {“Graphics”,[{“daysOff”: null, “attendanceLog”; [], “loggedIn”: “false”, “requestLog”: [“1”, “2”, “3”], “_id”: “…<id>…”, “email”: “amy.winehouse@backtoblack.com” , “password” : “$2a$10$7HKKcAsuCJUGshHOO9QkvOAE058/COCww5.XJXgMUCmFRxpuC37.q”, “firstName”: “Sia”, “lastName”: “Furler”, “gender”: “Female”, “dateOfBirth”: “18-12-1975”, “address”: “Australia”, “salary”: “10000000”, “officeLocation”: “C7.301”, “staffMemberType”: “Head of Department”, “memberId”: “AC1”, “createdAt” : “2020-12-20T18:42:46.786Z”, “updatedAt”: “2020-12-22T01:55:27.753Z”, “__v”: 2}]}}
88.	Functionality: View staff’s profile in their department (Course Instructor)
Route: localhost:3000/acAccount/instructorViewDepartmentStaff
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: N/A
Output: {“arr”: [{“daysOff” : [“Saturday”], “_id” : “…<id>…”, “email”: “river@guc.edu.eg”, “password”: “$2a$10$7HKKcAsuCJUGshHOO9QkvOAE058/COCww5.XJXgMUCmFRxpuC37.q”, “firstName”: “River”, “lastName”: “Love”, “gender”: “Female”, “dateOfBirth” : “1-1-2000”, “address”: “Cairo”, “salary”: 100000, “officeLocation”: “C4.04”, “staffMemberType”: “HR Member”, “memberId”: “HR1”, “createdAt”: “…<timestamp>…”, “updatedAt”: “…<timestamp>…”, “__v” : 0}, {“daysOff” : null , “_id” : “…<id>…”, “email”: “nile@guc.edu.eg”, “password”: “$2a$10$7HKKcAsuCJUGshHOO9QkvOAE058/COCww5.XJXgMUCmFRxpuC37.q”, “firstName”: “Alive”, “lastName”: “Smith”, “gender”: “Male”, “dateOfBirth” : “1-1-2000”, “address”: “Cairo”, “salary”: 100, “officeLocation”: “C4.05”, “staffMemberType”: “HR Member”, “memberId”: “HR2”, “createdAt”: “…<timestamp>…”, “updatedAt”: “…<timestamp>…”, “__v” : 0}]}
Output type/format: JSON
Example Output: N/A
89.	Functionality: Assigning course coordinator (Course Instructor)
Route: localhost:3000/acAccount/assignCourseCoordinator
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: { “Body”: {“memberId”: “AC15”, “courseId”: “DMET501”}}
Output: {“statucCode”: 0, “message”: “This Member is now a course coordinator for this course”}
Output type/format: JSON
Example Output: N/A
90.	Functionality: Assign unassigned slots to Academic member (Course Instructor)
Route: localhost:3000/acAccount/assignAcMemberToUnassignedSlot
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: { “Body” : {“memberId”: “AC10”, “slotID”: “Mo3c3201”, “courseId”: “DMET501”}}
Output: {“error”: “Slot Not Assigned To Your Course”}
Output type/format: JSON
Example Output: N/A
91.	Functionality: Assign unassigned slots to Academic member (Course Instructor)
Route: localhost:3000/acAccount/assignAcMemberToUnassignedSlot
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Body”: {“memberId”: “AC10”, “slotID”: “Mo3c3301”, “courseId”: “DMET501”}}
Output: {“statusCode”: 0, “message”: “Slot Assigned to this Member”}
Output type/format: JSON
Example Output: N/A
92.	Functionality: Delete Course Assignment (instructor)
Route: localhost:3000/acAccount/instructorDeleteCourseAssignment
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Body”: {“taID”: “AC3”, “courseID”: “CSEN404”}}
Output: {“statusCode”: “9991”, “message”: “This Course is not taught by this Assistant”}
Output type/format: JSON
Example Output: N/A
93.	Functionality: Delete Course Assignment (instructor)
Route: localhost:3000/acAccount/instructorDeleteCourseAssignment
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: {“Body”: {“taID”: “AC3”, “courseID”: “CSEN404”}}
Output: {“statusCode”: 0 , “message”: “Deletion is completed”}
Output type/format: JSON
Example Output: N/A
94.	Functionality: Update course Assignment (instructor)
Route: localhost:3000/acAccount/instructorUpdateCourseAssignment
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body:{“Body”:{“taID1”: “AC1”, “taID1”: “AC2”, “taID1”: “AC3”, “courseID”: “CSEN404”}}
Output: {“statusCode”:0, “error”: “update is completed”}
Output type/format: JSON
Example Output: N/A
95.	Functionality: Update course Assignment (instructor)
Route: localhost:3000/acAccount/instructorUpdateCourseAssignment
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body:{“Body”:{“taID1”: “77777777”, “taID1”: “AC2”, “taID1”: “AC3”, “courseID”: “CSEN404”}}
Output: {“statusCode”:906, “message”: “Account not foundfirst TA”}
Output type/format: JSON
Example Output: N/A
96.	Functionality: Update course Assignment (instructor)
Route: localhost:3000/acAccount/instructorUpdateCourseAssignment
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body:{“Body”:{“taID1”: “AC1”, “taID1”: “588888”, “taID1”: “AC3”, “courseID”: “CSEN404”}}
Output: {“statusCode”:906, “message”: “Account not foundSecond TA”}
Output type/format: JSON
Example Output: N/A
97.	Functionality: Update course Assignment (instructor)
Route: localhost:3000/acAccount/instructorUpdateCourseAssignment
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body:{“Body”:{“taID1”: “AC1”, “taID1”: “AC2”, “taID1”: “AC3”, “courseID”: “DMET404”}}
Output: {“statusCode”:9990, “message”: “This course does not belong to this instructor”}
Output type/format: JSON
Example Output: N/A
98.	Functionality: Update course Assignment (instructor)
Route: localhost:3000/acAccount/instructorUpdateCourseAssignment
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body:{“Body”:{“taID1”: “AC1”, “taID1”: “AC2”, “taID1”: “AC3”, “courseID”: “CSEN404”}}
Output: {“statusCode”:9991, “message”: “This course is not taught by the first Assistant”}
Output type/format: JSON
Example Output: N/A
99.	Functionality: Delete Assignment of Academic member (Course Instructor) 
Route: localhost:3000/acAccount/deleteAssignmentOFAcMember
Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: N/A
Output: {“statusCode”:0, “message”: “Done”}
Output type/format: JSON
Example Output: N/A
100.	Functionality: View Slot Assignment (Course Instructor) 
Route: localhost:3000/acAccount/viewSlotAssignments
 Request Type: POST
Parameters: N/A
Example on how to call route: N/A
Request Body: N/A
Output: {“statusCode”:0, “message”: “These are akk skots assigned to your course”, “result”: [[“Graphics DMET501”, [“[22]”, “[4]”]]]}
Output type/format: JSON
Example Output: N/A
