const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  task: {
    type: String,
    required: true,
    trim: true,
  },

  completed: {
    type: Boolean,
    default: false,
  },

  creationTime: {
    type: Date,

  },

  completionTime: {
    type: Date,
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
export {};
