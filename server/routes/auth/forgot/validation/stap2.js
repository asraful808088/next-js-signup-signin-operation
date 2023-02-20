const {body} = require("express-validator")

module.exports =[
    body("password").isStrongPassword().withMessage("weak password")
]