const mongoose = require("mongoose");

const T_JobSchema = mongoose.Schema({
    JOB_NAME: { type: String},
    STATUS: { type: Number},
  }, {collection: 'T_Job'});
  
  
  module.exports = mongoose.model("T_Job", T_JobSchema);