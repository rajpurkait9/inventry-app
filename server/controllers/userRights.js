const User = require("../models/userSchema");

const getAllUser = async (req, res) => {
  try {
    const { limit = 2, page = 1 } = req.query;
    const userAll = await User.find({})
      .select("-password -token")
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
    const updateUser = await User.findByIdAndUpdate(
      { id },
      { name },
      { new: true }
    );
    res.status(200).send("sucessfully updated user");
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
module.exports = { getAllUser, getUser, createUser, updateUser, deleteUser };
