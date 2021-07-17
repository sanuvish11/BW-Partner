const mongoose = require("mongoose");

const skillSetsSchema = mongoose.Schema({
    CORE_SKILL_ID: { type: String},
    WORK_EXPE: { type: String},
    STATUS: { type: Number}
  }, {collection: 'T_Skill_Set'});
  
  module.exports = mongoose.model("T_SKILL_SET", skillSetsSchema);