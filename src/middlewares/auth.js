const User = require("../models/user");
const jwt = require("jsonwebtoken");

const userAuth = async (req, res, next) => {
  // read the token from request cookies
  try {
    const { token } = req.cookies;
    if (!token) {
      throw new Error("Invalid credentials!");
    }
    // vlaidate the token
    const decodedObj = await jwt.verify(token, "MATCHIQ@790");
    const { _id } = decodedObj;
    // find the user
    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User not found!");
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("Error" + err.message);
  }
};

module.exports = {
  userAuth,
};
