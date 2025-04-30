const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
router
  .route("/")
  .get(userController.getalluser)
  .post(userController.createuser);

router
  .route("/:id")
  .get(userController.getuser)
  .patch(userController.updateuser)
  .delete(userController.deleteuser);

module.exports = router;
