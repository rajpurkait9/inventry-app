const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
    res.status(201).json({
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
    // check if user exists
    const IsUser = await User.findOne({ email });
    if (!IsUser)
      return res
        .status(404)
        .send(`user is not register with email id ${email}`);
    const isPasswordSame = await bcrypt.compare(password, IsUser.password);
    if (!isPasswordSame) return res.send("password is wrong..");
    // json web token genrate code
    const token = await jwt.sign(
      { userId: IsUser._id, email: IsUser.email, userName: IsUser.name },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );
    IsUser.updateOne({ token }, { new: true, runValidation: true })
      .then()
      .catch((err) => console.log(err));
    res.send({ msg: `login sucessfull..`, token });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};

module.exports = { login, register };
