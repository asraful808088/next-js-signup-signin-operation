const mongoose = require("mongoose");
const api_key = require("./../server/utility/api_key/key");
const Schema = mongoose.Schema;
const verify = new Schema({
  name:{
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
  },
  token: {
    type: String,
  },
  code: {
    type: String,
    required: true,
  },
  temp_api_key: {
    type: String,
    default: api_key(),
  },

  create_time: {
    type: Number,
    required: true,
  },
  exp_time: {
    type: Number,
    required: true,
  },
});
const model = mongoose.model("verify", verify);
module.exports = model;
