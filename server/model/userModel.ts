import mongoose, { Schema, Document } from "mongoose";
import validator from "validator";

interface IUser extends Document {
  Name: string;
  Email: string;
  role: "user" | "admin";
  School?: string;
  Phone: number;
  userId: string;
}

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
    min: [13, "Phone number is too short"],
  },
  userId: {
    type: String,
    required: [true, "user_id is required "],
    unique: true,
  },
});

const User = mongoose.model<IUser>("User", UserSchema);
export default User;
