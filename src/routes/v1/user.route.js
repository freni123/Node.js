const express = require('express');
const {userController} = require('../../controllers')
// const { userValidation } = require('../../validation');

const router = express.Router();

// create user
router.post(
    "/create-user",
    // validate(userValidation.createUser),
     userController.createUser
);
// Get user
router.get(
    "/list",
    // validate(userValidation.getUserList),
    // userController.getUserList
);
module.exports = router;
