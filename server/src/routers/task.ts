const express = require('express');
const Task = require('../models/task')

const router = new express.Router();

router.post("/", async (req, res) => {

    const task = new Task({
        ...req.body,
        creationTime: Date.now(),
        completionTime: new Date(0),
    })

    try {
        const newTask = await task.save();

        res.status(201).send(newTask);

    } catch (e) {
        res.status(400).send(e);
    }
})

router.get("/", async (req, res) => {

    try {
        const tasks = await Task.find({});


        res.status(200).send(tasks);
    } catch (e) {
        res.status(400).send(e)
    }

})

router.patch('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            {
                completed: req.body.completed,
                completionTime: req.body.completed ? Date.now() : new Date(0),
            },
            { new: true }
        );

        if (!task) {
            return res.status(404).send(); // return a 404 response if the task is not found
        }

        res.send(task); // return the updated task

    } catch (e) {
        res.status(400).send(e);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedItem = await Task.findByIdAndDelete(req.params.id);

        if (!deletedItem) {
            return res.status(404).send({ error: 'Item not found' });
        }
        res.send({ message: 'Item deleted successfully' });

    } catch (e) {
        res.status(500).send({ error: e.message });
    }
})

module.exports = router;