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
      <div className="flex flex-col h-24 mt-12 justify-center md:flex md:flex-row md:h-10">
      <input
        type="text"
        className="w-4/5 h-full mx-auto text-black text-center rounded-md mb-2 mt-2 md:mb-0 md:mr-2 md:mt-0" 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter") {
            addItem();
          }
        }}
      ></input>
      <button onClick={addItem} className="bg-white w-4/5 h-full mx-auto border-1 px-10 border-black rounded-md md:w-auto">
        Add
      </button>

      
    </div>


    </>
    
  );
}
