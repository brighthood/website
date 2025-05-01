const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    minLength: [3, "name must be at least 4 character"],
  },
  email: {
    type: String,
    required: [true, "please provide an email"],
    validate: [
      { validator: validator.isEmail, message: "please provide valid email" },
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please provide a password"],
    select: false,
    minLength: 8,
  },
  confirmPassword: {
    type: String,
    required: [true, "please confirm password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "passwords are not the same ",
    },
  },
  role: {
    type: String,
    enum: {
      values: ["user", "admin"],
      message: "role either be  user or an admin",
    },
    default: "user",
  },
  school: {
    type: String,
  },
  phonenumber: {
    type: Number,
    required: [true, "please provide phone number"],
    min: [13, "phone number is too short"],
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
});

UserSchema.methods.comparePassword = async function (candidate, credental) {
  return await bcrypt.compare(candidate, credental);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
