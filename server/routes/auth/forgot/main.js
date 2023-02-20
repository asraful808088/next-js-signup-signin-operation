const express = require("express");
const stap1 = require("./stap1");
const stap2 = require("./stap2");
const final = require("./final");
const validStap1 = require("./validation/stap1");
const validStap2 = require("./validation/stap2");
const forgot = express.Router();
forgot.post("/", validStap1, stap1);
forgot.post("/stap2", validStap2, stap2);
forgot.post("/final",  final);
module.exports = forgot;
