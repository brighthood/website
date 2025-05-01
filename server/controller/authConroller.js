const AppError = require("./../utils/appError");
const User = require("./../model/userModel");
const catchAsync = require("./../utils/catchAsync");
const jwt = require("jsonwebtoken");

const signtoken = (id) => {
  const token = jwt.sign({ id }, process.env.JWTSECRETEKEY);
  return token;
};

exports.signup = catchAsync(async (req, res, next) => {
  const { name, email, password, confirmPassword, school, phonenumber } =
    req.body;
  const user = await User.create({
    name,
    email,
    password,
    confirmPassword,
    school,
    phonenumber,
  });
  const token = signtoken(user._id);
  res.status(200).json({
    status: "success",
    token,
    user,
  });
});
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError("please provide email & password"));
  }
  const user = await User.findOne({ email }).select("password");
  if (!user || !(await user.comparePassword(password, user.password))) {
    return next(new AppError("invalid email or password", 401));
  }

  const token = signtoken(user._id);

  res.status(200).json({
    status: "success",
    token,
  });
});
exports.logout = catchAsync((req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "hello from the logout route",
  });
});
exports.protect = catchAsync(async (req, res, next) => {
  console.log(req.headers.cookie.jwt);
  next();
});
