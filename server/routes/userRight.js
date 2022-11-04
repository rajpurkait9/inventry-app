const express = require("express");
const {
  getAllUser,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  changePassword,
} = require("../controllers/userRights");
const userRouter = express.Router();

userRouter.get("/", getAllUser);
userRouter.get("/:id", getUser);
userRouter.post("/", createUser);
userRouter.patch("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.patch('/',changePassword);

module.exports = userRouter;
