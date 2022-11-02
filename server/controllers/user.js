const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
// logic for register api
const register = async (req, res) => {
  try {
    const { password, email, name } = req.body;
    const alreadyUser = await User.findOne({ email });
    if (alreadyUser)
      return res
        .status(401)
        .send(`user already exits with this email id ${email}`);
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      email,
      name,
      password: hashPassword,
      createAt: Date(Date.now()).toString(),
    });
    res
      .status(201)
      .json({
        name: newUser.name,
        email: newUser.email,
        createAt: newUser.createAt,
      });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};
// logic for login api
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const IsUser = await User.findOne({ email });
    if (!IsUser)
      return res
        .status(404)
        .send(`user is not register with email id ${email}`);
    res.status(200).json("user exits with this email id");
  } catch (error) {
    res.status(500).send("server problem..");
  }
};

module.exports = { login, register };
