//Requires

const jwt_decode = require("jwt-decode");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
//Models Requires
const staffModel = require("../../models/staff_model");
const attendanceLogModel = require("../../models/attendanceLog_model");
const deletedTokens_model = require("../../models/deletedTokens_model");


//const verifyToken = require("../authentication/")
const accountType = require("../constants/enums");

//statusCode imports
const {
  successCode,
  accountDoesntExist,
  signinSuccessfully,
  wrongCredentials,
  accountNotFound,
  breach,
  emailEditedSuccessfully,
  passwordChangedSuccessfully,
  oldPasswordIsWrong,
  newPasswordNotLikeOld,
  emailDoesntExist,
  unknown,
  onlyHr,
  cantChangeName,
  //emailAlreadyExists,
  //signupSuccessfully
} = require("../constants/statusCodesEnum");

// const months = require('../constants/enums')

//key imports
const { secretOrKey, salt } = require("../../config/keys");

async function authenticateM2(req, res, next) {
  //console.log(req)
  const verified = req.headers.authtoken;
  console.log("authtoken inside the authenticate method" + verified);
  //console.log("HEREEEE");
  if (!verified) {
    return res.status(403).send("NO TOKEN");
  }
  try {
    const token = req.headers.authtoken;
    console.log(token);
    const DecodeToken = jwt_decode(token);
    const id = DecodeToken.id;
    console.log(id);
    const deletedtoken = await DeletedToken.findOne({ token: token });
    if (deletedtoken) {
      console.log("BEEEB");
      res.send("Logged out .");
    } else {
      console.log("BEEEB3333");
      jwt.verify(verified, key);
      next(); //authenticated
    }
  } catch (err) {
    res.status(403).send("OTHER ERROR");
  }
}

//Log In
const logIn = async (req, res) => {
  try {
    // const Account = req.body.Account;
    const { email, password } = req.body;

    const accountFound = await staffModel.findOne({
      email: email.toString().toLowerCase(),
    });
    if (!accountFound) {
      return res.json({
        statusCode: accountDoesntExist.statusCode,
        error: accountDoesntExist.message,
      });
    }
    console.log(password);
    console.log(accountFound.password);

    const match = bcrypt.compareSync(password, accountFound.password);

    // const match =bcrypt.compare(Account.password, accountFound.password)
    console.log(match);

    if (!match) {
      return res.json({
        statusCode: wrongCredentials.statusCode,
        error: wrongCredentials.message,
      });
    }
   
    const payLoad = {
      id: accountFound._id,
      firstName: accountFound.firstName,
      lastName: accountFound.lastName,
      gender: accountFound.gender,
      email: accountFound.email,
      birth_date: accountFound.birth_date,
      address: accountFound.address,
      salary: accountFound.salary,
      days_off: accountFound.days_off,
      office_location: accountFound.office_location,
      attendance_log: accountFound.attendance_log,
      leave_log: accountFound.leave_log,
      tokenrole: accountFound.role,
    };

    const token = jwt.sign(payLoad, secretOrKey, {
      expiresIn: "730.001h",
    });

    const tokenId = jwt.sign(accountFound.memberId , secretOrKey);

console.log(tokenId)
    
    res.header("authtoken", token);
    res.setHeader("authtoken", token);

    res.header("tokenID", tokenId);
    res.setHeader("tokenID", tokenId);

    // res.header("tokenMemberType", tokenMemberType);
    // res.setHeader("tokenMemberType", tokenMemberType);
    // tokenrole = accountNotFound.role;
    console.log(res.header.authtoken);
    return res.json({
      email: accountFound.email,
      id: accountFound._id,
      statusCode: signinSuccessfully.statusCode,
      message: signinSuccessfully.message,
      token,tokenId
    });
  } catch (exception) {
    console.log(exception);
    return res.json({
      statusCode: unknown,
      error: "Could Not Login",
    });
  }
};

//Log Out

const logout = async (req, res) => {
  // account_controller.use(authenticateM2);


  try {
//authenticate that this is a valid member
        //authorize that this is a Hr member

        jwt.verify(req.headers.authtoken,secretOrKey);
        console.log(jwt_decode(req.headers.authtoken).id)
        const val = await staffModel.findById(jwt_decode(req.headers.authtoken).id)
 
       const id = val.memberId
       console.log(id)
         const check = await staffModel.findOne({memberId: id})
         if(!check){
           return res.send("not authorized");
         }

         const tok = new deletedTokens_model({token: req.headers.authtoken})
         await tok.save();

         return res.json({
          statusCode: successCode,
          error: "Logged Out",
        });
         

  } catch (exception) {
    console.log(exception);
    return res.json({
      statusCode: unknown,
      error: "Could Not Logout",
    });
  }
};

//View Profile

const viewProfile = async (req, res) => {
  account_controller.use(authenticateM2);
  try {

 ///authenticate that this is a valid member
        //authorize that this is a Hr member

        jwt.verify(req.headers.authtoken,secretOrKey);
        console.log(jwt_decode(req.headers.authtoken).id)
        const val = await staffModel.findById(jwt_decode(req.headers.authtoken).id)
 
       const id = val.memberId
       console.log(id)
         const check = await staffModel.findOne({memberId: id})
         if(!check){
           return res.send("not authorized");
         }
 
    
    const Account = req.body;

    const myID = id;

    const accountFound = await staffModel.findOne({ memberId: myID });

    if (!accountFound) {
      res.json({
        statusCode: accountNotFound.statusCode,
        error: accountNotFound.message,
      });
    }
    return res.json({
      statusCode: successCode,
      firstName: accountFound.firstName,
      lastName: accountFound.lastName,
      email: accountFound.email,
      gender: accountFound.gender,
      memberId: accountFound.memberId,
      birthDate: accountFound.birthDate,
      address: accountFound.address,
      salary: accountFound.salary,
      days_off: accountFound.days_off,
      office_location: accountFound.office_location,
      notifications: accountFound.notifications,
      requestLog: accountFound.requestLog,
    });
  } catch (e) {
    return res.json({
      statusCode: unknown,
      error: "Could not view account info",
    });
  }
};

//Update Profile

const updateProfile = async (req, res) => {
  // account_controller.use(authenticateM2);

  try {

  //authenticate that this is a valid member
        //authorize that this is a Hr member

        jwt.verify(req.headers.authtoken,secretOrKey);
        console.log(jwt_decode(req.headers.authtoken).id)
        const val = await staffModel.findById(jwt_decode(req.headers.authtoken).id)
 
       const id = val.memberId
       console.log(id)
         const check = await staffModel.findOne({memberId: id})
         if(!check){
           return res.send("not authorized");
         }
        
    const accountFound = await staffModel.findOne(
      { memberId:id},
    );

 
    if (!accountFound) {
      return res.json({
        statusCode: accountNotFound.statusCode,
        error: accountNotFound.message,
      });
    }


    if (accountFound.staffMemberType != "HR Member") {
      console.log(accountFound.staffMemberType);
      if (req.body.salary != null) {
        return res.json({
          statusCode: onlyHr.statusCode,
          error: onlyHr.message,
        });
      }
console.log(req.body)
      await staffModel.findOneAndUpdate(
        { memberId: id},
        {
          address: req.body.address,
          birthDate: req.body.birthDate,
          gender: req.body.gender,
        }
      );
      console.log("DODODO")
      console.log(val)

    } else {
      await staffModel.findOneAndUpdate(
        { memberId: id },
        {
          address: req.body.address,
          birthDate: req.body.birthDate,
          salary: req.body.salary,
          gender: req.body.gender,
        }
      );
    }
    return res.json({
      statusCode: successCode,
      message: "Account info updated successfully",
    });
  } catch (e) {
    return res.json({
      statusCode: unknown,
      error: "Could not edit account info",
    });
  }
};

//Reset Password

const resetPassword = async (req, res) => {
  try {

//authenticate that this is a valid member
    //authorize that this is a Hr member

    jwt.verify(req.headers.authtoken, secretOrKey);
    // console.log(jwt_decode(req.headers.authtoken).id);
    const val = await staffModel.findById(jwt_decode(req.headers.authtoken).id);

    const id = val.memberId;
    const check = await staffModel.findOne({ memberId: id });

    if (!check) {
      return res.send("not authorized");
    }
    

    const Account = req.body;

console.log("Heree")
    if (Account.newPassword === "123456") {
      return res.json({
        statusCode: newPasswordNotLikeOld.statusCode,
        error: newPasswordNotLikeOld.message,
      });
    }

    const saltKey1 = bcrypt.genSaltSync(salt);
    const hashed_pass1 = bcrypt.hashSync(Account.oldPassword, saltKey1);
    console.log("HERE")
    console.log(Account.oldPassword)
    console.log(hashed_pass1)
    console.log(val.password)

  

    if(!(bcrypt.compareSync(hashed_pass1, val.password))){
      return res.json({
        statusCode: 1010,
        error: "Old Password Is Wrong",
      });
    }


    const saltKey = bcrypt.genSaltSync(salt);
    const hashed_pass = bcrypt.hashSync(Account.newPassword, saltKey);
    await staffModel.findOneAndUpdate({ memberId: id},{password: hashed_pass});
    console.log("HEREE")

    return res.json({
      statusCode: passwordChangedSuccessfully.statusCode,
      message: passwordChangedSuccessfully.message,
    });
  } catch (e) {
    console.log(e);
    return res.json({
      statusCode: unknown,
      error: "Could not change password",
    });
  }
};

//SignIn To Campus

const signInToCampus = async (req, res) => {
  try {

//authorize
//authenticate that this is a valid member
        //authorize that this is a Hr member

        jwt.verify(req.headers.authtoken,secretOrKey);
        console.log(jwt_decode(req.headers.authtoken).id)
        const val = await staffModel.findById(jwt_decode(req.headers.authtoken).id)
 
       const id = val.memberId
       console.log(id)
         const check = await staffModel.findOne({memberId: id})
         if(!check){
           return res.send("not authorized");
         }

    const myID = id;
    const member = await staffModel.findOne({ memberId: myID });
    if (!member) {
      return res.json({
        statusCode: accountNotFound.statusCode,
        error: accountNotFound.message,
      });
    }
    const memberAttendanceLog = await attendanceLogModel.findOne({
      memberId: myID,
    });
    if (!memberAttendanceLog) {
      return res.json({
        statusCode: accountNotFound.statusCode,
        error: accountNotFound.message,
      });
    }

    const date = new Date();

    var day = date.getDate() + "";
    if (day.length == 1) {
      day = "0" + day;
    }
    var month = date.getMonth() + "";
    if (month.length == 1) {
      month = "0" + month;
    }
    var year = date.getFullYear() + "";

    var hours = date.getHours() + "";
    if (hours.length == 1) {
      hours = "0" + hours;
    }
    var minutes = date.getMinutes() + "";
    if (minutes.length == 1) {
      minutes = "0" + minutes;
    }
    var seconds = date.getSeconds() + "";
    if (seconds.length == 1) {
      seconds = "0" + seconds;
    }

    if (memberAttendanceLog.signOut != "-") {
      var signOutDay = memberAttendanceLog.signOut.substr(0, 2);
      var signOutMonth = memberAttendanceLog.signOut.substr(3, 2);
      var signOutYear = memberAttendanceLog.signOut.substr(6, 4);
      var signOutHours = memberAttendanceLog.signOut.substr(12, 2);
      var signOutMins = memberAttendanceLog.signOut.substr(15, 2);
      var signOutSecs = memberAttendanceLog.signOut.substr(18, 2);

      if (!memberAttendanceLog.attendedDays.includes(day)) {
        memberAttendanceLog.attendedDays.push(day);
      }
      //Case Multiple Sign In In The Same Day
      if (day == signOutDay && month == signOutMonth && year == signOutYear) {
        //To be changed To 7
        if (parseInt(hours) > 2 && parseInt(hours) < 19) {
          memberAttendanceLog.signOut = "-";
          memberAttendanceLog.signIn =
            day +
            "-" +
            month +
            "-" +
            year +
            "--" +
            hours +
            ":" +
            minutes +
            ":" +
            seconds;
          memberAttendanceLog.log.push(
            "Signed In: " + memberAttendanceLog.signIn
          );
          await attendanceLogModel.findOneAndUpdate(
            { memberId: myID },
            {
              signIn: memberAttendanceLog.signIn,
              signOut: memberAttendanceLog.signOut,
              log: memberAttendanceLog.log,
            }
          );

          return res.json({
            statusCode: successCode,
            message: "You Are Signed In Successfully",
          });
        }
      }
      //Case New Day
      else {
        if (parseInt(hours) > 7 && parseInt(hours) < 19) {
          memberAttendanceLog.missingMinutesPerMonth +=
            memberAttendanceLog.missingMinutesPerDay;
          memberAttendanceLog.missingMinutesPerDay = 0;
          memberAttendanceLog.requiredMinutesPerDay = 490.4;
          memberAttendanceLog.signOut = "-";
          memberAttendanceLog.signIn =
            day +
            "-" +
            month +
            "-" +
            year +
            "--" +
            hours +
            ":" +
            minutes +
            ":" +
            seconds;
          memberAttendanceLog.log.push(
            "Signed In: " + memberAttendanceLog.signIn
          );
          await attendanceLogModel.findOneAndUpdate(
            { memberId: myID },
            {
              signIn: memberAttendanceLog.signIn,
              signOut: memberAttendanceLog.signOut,
              log: memberAttendanceLog.log,
              missingMinutesPerMonth:
                memberAttendanceLog.missingMinutesPerMonth,
              missingMinutesPerDay: memberAttendanceLog.missingMinutesPerDay,
            }
          );

          return res.json({
            statusCode: successCode,
            message: "You Are Signed In Successfully",
          });
        }
      }
    }
    //Case First Sign In
    else if (
      memberAttendanceLog.signIn == "-" &&
      memberAttendanceLog.signOut == "-"
    ) {
      memberAttendanceLog.attendedDays.push(day);
      memberAttendanceLog.signIn =
        day +
        "-" +
        month +
        "-" +
        year +
        "--" +
        hours +
        ":" +
        minutes +
        ":" +
        seconds;
      memberAttendanceLog.log.push("Signed In: " + memberAttendanceLog.signIn);
      await attendanceLogModel.findOneAndUpdate(
        { memberId: myID },
        {
          attendedDays: memberAttendanceLog.attendedDays,
          signIn: memberAttendanceLog.signIn,
          log: memberAttendanceLog.log,
        }
      );

      return res.json({
        statusCode: successCode,
        message: "You Are Signed In Successfully",
      });
    } else {
      memberAttendanceLog.signIn = "-";
      memberAttendanceLog.signOut = "---";
      return res.json({
        statusCode: unknown,
        message: "You Did Not Sign Out Last Time, Check With An Hr Member",
      });
    }
  } catch (e) {
    return res.json({
      statusCode: unknown,
      error: "Could Not Sign In To Campus",
    });
  }
};
//SignOut From Campus

const signOutFromCampus = async (req, res) => {
  try {

    //authenticate that this is a valid member
        //authorize that this is a Hr member

        jwt.verify(req.headers.authtoken,secretOrKey);
        console.log(jwt_decode(req.headers.authtoken).id)
        const val = await staffModel.findById(jwt_decode(req.headers.authtoken).id)
 
       const id = val.memberId
       console.log(id)
         const check = await staffModel.findOne({memberId: id})
         if(!check){
           return res.send("not authorized");
         }

    const myID = id;
    const member = await staffModel.findOne({ memberId: myID });
    if (!member) {
      return res.json({
        statusCode: accountNotFound.statusCode,
        error: accountNotFound.message,
      });
    }
    const memberAttendanceLog = await attendanceLogModel.findOne({
      memberId: myID,
    });
    if (!memberAttendanceLog) {
      return res.json({
        statusCode: accountNotFound.statusCode,
        error: accountNotFound.message,
      });
    }

    const date = new Date();

    var day = date.getDate() + "";
    if (day.length == 1) {
      day = "0" + day;
    }
    var month = date.getMonth() + "";
    if (month.length == 1) {
      month = "0" + month;
    }
    var year = date.getFullYear() + "";

    var hours = date.getHours() + "";
    if (hours.length == 1) {
      hours = "0" + hours;
    }
    var minutes = date.getMinutes() + "";
    if (minutes.length == 1) {
      minutes = "0" + minutes;
    }
    var seconds = date.getSeconds() + "";
    if (seconds.length == 1) {
      seconds = "0" + seconds;
    }

    if (memberAttendanceLog.signIn != null) {
      var signInDay = memberAttendanceLog.signIn.substr(0, 2);
      var signInMonth = memberAttendanceLog.signIn.substr(3, 2);
      var signInYear = memberAttendanceLog.signIn.substr(6, 4);
      var signInHours = memberAttendanceLog.signIn.substr(12, 2);
      var signInMins = memberAttendanceLog.signIn.substr(15, 2);
      var signInSecs = memberAttendanceLog.signIn.substr(18, 2);

      //2 To Be Changed
      if (
        day == signInDay &&
        month == signInMonth &&
        hours >= 2 &&
        hours <= 19
      ) {
        var minutesSpent = parseInt(
          (parseInt(hours) - parseInt(signInHours)) / 60 +
            (parseInt(minutes) - parseInt(signInMins))
        );

        memberAttendanceLog.minutesAttendedPerMonth += minutesSpent;
        memberAttendanceLog.missingMinutesPerDay =
          memberAttendanceLog.requiredMinutesPerDay - minutesSpent;
        memberAttendanceLog.signIn = "-";
        memberAttendanceLog.signOut =
          day +
          "-" +
          month +
          "-" +
          year +
          "--" +
          hours +
          ":" +
          minutes +
          ":" +
          seconds;
        memberAttendanceLog.log.push(
          "SignedOut: " + memberAttendanceLog.signOut
        );

        if (memberAttendanceLog.missingMinutesPerDay < 0) {
          memberAttendanceLog.extraMinutes +=
            -1 * memberAttendanceLog.missingMinutesPerDay;
        } else if (memberAttendanceLog.missingMinutesPerDay > 0) {
          memberAttendanceLog.missingMinutesPerMonth +=
            memberAttendanceLog.missingMinutesPerDay;
        }

        await attendanceLogModel.findOneAndUpdate(
          { memberId: myID },
          {
            minutesAttendedPerMonth:
              memberAttendanceLog.minutesAttendedPerMonth,
            missingMinutesPerDay: memberAttendanceLog.missingMinutesPerDay,
            signIn: memberAttendanceLog.signIn,
            signOut: memberAttendanceLog.signOut,
            log: memberAttendanceLog.log,
          }
        );
      }
    } else {
      return res.json({
        statusCode: unknown,
        error:
          "You Need To Sign In In Order To Sign Out Or Contact An Hr Member",
      });
    }

    return res.json({
      statusCode: successCode,
      message: "You Are Signed Out Successfully",
    });
  } catch (e) {
    return res.json({
      statusCode: unknown,
      error: "Could Not Sign In Out From Campus",
    });
  }
};

const viewMissingOrExtraHours = async (req, res) => {
  try {

    //authenticate that this is a valid member
        //authorize that this is a Hr member

        jwt.verify(req.headers.authtoken,secretOrKey);
        console.log(jwt_decode(req.headers.authtoken).id)
        const val = await staffModel.findById(jwt_decode(req.headers.authtoken).id)
 
       const id = val.memberId
       console.log(id)
         const check = await staffModel.findOne({memberId: id})
         if(!check){
           return res.send("not authorized");
         }

    const myID = id;
    const member = await attendanceLogModel.findOne({ memberId: myID });

    const missing = "Your Missing Hours: " + member.missingMinutesPerMonth;
    const extra = "Your Extra Hours: " + member.extraMinutes;

    return res.json({
      statusCode: successCode.statusCode,
      missing,
      extra,
    });
  } catch (e) {
    return res.json({
      statusCode: unknown,
      error: "Could Not View Missing/Extra Hours",
    });
  }
};

module.exports = {
  logIn,
  viewProfile,
  updateProfile,
  resetPassword,
  signInToCampus,
  signOutFromCampus,
  viewMissingOrExtraHours,
  logout,
  authenticateM2,
};
