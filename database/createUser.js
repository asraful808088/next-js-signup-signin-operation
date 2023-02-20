const mongoose = require("mongoose");
const Schema = require("./usermodle");
const user = new mongoose.model("user", Schema);
async function saveUser(userdata) {
  const userdatas = new user({ ...userdata });
  try {
    const result = await userdatas.save();
    return {
      success: true,
    };
  } catch (ex) {
    return {
      error: "server side Error",
    };
  }
}
module.exports = saveUser;
