const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("Hello from home page!");
});
app.use("/test", (req, res) => {
  res.send("Hello from server!");
});
app.use("/hello", (req, res) => {
  res.send("Hello from hello!");
});

app.listen(3000, () => {
  console.log("Listening");
});
