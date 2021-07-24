const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const formSchema = mongoose.Schema({
  moNumber: { type: String,  },
  adharNumber: { type: String,  },
  firstName: { type: String },
  middleName: { type: String },
  lastName: { type: String },
  fatherName: { type: String },
  address1: { type: String },
  address2: { type: String },
  address3: { type: String },
  area: { type: String },
  city: { type: String },
  state: { type: String },
  pincode: { type: String },
  SKILLS: { type: String },
  otp: { type: String },
  CORE_SKILLS: { type: Array },
  date_of_birth: { type: String },
  WORK_EXPERIENCE: { type: Array },
  imagePath: {
    type: Array
  },
  agreement: { type: String }
});

formSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Form", formSchema);