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
 
const 
module.exports = { getAllUser ,getUser};
