const { userService, emailService } = require("../services");

/** create user */
const createUser = async (req, res) => {
    const reqBody = req.body;
    console.log(reqBody,'+++++++++++ reqBody.email');
}
res.status(200).json({
    success: true,
    message: "User create successfully!",
    data: { user },
  });