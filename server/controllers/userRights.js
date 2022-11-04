const User = require("../models/userSchema");
const bcrypt = require("bcrypt");

const getAllUser = async (req, res) => {
  try {
    const { limit = 2, page = 1 } = req.query;
    const userAll = await User.find({})
      .limit(+limit)
      .skip((+page - 1) * limit);

    res.status(200).json(userAll);
  } catch (error) {
    console.log(error);
  }
};

const getUser = (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    res.status(200).json("sucess");
  } catch (error) {
    console.log(error.message);
  }
};
const createUser = async (req, res) => {
  try {
    // const newUser = await User.create(req.body);
    res.status(200).send("sucessfully crreate a user ");
  } catch (error) {
    console.log(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    console.log(req.body);
    res.send(req.body);
  } catch (error) {
    console.log(error.message);
  }
};
const deleteUser = (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).send("user deleted sucessfully...");
  } catch (error) {
    console.log(error.message);
  }
};
// api for change user password
const changePassword = async (req, res) => {
  try {
    const { password, newPassword } = req.body;
    const { userId } = req.query;
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return res.send("user is not exists with this id");
    }
    const isPasswordSame = await bcrypt.compare(password, user.password);
    console.log(isPasswordSame);
    const updateUserPassword = await User.updateOne(
      { _id: userId },
      { password: newPassword },
      { new: true }
    );
    console.log(user);
    res.send(updateUserPassword);
  } catch (error) {
    res.send(error.message);
  }
};
module.exports = {
  getAllUser,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  changePassword,
};
