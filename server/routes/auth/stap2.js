const { json } = require("express");
const express = require("express");
const { validationResult } = require("express-validator");
module.exports = function stap2(req, res) {
  const error = validationResult(req);
  const mapError = error.mapped();
  if (Object.keys(mapError).length == 0) {
    res.status(200).json({
      success: true,
    });
  } else {
    res.status(400).json({ ...mapError });
  }
};
