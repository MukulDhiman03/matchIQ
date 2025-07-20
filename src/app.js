const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  // instance of user model
  const user = new User({
    firstName: "Virat",
    lastName: "Kohli",
    emailId: "Viratkohli@gmail.com",
    password: "password@1234",
  });

  try {
    await user.save();
    res.send("Added to database");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connected");
    app.listen(3000, () => {
      console.log("Listening");
    });
  })
  .catch((err) => console.log(err));
