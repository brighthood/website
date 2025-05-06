const express = require("express");
const router = express.Router();
import {
  getalluser,
  createuser,
  updateuser,
  deleteuser,
  getuser,
} from "../controller/userController";
import { protect } from "../controller/authConroller";
router.use(protect);
router.route("/").get(getalluser).post(createuser);

router.route("/:id").get(getuser).patch(updateuser).delete(deleteuser);

export default router;
