const { body } = require("express-validator");
const users = require("../../../../database/getUserData");
const sta1Valid = [
  body("name")
    .isLength({ min: 2, max: 18 })
    .withMessage("maximum 18 & minimum 2 length")
    .isAlpha("en-US", { ignore: " -" })
    .withMessage("name must not contain anything other then  alphaet")
    .trim(),
  body("email")
    .isEmail()
    .withMessage("invalid email")
    .custom(async (result) => {
      const getdata = await users({ email: result });
      if (!getdata) {
        return true;
      }
      throw "email already in use";
    }),
];
module.exports = sta1Valid;
