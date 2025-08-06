const express = require("express");
const User = require("../models/user");
const { userAuth } = require("../middlewares/auth");
const { validateEditProfileData } = require("../utils/validation");

const profileRouter = express.Router();

profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    res.send(req.user);
  } catch (err) {
    res.status(404).send(err.message);
  }
});
profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  // console.log("Here i am");
  try {
    if (!validateEditProfileData(req)) {
      throw new Error("Invalid Edit Request");
    }
    const loggedInUser = req.user;
    // console.log("loggedInUser", loggedInUser);
    Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));

    await loggedInUser.save();
    res.json({
      message: `${loggedInUser.firstName} your profile updated successfully`,
      data: loggedInUser,
    });
  } catch (err) {
    res.status(404).send(err.message);
  }
});

module.exports = profileRouter;
