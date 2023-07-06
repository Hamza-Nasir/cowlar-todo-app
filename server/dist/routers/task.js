const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P((resolve) => { resolve(value); }); }
  return new (P || (P = Promise))((resolve, reject) => {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const express = require('express');
const taskService = require('../services/taskService');

const router = new express.Router();
router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
  try {
    const newTask = yield taskService.createTask(req.body);
    res.status(201).send(newTask);
  } catch (e) {
    res.status(400).send(e);
  }
}));
router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
  try {
    const tasks = yield taskService.getAllTasks();
    res.status(200).send(tasks);
  } catch (e) {
    res.status(400).send(e);
  }
}));
router.patch('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
  try {
    const task = yield taskService.updateTask(req.params.id, req.body.completed);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(400).send(e);
  }
}));
router.delete('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
  try {
    const deletedItem = yield taskService.deleteTask(req.params.id);
    if (!deletedItem) {
      return res.status(404).send({ error: 'Item not found' });
    }
    res.send({ message: 'Item deleted successfully' });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
}));
module.exports = router;
// # sourceMappingURL=task.js.map
