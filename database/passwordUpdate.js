const mongoose = require("mongoose");
const Schema = require("./usermodle");
const user = new mongoose.model("user", Schema);
async function updateData(email, password) {
  try {
    const update = await user.updateOne(
      { email: email },
      { $set: { password: password } }
    );
    return false;
  } catch (error) {
    return true;
  }
}
module.exports = updateData;
