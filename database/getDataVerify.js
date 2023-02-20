const verifyModle = require("./verifyMiodel");
module.exports = async function getData(info) {
  const findData = await verifyModle.find(info);
  if (findData[0] != null) {
    return findData[0];
  } else {
    return false;
  }
};
