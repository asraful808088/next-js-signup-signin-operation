const { json } = require("express");
const cloudinary = require("../../../network/cloudinary/cloudinary");
const userCreate = require("../../../database/createUser");
const hashPassword = require("../../utility/password_hash/hash");
const api_key_Build = require("../../utility/api_key/key");
const getVerifyData = require("../../../database/getDataVerify");
const removedVerify = require("./../../../database/verifyDelete");

module.exports = async function final(req, res) {
  const getVerifyInFo = await getVerifyData({ email: req.body.email });

  if (
    req.body.hash_code == getVerifyInFo.code &&
    getVerifyInFo.exp_time > Date.now()
  ) {
    if (req.files) {
      saveUserData(req.files.file, req, res);
    } else {
      saveUserData(null, req, res);
    }
  } else {
    res.status(401).json({
      error: "Invalid hash-code",
    });
  }
};

async function saveUserData(file, req, res) {
  let imageResult;
  if (file) {
    imageResult = await cloudinary.uploader.upload(file.tempFilePath, {
      upload_preset: "nzf72w8r",
      folder: "folder1",
      public_id: `${Date.now()}`,
      resource_type: "auto",
      crop: "scale",
      resource_type: "auto",
    });
  }

  const finalResult = await userCreate({
    name: req.body.name,
    email: req.body.email,
    password: await hashPassword(req.body.password),
    user_role: "admin",
    api_key: api_key_Build(),
    secret_code:"N/A",
    avater_id: imageResult != null ? imageResult.public_id : "N/A",
    avater_url: imageResult != null ? imageResult.secure_url : "N/A",
  });
  if (finalResult.success) {
    const result = await removedVerify({ email: req.body.email }, false);
    res.status(200).json({
      success: true,
    });
  } else {
    res.status(401).json({
      error: "Invalid hash-code",
    });
  }
}
