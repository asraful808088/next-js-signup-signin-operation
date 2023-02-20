const { validationResult } = require("express-validator");
const mail = require("./../../../utility/verify_email/mail");
const api_key = require("../../../utility/api_key/key");
const getVerifyData = require("../../../../database/getDataVerify");
const removedVerify = require("../../../../database/verifyDelete");
const insertVerify = require("./../../../../database/verifyIndsert");
const getUserData = require("../../../../database/getUserData");
const code = require("./../../../utility/hash_code/code");
const token  = require("../../../utility/token/token")
async function stap2(req, res) {
  const error = validationResult(req);
  const mapError = error.mapped();
  if (Object.keys(mapError).length == 0) {
    const api = api_key();
    const hash_code =code(); 
    const tokenGen = token();
    await removedVerify({ email: req.body.email }, false);
    const userData = await getUserData({ email: req.body.email });
   await insertVerify({
      name: userData.name,
      email: userData.email,
      userid: userData._id,
      token: tokenGen,
      code: hash_code,
      temp_api_key: api,
      create_time: Date.now(),
      exp_time: Date.now() + 300000,
    });
    mail({
      hash_code: hash_code,
      userEmail: req.body.email,
      temp_api_key: api,
      subject: "Forgot password",
      type: "forgot",
    });
    res.status(200).json({
      success: true,
    });
  } else {
    res.status(400).json({ ...mapError });
  }
}
module.exports = stap2;
