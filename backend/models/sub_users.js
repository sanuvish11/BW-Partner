const mongoose = require("mongoose");

const subUsersSchema = mongoose.Schema({
    userName: { type: String},
    moNumber: { type: String},
    email: { type: String},
    password: { type: String},
    jobType: { type: String},
    status: { type: String},
  }, {collection: 'Sub_Users'});
  
  
  module.exports = mongoose.model("Sub_Users", subUsersSchema);