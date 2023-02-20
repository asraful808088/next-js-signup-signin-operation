const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userData = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  user_role: {
    type: String,
    required: true,
    enum: ["user", "admin"],
  },
  api_key: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  secret_code: {
    type: String,
  },
  avater_id: {
    type: String,
  },
  avater_url: {
    type: String,
  },
  late_update: {
    type: Date,
  },
  create_time: {
    type: Date,
    default: Date.now,
  },
});
module.exports = userData;
