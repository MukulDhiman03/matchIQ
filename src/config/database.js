const mongoose = require("mongoose");

async function connectDB() {
  console.log(process.env.DB_CONNECTION_SECRET);
  await mongoose.connect(process.env.DB_CONNECTION_SECRET);
}
module.exports = connectDB;
