const mongoose = require("mongoose");

const Histories = new mongoose.Schema({
  time_at: {
    type: Date,
  },
  size: {
    type: String,
  },
});

const History = mongoose.model("History", Histories);

module.exports = History;