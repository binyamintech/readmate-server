const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
  teacherId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "user",
  },
  classroomId: {
    type: String,
    required: true,
  },
  classroomName: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("class", ClassSchema);
