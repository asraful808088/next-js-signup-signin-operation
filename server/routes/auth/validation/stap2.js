const {body} =require("express-validator")
const isValid = [
    body("password").isStrongPassword().withMessage("weak password")
]
module.exports = isValid