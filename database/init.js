const mongoose = require("mongoose");
const uri =
  "mongodb+srv://asraful909099:AsrafulXXXX1234@cluster0.xhkag.mongodb.net/?retryWrites=true&w=majority";
const client = mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connect Successfully");
  })
  .catch((err) => {
    console.log("Database Connect fail ");
  });
module.exports = client;
