const verifyModle = require("./verifyMiodel");
module.exports = async function getData(info, one) {
  let result;
  if (!one) {
    result = await verifyModle.deleteMany(info);
  } else {
    result = await verifyModle.deleteOne(info);
  }
  if (result.acknowledged == true) {
    return false;
  } else {
    return true;
  }
};
