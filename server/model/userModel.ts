import mongoose, { Schema, Document } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

// TypeScript interface for User Document
interface IUser extends Document {
  Name: string;
  Email: string;
  Password: string;
  confirmPassword?: string;
  role: "user" | "admin";
  School?: string;
  Phone: number;
  comparePassword(
    candidatePassword: string,
    userPassword: string
  ): Promise<boolean>;
}

// Define the User Schema
const UserSchema: Schema<IUser> = new Schema<IUser>({
  Name: {
    type: String,
    required: true,
    minlength: [3, "name must be at least 3 characters"],
  },
  Email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (val: string) => validator.isEmail(val),
      message: "Please provide a valid email",
    },
  },
  Password: {
    type: String,
    required: true,
    minlength: [8, "Password must be at least 8 characters"],
    select: false,
  },
  confirmPassword: {
    type: String,
    required: true,
    validate: {
      validator: function (this: IUser, el: string) {
        return el === this.Password;
      },
      message: "Passwords do not match",
    },
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  School: {
    type: String,
  },
  Phone: {
    type: Number,
    required: true,
    min: [1000000000, "Phone number is too short"], // Assuming a minimum of 10 digits
  },
});

// Hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("Password")) return next();
  this.Password = await bcrypt.hash(this.Password, 12);
  this.confirmPassword = undefined;
  next();
});

// Instance method for comparing passwords
UserSchema.methods.comparePassword = async function (
  candidatePassword: string,
  userPassword: string
): Promise<boolean> {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model<IUser>("User", UserSchema);
export default User;
