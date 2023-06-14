import React, { useState, useEffect } from "react";
import { ItemsContext } from "../contexts/ItemsContext";
import axios from "axios";
import background from "../media/images/background.jpg";
import avatar from "../media/images/avatar.jpg";
import AddTask from "../components/AddTask";
import DropDown from "../components/DropDown";

interface Item {
  _id: string;
  task: string;
  completed: boolean;
  creationTime: Date;
  completedTime: Date;
}

export default function Main() {

  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    axios.get(`${process.env.REACT_APP_BACKEND_URI}/tasks`)
    .then(res => {

      setItems(res.data);
      setLoading(false);
    })
    .catch(err => {
      console.log(err);
    })

  }, [])


  // if (loading) {
  //   return <div>Loading...</div>
  // }

  return (

      (
      <div className="overflow-hidden w-screen h-screen">
      <img
        src={background}
        className="w-screen h-screen absolute -z-50 blur-sm"
      />
      <ItemsContext.Provider value={{ items, setItems }}>
        <div className="flex w-screen h-screen">
          <div className="w-11/12 h-2/3 m-auto bg-[rgba(0,0,0 ,0.5)] opacity-75 md:w-1/3">
            <img
              src={avatar}
              className="w-28 h-28 border-2 border-yellow-600 rounded-full mx-auto my-10 shadow-md"
            />
            <AddTask />
            {  items.length ? <DropDown /> : undefined}
            
          </div>
        </div>
      </ItemsContext.Provider>
    </div>
      )
  );
}
