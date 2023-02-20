function token() {
    let key = "";
    const formula =
      "QWERTYUIOPFDASZXCVBNM";
    for (let index = 0; index < formula.length; index++) {
      key +=
        formula[
          Math.round(Math.random() * (formula.length-1)) 
        ];
    }
  
    return key;
  }
  module.exports =token