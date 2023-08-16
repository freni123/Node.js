const { user} = require('../models');

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createUser = async (reqBody) => {
    return user.create(reqBody);
  };
  module.exports = {createUser};