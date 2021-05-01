const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    taskDesc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
