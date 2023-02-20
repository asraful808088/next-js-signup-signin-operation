const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const getUserData = require("../../../../database/getUserData");

const loginController = async (req, res) => {
  const error = validationResult(req);
  const mapError = error.mapped();
  console.log(mapError);
  if (Object.keys(mapError).length == 0) {
    const email = req.body.email;
    const password = req.body.password;
    const userData = await getUserData({ email: "emails" });
    if (userData != false) {
      const isValidPassword = await bcrypt.compare(password, userData.password);
      console.log(isValidPassword);
    } else {
      res.status(400).json({
        email: {
          msg: "user not found",
        },
      });
    }
  } else {
    res.status(400).json({ ...mapError });
  }
};
module.exports = loginController;

// res.status(200).json({
//     success: true,
//   });
