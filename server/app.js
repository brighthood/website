const express = require("express");
const dotenv = require("dotenv");
dotenv.config({path:""})

const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);

module.exports = app;
