const express = require("express");
const loginController = require("./controller");
const isvalid = require("./validator/login")
const login = express.Router();
login.post("/",isvalid, loginController);
module.exports = login;
