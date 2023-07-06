import React, { useState, useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContext";
import Task from "./Task";
import axios from 'axios'

import { deleteTask, updateTask } from "../services/apiService";

export default function TaskList() {
  //   const [items, setItems] = useState(originalItems);
  const { items, setItems } = useContext(ItemsContext);

  const onClick = async (id: string) => {
    let itemComplete = false;
    let updatedDate = new Date();

    console.log(updatedDate);

    const updatedItems = items.map((item) => {
      if (item._id === id) {
        itemComplete = !item.completed;

        if (!itemComplete) {
          updatedDate = new Date(0);
        }
      }

      console.log(updatedDate);

      return item._id === id ? { ...item, completed: !item.completed, completionTime: updatedDate } : item;
    });

    // axios.patch(`${process.env.REACT_APP_BACKEND_URI}/tasks/${id}`, {
    //   completed: itemComplete,
    // })
    // .then((res) => {
    //   console.log("Item updated on backend");
    // }).catch((e) => {
    //   console.log("Some error occured");
    // })
    const res = await updateTask(id, itemComplete);

    console.log('Update returned: ', res);

    if (res) {
      setItems(updatedItems);
    } else {
      console.log("error occurred while updating");
    }

  };

  const onDelete = async (id: string) => {
    console.log("Item deleted with id: ", id);
    let itemComplete = false;

    const updatedItems = items.filter((item) => {
    
      return item._id !== id
    });

    // axios.delete(`${process.env.REACT_APP_BACKEND_URI}/tasks/${id}`)
    // .then((res) => {
    //   console.log("Item updated on backend");
    // }).catch((e) => {
    //   console.log("Some error occured");
    // })

    const res = await deleteTask(id);

    if (res) {
      setItems(updatedItems);
    } else {
      console.log("Some error occured while deleting");
    }

    
  };

  return (
    <div className="w-4/5 h-48 overflow-y-auto mx-auto">
      <div className="flex flex-col w-100 h-auto bg-white border-2 rounded-md">
        {items.map((item) => {

          console.log("Map Item: ", item)

          return (
            <Task
              key={item._id}
              id={item._id}
              name={item.task}
              completed={item.completed}
              completionTime={item.completionTime}
              onClick={onClick}
              onDelete={onDelete}
              
            />
          );
        })}
      </div>
    </div>
  );
}
