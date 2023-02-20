const update = require("../../../../database/passwordUpdate");
const hashPassword = require("../../../utility/password_hash/hash");
const removedVerify = require("../../../../database/verifyDelete");
const getVerifyData = require("../../../../database/getDataVerify");
async function final(req, res) {
  const getVerifyInFo = await getVerifyData({ email: req.body.email });

  console.log(req.body.token == getVerifyInFo.token);
  if (
    req.body.hash_code == getVerifyInFo.code &&
    getVerifyInFo.exp_time > Date.now()
  ) {
    if (req.body.token == getVerifyInFo.token) {
      const Password = await hashPassword(req.body.password);
      const err = await update(req.body.email, Password);
      if (!err) {
        const result = await removedVerify({ email: req.body.email }, false);
        res.status(200).json({
          success: true,
        });
      }
    } else {
      res.status(400).json({
        token: "Invalid token",
      });
    }
  } else {
    res.status(401).json({
      hash_code: "Invalid hash-code",
    });
  }
}
module.exports = final;
