const express = require("express");
const app = express();

app.get("/user/:userId", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Mukul", lastName: "Dhiman" });
});
app.get("/user", (req, res) => {
  console.log(req.query);
  res.send({ firstName: "Mukul", lastName: "Dhiman" });
});

app.listen(3000, () => {
  console.log("Listening");
});
