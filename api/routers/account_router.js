const express = require("express");
const { verifyToken } = require("../authentication/verifyToken");
const router = express.Router();

//controllers
const {
  logIn,
  viewProfile,
  updateProfile,
  resetPassword,
  logout,
  changePassword,
  signInToCampus,
  signOutFromCampus,
  viewMissingOrExtraHours,
} = require("../controllers/account_controller");

//validations
const {
  validateLogIn,
  validateUpdateProfile,
  validateResetPassword,
  validateChangePassword,
} = require("../middleware/validations/account_validation");

//routings
router.post("/login", validateLogIn, logIn);
router.post("/logout", logout);

router.post("/viewProfile", viewProfile);
router.post("/updateProfile", validateUpdateProfile, updateProfile);
router.post("/resetPassword", validateResetPassword, resetPassword);

router.post("/signInToCampus", signInToCampus);
router.post("/signOutFromCampus", signOutFromCampus);

router.post("/viewMissingOrExtraHours", viewMissingOrExtraHours);

module.exports = router;
