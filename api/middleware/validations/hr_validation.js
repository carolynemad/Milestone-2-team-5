const Joi = require("joi");
const PasswordComplexity = require("joi-password-complexity");
const { validationError } = require("../../constants/statusCodesEnum");
const { accountType, gender } = require("../../constants/enums");

const validateUpdateFaculty = (req, res, next) => {
  const schema = Joi.object({
    facultyName: Joi.string().min(3).required(),
    departments: Joi.array().required(),
    facultyHead: Joi.string().min(3).required(),
  });
  const isValid = Joi.validate(req.body, schema);
  if (isValid.error) {
    return res.json({
      statusCode: validationError,
      error: isValid.error.details[0].message,
    });
  }
  return next();
};

const validateAddFaculty = (req, res, next) => {
  const schema = {
    Faculty: Joi.object({
      facultyName: Joi.string().required(),
      departments: Joi.array().required(),
    }),
  };
  const isValid = Joi.validate(req.body, schema);
  if (isValid.error) {
    let errorMsg = isValid.error.details[0].message;
    return res.json({
      statusCode: validationError,
      error: isValid.error.details[0].message,
    });
  }
  return next();
};

const validateDeleteFaculty = (req, res, next) => {
  const schema = {
    facultyName: Joi.string().required(),
  };
  const isValid = Joi.validate(req.body, schema);
  if (isValid.error) {
    let errorMsg = isValid.error.details[0].message;
    return res.json({
      statusCode: validationError,
      error: isValid.error.details[0].message,
    });
  }
  return next();
};

const validateUpdateDepartment = (req, res, next) => {
  const schema = Joi.object({
    departmentName: Joi.string().min(3).required(),
    courses: Joi.array(),
    departmentHead: Joi.string().min(3),
    staff: Joi.array(),
  });
  const isValid = Joi.validate(req.body, schema);
  if (isValid.error) {
    return res.json({
      statusCode: validationError,
      error: isValid.error.details[0].message,
    });
  }
  return next();
};

const validateDeleteDepartment = (req, res, next) => {
  const schema = Joi.object({
    departmentName: Joi.string().min(3).required(),
    courses: Joi.array(),
    departmentHead: Joi.string().min(3),
    staff: Joi.array(),
  });
  const isValid = Joi.validate(req.body, schema);
  if (isValid.error) {
    return res.json({
      statusCode: validationError,
      error: isValid.error.details[0].message,
    });
  }
  return next();
};

const validateAddDepartment = (req, res, next) => {
  const schema = {
    departmentName: Joi.string().required(),
    departmentHead: Joi.string().min(3).required(),
    courses: Joi.array().required(),
    staff: Joi.array(),
  };
  const isValid = Joi.validate(req.body, schema);
  if (isValid.error) {
    let errorMsg = isValid.error.details[0].message;
    return res.json({
      statusCode: validationError,
      error: isValid.error.details[0].message,
    });
  }
  return next();
};

const validateAddNewMember = (req, res, next) => {
  const schema = {
    email: Joi.string().email().required(),
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    gender: Joi.string()
      .valid([gender.MALE, gender.FEMALE, "Other"])
      .required(),
    birthDate: Joi.date().required(),
    address: Joi.string().min(3).required(),
    salary: Joi.string(),
    officeLocation: Joi.string().min(3).required(),
    // staffMemberType: Joi.string().valid(["HR Member","Head Of Department","Course Instructor","Course Coordinator"]).required(),
    memberType: Joi.string().valid(["HR", "Academic"]).required(),
  };
  const isValid = Joi.validate(req.body, schema);
  if (isValid.error) {
    let errorMsg = isValid.error.details[0].message;
    return res.json({
      statusCode: validationError,
      error: isValid.error.details[0].message,
    });
  }
  return next();
};

const validateUpdateExistingMember = (req, res, next) => {
  const schema = Joi.object({
    // email: Joi.string().email().required(),
    memberId: Joi.string().min(3),
    gender: Joi.string().valid([gender.MALE, gender.FEMALE]),
    birthDate: Joi.date(),
    address: Joi.string().min(3),
    salary: Joi,
    officeLocation: Joi.string().min(3),
    staffMemberType: Joi.string().valid([
      "HR Member",
      "Head Of Department",
      "Course Instructor",
      "Course Coordinator",
    ]),
    daysOff: Joi.string().valid([
      "Staurday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ]),
  });
  const isValid = Joi.validate(req.body, schema);
  if (isValid.error) {
    return res.json({
      statusCode: validationError,
      error: isValid.error.details[0].message,
    });
  }
  return next();
};

const validateRemoveExistingMember = (req, res, next) => {
  const schema = Joi.object({
    memberId: Joi.string().required(),
  });
  const isValid = Joi.validate(req.body, schema);
  if (isValid.error) {
    return res.json({
      statusCode: validationError,
      error: isValid.error.details[0].message,
    });
  }
  return next();
};

const validateAddLocation = (req, res, next) => {
  const schema = {
    locationName: Joi.string().required(),
    locationType: Joi.string()
      .valid("lecture", "lab", "tutorial", "TAoffice", "DRoffice", "Exam Hall")
      .required(),
    capacity: Joi.number().required(),
  };
  const isValid = Joi.validate(req.body, schema);
  if (isValid.error) {
    let errorMsg = isValid.error.details[0].message;
    return res.json({
      statusCode: validationError,
      error: isValid.error.details[0].message,
    });
  }
  return next();
};

const validateRemoveLocation = (req, res, next) => {
  const schema = {
    locationName: Joi.string().required(),
  };
  const isValid = Joi.validate(req.body, schema);
  if (isValid.error) {
    let errorMsg = isValid.error.details[0].message;
    return res.json({
      statusCode: validationError,
      error: isValid.error.details[0].message,
    });
  }
  return next();
};

const validateUpdateLocation = (req, res, next) => {
  const schema = {
    locationName: Joi.string().required(),
    capacity: Joi.number().required(),
    locationType: Joi.string()
      .valid([
        "lecture",
        "lab",
        "tutorial",
        "TAoffice",
        "DRoffice",
        "Exam Hall",
      ])
      .required(),
    // capacity: Joi.number().required,
  };
  const isValid = Joi.validate(req.body, schema);
  if (isValid.error) {
    let errorMsg = isValid.error.details[0].message;
    return res.json({
      statusCode: validationError,
      error: isValid.error.details[0].message,
    });
  }
  return next();
};

const validateViewAttendanceLog = (req, res, next) => {
  const schema = {
    memberId: Joi.string().required()
  };
  const isValid = Joi.validate(req.body, schema);
  if (isValid.error) {
    return res.json({
      statusCode: validationError,
      error: isValid.error.details[0].message,
    });
  }
  return next();
};

const validateAddCourse = (req, res, next) => {
  const schema = {
    Body: Joi.object({
      departmentName: Joi.string().required(),
      courseName: Joi.string().required(),
      courseId: Joi.string().required(),
    }),
  };
  const isValid = Joi.validate(req.body, schema);
  if (isValid.error) {
    let errorMsg = isValid.error.details[0].message;
    return res.json({
      statusCode: validationError,
      error: isValid.error.details[0].message,
    });
  }
  return next();
};

const validateDeleteCourse = (req, res, next) => {
  const schema = {
    courseId: Joi.string().required(),
  };
  const isValid = Joi.validate(req.body, schema);
  if (isValid.error) {
    let errorMsg = isValid.error.details[0].message;
    return res.json({
      statusCode: validationError,
      error: isValid.error.details[0].message,
    });
  }
  return next();
};

const validateUpdateCourse = (req, res, next) => {
  const schema = {
    courseId: Joi.string().required(),
    newCourseName: Joi.string(),
    courseNewId: Joi.string(),
    newDepartmentName: Joi.string(),
  };
  const isValid = Joi.validate(req.body, schema);
  if (isValid.error) {
    let errorMsg = isValid.error.details[0].message;
    return res.json({
      statusCode: validationError,
      error: isValid.error.details[0].message,
    });
  }
  return next();
};

module.exports = {
  validateUpdateFaculty,
  validateAddFaculty,
  validateUpdateDepartment,
  validateAddDepartment,
  validateDeleteDepartment,
  validateAddNewMember,
  validateUpdateExistingMember,
  validateRemoveExistingMember,
  validateAddLocation,
  validateRemoveLocation,
  validateUpdateLocation,
  validateDeleteFaculty,
  validateViewAttendanceLog,
  validateAddCourse,
  validateDeleteCourse,
  validateUpdateCourse,
};
