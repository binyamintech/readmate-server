const mongoose = require("mongoose");

const UserTestSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  testAnswer: [
    {
      questionId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "test.questions",
      },
      answer: {
        type: Boolean,
        required: true, // ?
      },
    },
  ],
  result: {
    WPM: {
      type: Number,
      required: true,
    },
    STD: {
      type: Number,
      required: true,
    },
    CMP: {
      type: String,
      required: true,
    },
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("UserTest", UserTestSchema);
