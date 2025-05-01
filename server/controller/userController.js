const User = require("./../model/userModel");
const catchAsync = require("./../utils/catchAsync");

exports.getalluser = catchAsync(async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    users,
  });
});

exports.getuser = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "hello from the logout route",
  });
};
exports.createuser = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "hello from the logout route",
  });
};
exports.updateuser = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "hello from the logout route",
  });
};
exports.deleteuser = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "hello from the logout route",
  });
};
