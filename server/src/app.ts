import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import userRoute from "./../routes/userRoute";
import authRoute from "../routes/authRoute";
import { globalErrorcontroller } from "./../controller/errorControllers";
import AppError from "./../utils/appError";
import cookieParser from "cookie-parser";
import { clerkMiddleware } from "@clerk/express";

dotenv.config({ path: ".env" });
const app = express();

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
};

// Use middleware
app.use(loggerMiddleware);
app.use(clerkMiddleware());
app.use(express.static("./../client/dist"));
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);

// app.all("*", (req, res, next) => {
//   next(new AppError(`cant find ${req.originalUrl} on this server`, 404));
// });

app.use(globalErrorcontroller);

export default app;
