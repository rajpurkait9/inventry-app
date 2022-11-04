const express = require('express');
const { getAllUser } = require('../controllers/userRights');
const userRouter = express.Router();

userRouter.get('/',getAllUser);



module.exports = userRouter;