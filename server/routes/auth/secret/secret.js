const express = require("express");
const secret = express.Router();
const verifyData = require("./../../../../database/getDataVerify");

secret.get("/:api", async (req, res) => {
  const getData = await verifyData({ temp_api_key: req.params.api });
  if (getData) {
    res.status(200).json({
      success: true,
      token: getData.token,
      email: getData.email,
      name: getData.name,
    });
  } else {
    res.status(401).json({
      success: false,
      error: "not found api",
    });
  }
});
module.exports = secret;
