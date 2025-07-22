const express = require("express");
const User = require("../models/user");
const { userAuth } = require("../middlewares/auth");

const requestRouter = express.Router();

requestRouter.post("/sendConnectionRequest", userAuth, async (req, res) => {
  try {
    res.send(req.user);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

module.exports = requestRouter;
