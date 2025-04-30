exports.signup = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "hello from the signup route",
  });
};
exports.login = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "hello from the login route",
  });
};
exports.logout = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "hello from the logout route",
  });
};
exports.protect = (req, res, next) => {
  console.log(req.headers.authorization);
  next();
};
