const express = require("express");
const {
  getAllUser,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userRights");
const userRouter = express.Router();

userRouter.get("/", getAllUser);
userRouter.get("/:id", getUser);
userRouter.post("/", createUser);
userRouter.patch("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
