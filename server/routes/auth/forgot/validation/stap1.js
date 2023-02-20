const { body } = require("express-validator");
const users = require("../../../../../database/getUserData");

module.exports = [
  body("email")
    .isEmail()
    .withMessage("invalid email")
    .custom(async (result) => {
      const getdata = await users({ email: result });
      if (getdata) {
        return true;
      }
      throw "user not found";
    }),
  body("secret")
    .isLength({ max: 12 })
    .withMessage("invalid secret")
    .custom(async (result, more) => {
      const getdata = await users({ email: more.req.body.email });
      if (getdata.secret_code == "N/A") return true;
      if (result.length > 0) {
        if (getdata.secret_code == result) {
          return true;
        } else {
          throw "invalid secret-code";
        }
      } else {
        throw "secret-code required";
      }
    }),
];
