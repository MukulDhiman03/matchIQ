const express = require("express");
const app = express();

app.use(
  "/user",
  (req, res, next) => {
    // route handler
    console.log("Handling 1........");
    next();
  },
  (req, res) => {
    res.send("Hello");
    console.log("Handling 2........");
  }
);

app.listen(3000, () => {
  console.log("Listening");
});
