const express = require("express");
const router = express.Router();
const wrapAsync = require("../util/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controller/user.js");

router.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signup));

//login
router.route("/login")
.get(userController.renderLoginForm)
.post(saveRedirectUrl,passport.authenticate('local', { failureRedirect: '/login',failureFlash:true }),userController.login);

//logout
router.get("/logout",userController.logout);

module.exports = router;