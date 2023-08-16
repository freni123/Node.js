const joi=require('joi')
/** create user */
const createUser = {
    body:joi.object().keys({
        first_name: joi.string().required().trim(),
        last_name: joi.string().required().trim(),
        email: joi.string().required().trim(),
        password: joi.string().required().trim(),
        phoneno: joi.string().allow().trim(),
    }),
}
/** GEt user list */
const getUserList = {
    query: Joi.object().keys({
      search: Joi.string().trim().allow(""),
      sortBy: Joi.string().trim().allow(""),
      limit: Joi.number().integer().allow(""),
      page: Joi.number().integer().allow(""),
    }),
  };
module.exports = { createUser,
    getUserList
};
