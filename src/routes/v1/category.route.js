const express = require('express');
const {categoryController} = require('../../controllers')
// const { userValidation } = require('../../validation');

const router = express.Router();

// create user
router.post(
    "/create-category",
    // validate(userValidation.createUser),
    categoryController.createCategory
);
// Get category
router.get(
    "/list",
    // validate(userValidation.getUserList),
    // userController.getUserList
);
module.exports = router;
