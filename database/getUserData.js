const Schema = require("./usermodle");
const mongoose = require("mongoose")
const user=  new mongoose.model("user",Schema)
module.exports = async function getData(info) {
  const findData = await user.find(info);
  if (findData[0] != null) {
    return findData[0];
  } else {
    return false;
  }
};
