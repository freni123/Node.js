const joi = require("joi");

/** create user */
const createUser = {
    body:joi.object().keys({
        first_name:joi.string().require().trim(),
        last_name:joi.string().require().trim(),
        email:joi.string().require().trim(),
        password:joi.string().require().trim(),
        phoneno:joi.string().allow().trim(),
    }),
}