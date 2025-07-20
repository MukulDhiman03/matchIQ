const express = require("express");
const app = express();
const { adminAuth, userAuth } = require("./middlewares/auth");

// handle auth middleware for all request(GET,POST,PATCH.....)
app.use("/admin", adminAuth);

app.get("/user", userAuth, (req, res) => {
  res.send("User Data sent");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All Data sent");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Delete a user");
});

app.listen(3000, () => {
  console.log("Listening");
});
