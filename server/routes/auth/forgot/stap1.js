const {validationResult} =require("express-validator")
function stap1(req,res){
    const error = validationResult(req);
    const mapError = error.mapped();
    if (Object.keys(mapError).length == 0) {
      res.status(200).json({
        success: true,
      });
    } else {
      res.status(400).json({ ...mapError });
    }

}
module.exports = stap1