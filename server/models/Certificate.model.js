//mongoose certificate model
const mongoose = require('mongoose');
import uniqueValidator from 'mongoose-unique-validator';

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
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

certificateSchema.plugin(uniqueValidator);

const Certificate = mongoose.model('Certificate', certificateSchema);

module.exports = Certificate;
