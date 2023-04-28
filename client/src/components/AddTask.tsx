import React, { useState, useContext } from 'react'
import DropDown from "./DropDown";
import { ItemsContext } from '../contexts/ItemsContext';
import axios from 'axios'

export default function AddTask() {
  
  const { items, setItems } = useContext(ItemsContext);
  const [value, setValue] = useState("");

  const addItem = async () => {
    if (value.trim() !== "") {
      try {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URI}/tasks/`, {
          task: value,
        })
  
        setItems(prevItems => [
          ...prevItems,
          {
            _id: res.data._id,
            task: value,
            completed: false,
            creationTime: res.data.creationTime,
            completedTime: res.data.completedTime,
          }
        ])
      } catch (e) {
        console.log(e);
      }
      

    }
    // if (value.trim() !== "") {
    //   setItems(prevItems => [
    //     ...prevItems,
    //     {
    //       id: "9",
    //       task: value,
    //       completed: false,
    //       creationTime: Date.now(),
    //       completedTime: new Date(0),
    //     }
    //   ])
    // }
  }

  return (
    <>
      <div className="flex h-10 mt-12 justify-center ">
      <input
        type="text"
        className="w-3/5 h-full text-black text-center rounded-md mr-2" 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter") {
            addItem();
          }
        }}
      ></input>
      <button onClick={addItem} className="bg-white border-1 px-10 border-black rounded-md">
        Add
      </button>

      
    </div>


    </>
    
  );
}
