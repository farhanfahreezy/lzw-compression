const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema({
  isQuestion: {
    type: Boolean,
    required: true,
  },
  dialog: {
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
