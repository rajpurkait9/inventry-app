const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name must be provided"],
    min: [3, "name cannot be less than 3 character"],
    max: [100, "name cannot be more than 100 character"],
  },
  email: {
    type: String,
    required: [true, "email must be provided"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "already exists provide a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "password must be provided"],
    min: [8, "password must contain atleast 8 character"],
    max: [500, "password cannot be more than 500 character"],
  },
  createAt :{
    type : String
  }
});

module.exports = new mongoose.model('user',userSchema);