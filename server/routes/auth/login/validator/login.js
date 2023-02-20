const { body } = require("express-validator");
const loginValidator = [body("email").isEmail().withMessage("invalid email")];
module.exports = loginValidator;
