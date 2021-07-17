const mongoose = require("mongoose");

const workAreaSchema = mongoose.Schema({
    JOB_UID: { type: String},
    STATUS: { type: Number},
    WORK_AREA: { type: String},
  }, {collection: 'T_Job_work_Area'});
  
  module.exports = mongoose.model("T_Job_work_Area", workAreaSchema);