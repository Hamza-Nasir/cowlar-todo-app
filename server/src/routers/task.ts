const express = require('express');
const taskService = require('../services/taskService');

const router = new express.Router();

router.post('/', async (req, res) => {
  try {
    const newTask = await taskService.createTask(req.body);
    res.status(201).send(newTask);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get('/', async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.status(200).send(tasks);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const task = await taskService.updateTask(req.params.id, req.body.completed);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedItem = await taskService.deleteTask(req.params.id);
    if (!deletedItem) {
      return res.status(404).send({ error: 'Item not found' });
    }
    res.send({ message: 'Item deleted successfully' });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

module.exports = router;
