const express = require("express");
const finalStap = require("./finalStap");
const stap1 = require("./stap1");
const stap2 = require("./stap2");
const stap3 = require("./stap3");
const idValidStap1 = require("./validation/stap1")
const idValidStap2 = require("./validation/stap2")
const SignUp = express.Router();
SignUp.post("/",idValidStap1,stap1);
SignUp.post("/stap2",idValidStap2,stap2);
SignUp.post("/file",stap3);
SignUp.post("/final",finalStap);

module.exports = SignUp;
