import React, { useState } from "react";
import TaskList from "./TaskList";
import options from "../media/images/options.png";
import down_arrow from "../media/images/down_arrow.png";
import up_arrow from "../media/images/up_arrow.jpeg";

export default function DropDown() {
  const [opened, setOpened] = useState(false);
  const [image, setImage] = useState(down_arrow);

  const onClick = () => {
    setOpened(() => {
      return !opened;
    });
  };


  return (
    <>
      <div
        onClick={onClick}
        className="flex w-4/5 h-12 mx-auto justify-center bg-white rounded-md my-4 hover:cursor-pointer hover:bg-slate-200"
      >
        <div className="w-11/12 h-full ">
          <div className="flex h-full">
            <img src={options} className=" h-3/5 my-auto" />
            <p className="text-black ml-10 my-auto">To do today</p>
            <img
              src={opened ? up_arrow : down_arrow}
              className=" h-1/5 my-auto ml-auto"
            />
          </div>
        </div>
      </div>

      { opened ? <TaskList /> : undefined}
    </>
  );
}
