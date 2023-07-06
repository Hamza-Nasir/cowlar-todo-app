const request = require('supertest');
const app = require('../dist/index');
const db = require('./config/database');

const agent = request.agent(app);

// beforeAll(async () => await db.connect());
// afterEach(async () => await db.clear());
// afterAll(async () => await db.close());

describe('ToDo Server Endpoints', () => {
  test('POST /tasks should create a new task', async () => {
    const taskData = { task: 'Buy groceries' };
    const response = await agent
      .post('/tasks')
      .send(taskData)
      .expect(201);

    // Assert the response
    expect(response.body).toHaveProperty('_id');
    expect(response.body.task).toBe(taskData.task);

    // Assert the task is saved in the database
    const taskCollection = database.collection('tasks');
    const savedTask = await taskCollection.findOne({ _id: response.body._id });
    expect(savedTask).toMatchObject(taskData);
  });
});
