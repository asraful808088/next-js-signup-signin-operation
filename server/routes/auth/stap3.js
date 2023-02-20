const api_key = require("./../../../server/utility/api_key/key");
const mail = require("../../utility/verify_email/mail");
const insertVerify = require("../../../database/verifyIndsert");
const code = require("./../../utility/hash_code/code");
const removedVerify = require("../../../database/verifyDelete");
const getUserData = require("../../../database/getUserData");

module.exports = async function stap3(req, res) {
  
  try {
    if (req.body.file != "null") {
      let file = req.body.file;
      const ext = file.match(/(\.jpg|\.png|\.jpeg)$/gi);
      const result = imageValid(ext, req.files.file.size);
      if (!result.success) {
        res.status(result.status).json({
          error: result.error,
        });
      }
    }
  } catch (error) {
    const result = imageValid(req.files.file.mimetype, req.files.file.size);
    if (!result.success) {
      res.status(result.status).json({
        error: result.error,
      });
    }
  }

  await mailController(req);
  res.status(200).json({
    success: true,
  });
};

async function mailController(req) {
  const hash_code = code();
  await removedVerify({ email: req.body.email }, false);
  await insertVerify({
    email: req.body.email,
    code: hash_code,
    create_time: Date.now(),
    exp_time: Date.now() + 300000,
  });
  mail({
    userEmail: req.body.email,
    hash_code: hash_code,
    subject: "User-create",
    type: "signup",
  });
}

function imageValid(type, size) {
  if (
    type == "image/png" ||
    type == "image/jpg" ||
    type == "image/jpeg" ||
    type == ".png" ||
    type == ".jpg" ||
    type == ".jpeg"
  ) {
    if (size < 500000) {
      return {
        success: true,
      };
    } else {
      return {
        status: 413,
        error: "File too large",
      };
    }
  } else {
    return {
      status: 405,
      error: "only png, jpg, jpeg allow",
    };
  }
}
