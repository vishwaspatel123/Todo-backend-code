const mongoose = require("mongoose");

const todoListSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
    },
    completed: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("todoitems", todoListSchema);
