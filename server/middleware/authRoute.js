const jwt = require("jsonwebtoken");

const authRoute = async (req, res, next) => {
  try {
    console.log(token);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = authRoute;
