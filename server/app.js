const express = require("express");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const globalErrorHandler = require("./controller/errorControllers");
const AppError = require("./utils/appError");
const cookieParser = require("cookie-parser");
dotenv.config({ path: ".env" });

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);

// app.all("*", (req, res, next) => {
//   next(new AppError(`cant find ${req.originalUrl} on this server`, 404));
// });

app.use(globalErrorHandler);

module.exports = app;
