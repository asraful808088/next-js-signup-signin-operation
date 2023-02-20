function api_key() {
  let key = "";
  const formula =
    "qwertyuiopasdfghjklzxcvbnm1234567890qwertyuiopasdfghpasdfghjklzxcfghj2345679ghjklzxcvbnm1234567890";
  for (let index = 0; index < formula.length; index++) {
    key += formula[Math.round(Math.random() * (formula.length - 1))];
  }

  return key;
}
  module.exports =api_key