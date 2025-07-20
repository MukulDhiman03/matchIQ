const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://mukuldhiman853:yeyblwI9plb7gQUl@namastenode.dilkaii.mongodb.net/matchQI"
  );
}
module.exports = connectDB;
