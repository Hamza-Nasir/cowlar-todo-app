const Task = require('../models/task');

const createTask = async (taskData) => {
  const task = new Task({
    ...taskData,
    creationTime: Date.now(),
    completionTime: new Date(0),
  });

  try {
    const newTask = await task.save();
    return newTask;
  } catch (e) {
    throw e;
  }
};

const getAllTasks = async () => {
  try {
    const tasks = await Task.find({});
    return tasks;
  } catch (e) {
    throw e;
  }
};

const updateTask = async (id, completed) => {
  try {
    const task = await Task.findByIdAndUpdate(
      id,
      {
        completed,
        completionTime: completed ? Date.now() : new Date(0),
      },
      { new: true },
    );

    return task;
  } catch (e) {
    throw e;
  }
};

const deleteTask = async (id) => {
  try {
    const deletedItem = await Task.findByIdAndDelete(id);
    return deletedItem;
  } catch (e) {
    throw e;
  }
};

module.exports = {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
};
