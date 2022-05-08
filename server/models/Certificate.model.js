//mongoose certificate model
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const certificateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    field: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

certificateSchema.plugin(uniqueValidator);

const Certificate = mongoose.model('Certificate', certificateSchema);

module.exports = Certificate;
