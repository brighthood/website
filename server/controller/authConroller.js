const AppError = require("./../utils/appError");
const User = require("./../model/userModel");
const catchAsync = require("./../utils/catchAsync");
const jwt = require("jsonwebtoken");

const signtoken = (id) => {
  const token = jwt.sign({ id }, process.env.JWTSECRETEKEY);
  return token;
};
const varifytoken = (token) => {
  return jwt.verify(token, process.env.JWTSECRETEKEY);
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
    user,
  });
});
exports.logout = catchAsync((req, res, next) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.clearCookie("jwt", { path: "/" });
  res.status(200).json({
    status: "success",
    message: "You have successfully logged out.",
  });
});
exports.protect = catchAsync(async (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return next(
      new AppError("You are not logged in! Please log in to get access.", 401)
    );
  }
  const decoded = varifytoken(token);
  req.user = await User.findById(decoded.id);
  if (!req.user) {
    return next(
      new AppError("The user belonging to this token no longer exists.", 401)
    );
  }
  next();
});
exports.restrictTo = (...role) => {
  return (req, res, next) => {
    if (!role.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action", 403)
      );
    }
    next();
  };
};
