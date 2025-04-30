const mongoose = require("mongoose");

exports.Db = mongoose
  .connect(process.env.LOCAL_MONGODB_URL)
  .then(() => {
    console.log("Connected to Database successfully ✅");
  })
  .catch((err) => {
    console.log(err);
  });
