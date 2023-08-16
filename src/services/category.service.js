const { category } = require('../models');

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createCategory = async (reqbody) => {
  return category.create(reqbody);
};
module.exports = {createCategory};