const express = require("express");
const app = express();

// this will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
  res.send("Hello from server!");
});

app.use("/user", (req, res) => {
  res.send("HAHAHAHAH");
});

// this will only handle the GET call to /user
app.get("/user", (req, res) => {
  res.send({ firstName: "Mukul", lastName: "Dhiman" });
});

app.post("/user", (req, res) => {
  console.log("Saved data to database");
  res.send("Data saved to database");
});

app.delete("/user", (req, res) => {
  console.log("Deleted data to database");
  res.send("Data Deleted");
});

app.listen(3000, () => {
  console.log("Listening");
});
