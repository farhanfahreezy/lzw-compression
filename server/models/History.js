const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  type: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const History = mongoose.model("History", HistorySchema);
module.exports = History;
