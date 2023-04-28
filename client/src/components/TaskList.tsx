import React, { useState, useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContext";
import Task from "./Task";
import axios from 'axios'

export default function TaskList() {
  //   const [items, setItems] = useState(originalItems);
  const { items, setItems } = useContext(ItemsContext);

  console.log("Items from task list: ", items);

  const onClick = (id: string) => {
    console.log("Item changed with id: ", id);
    let itemComplete = false;

    const updatedItems = items.map((item) => {
      if (item._id === id) {
        itemComplete = !item.completed;
      }

      return item._id === id ? { ...item, completed: !item.completed } : item;
    });

    axios.patch(`${process.env.REACT_APP_BACKEND_URI}/tasks/${id}`, {
      completed: itemComplete,
    })
    .then((res) => {
      console.log("Item updated on backend");
    }).catch((e) => {
      console.log("Some error occured");
    })
    setItems(updatedItems);
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
              onClick={onClick}
            />
          );
        })}
      </div>
    </div>
  );
}
