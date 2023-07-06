const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P((resolve) => { resolve(value); }); }
  return new (P || (P = Promise))((resolve, reject) => {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const Task = require('../models/task');

const createTask = (taskData) => __awaiter(this, void 0, void 0, function* () {
  const task = new Task({ ...taskData, creationTime: Date.now(), completionTime: new Date(0) });
  try {
    const newTask = yield task.save();
    return newTask;
  } catch (e) {
    throw e;
  }
});
const getAllTasks = () => __awaiter(this, void 0, void 0, function* () {
  try {
    const tasks = yield Task.find({});
    return tasks;
  } catch (e) {
    throw e;
  }
});
const updateTask = (id, completed) => __awaiter(this, void 0, void 0, function* () {
  try {
    const task = yield Task.findByIdAndUpdate(id, {
      completed,
      completionTime: completed ? Date.now() : new Date(0),
    }, { new: true });
    return task;
  } catch (e) {
    throw e;
  }
});
const deleteTask = (id) => __awaiter(this, void 0, void 0, function* () {
  try {
    const deletedItem = yield Task.findByIdAndDelete(id);
    return deletedItem;
  } catch (e) {
    throw e;
  }
});
module.exports = {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
};
// # sourceMappingURL=taskService.js.map
