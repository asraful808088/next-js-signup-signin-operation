const verify = require("./verifyMiodel")
async function saveUser(data) {
    const secret = new verify({ ...data });
    try {
      const result = await secret.save();
      return {
        success: true,
      };
    } catch (ex) {
      return {
        error: ex,
      };
    }
  }
  module.exports = saveUser;