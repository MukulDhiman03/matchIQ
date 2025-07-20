const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      validate(value) {
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("Gender Data Not Valid");
        }
      },
    },
    photoUrl: {
      type: String,
      default:
        "data:image/jpeg;base64,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",
    },
    about: {
      type: String,
      default: "This is default about of user",
    },
    skills: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
