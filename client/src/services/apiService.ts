import axios from 'axios'

import config from '../config';

type Item = {
    _id: string;
    task: string;
    completed: boolean;
    creationTime: Date;
    completionTime: Date;
};

const getTasks = async () => {
  try {
    const response = await axios.get(`${config.backendUri}/tasks`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const createTask = async (task: string) => {
    try {
        const res = await axios.post(`${config.backendUri}/tasks/`, {
            task: task,
        })

        return res;

    } catch (e) {
        console.log(e);

        throw e;

    }
}

const updateTask = async (id: string, itemComplete: boolean): Promise<boolean> => {

    try {
        await axios.patch(`${config.backendUri}/tasks/${id}`, {
            completed: itemComplete,
        })

        console.log("Request complete");
        return true;
    } catch (e) {
        console.error("Some error occurred");
        return false;
    }
}

const deleteTask = async (id: string): Promise<boolean> => {

    try {
        await axios.delete(`${config.backendUri}/tasks/${id}`)
        console.log("Delete complete");
        return true;
    } catch (e) {
        console.error("Some error occurred");
        return false;
    }
}

export {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
}