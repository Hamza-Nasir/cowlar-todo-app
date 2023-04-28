const express = require('express');
require('dotenv').config()
require("./db/mongoose");
const taskRouter = require('./routers/task');

const app = express();
const PORT = 5000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.use(express.json());
app.use("/tasks", taskRouter);

app.listen(PORT, () => {
    console.log("Server running on port ", PORT);
})

export {}