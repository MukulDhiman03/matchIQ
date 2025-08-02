const express = require("express");
const User = require("../models/user");
const { userAuth } = require("../middlewares/auth");
const connectionRequestModel = require("../models/connectionRequest");

const requestRouter = express.Router();

requestRouter.post(
  "/request/send/:status/:toUserId",
  userAuth,
  async (req, res) => {
    try {
      const fromUserId = req.user._id;
      const toUserId = req.params.toUserId;
      const status = req.params.status;
      // console.log(fromUserId);
      // console.log(toUserId);

      if (fromUserId.equals(toUserId)) {
        return res.status(400).json({
          message: "Cannot send connection request to yourself.",
        });
      }

      const allowedStatus = ["ignored", "interested"];
      if (!allowedStatus.includes(status)) {
        return res.status(400).json({
          message: "Invalid status type: " + status,
        });
      }

      const ifToUserExists = await User.findById(toUserId);

      if (!ifToUserExists) {
        return res.status(400).json({
          message: "User does not exists: ",
        });
      }

      //  if there is an existing connection request

      const existingCOnnectionRequest = await connectionRequestModel.findOne({
        $or: [
          { fromUserId: fromUserId, toUserId: toUserId },
          { fromUserId: toUserId },
        ],
      });

      if (existingCOnnectionRequest) {
        return res.status(400).json({
          message: "Request already sent.",
        });
      }

      const connectionRequest = new connectionRequestModel({
        fromUserId,
        toUserId,
        status,
      });

      const data = await connectionRequest.save();
      res.json({
        message:
          status === "interested"
            ? req.user.firstName +
              " is " +
              status +
              " in " +
              ifToUserExists.firstName
            : req.user.firstName +
              " " +
              status +
              " " +
              ifToUserExists.firstName,
        data,
      });
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
);
requestRouter.post(
  "/request/review/:status/:requestId",
  userAuth,
  async (req, res) => {
    try {
      const { status, requestId } = req.params;
      const loggedInUser = req.user;

      const allowedStatus = ["accepted", "rejected"];
      if (!allowedStatus.includes(status)) {
        return res.status(400).json({
          message: "Invalid status",
        });
      }

      const connectionRequest = await connectionRequestModel.findOne({
        _id: requestId,
        toUserId: loggedInUser._id,
        status: "interested",
      });

      if (!connectionRequest) {
        return res.status(404).json({
          message: "Connection request not found.",
        });
      }

      connectionRequest.status = status;

      const data = await connectionRequest.save();

      res.json({
        message: "Request accepted",
        data,
      });
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
);

module.exports = requestRouter;
