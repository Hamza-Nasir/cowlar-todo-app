import React, { useState } from "react";
import options from "../media/images/options.png";

interface taskProps {
  id: string;
  name: string;
  completed: boolean;
  onClick: Function;
  onDelete: Function;
}

export default function Task({ id, name, completed, onClick, onDelete }: taskProps) {
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <>
      <div
        key={id}
        className="flex w-full p-4 border-b-2 hover:bg-slate-200 "
      >
        <div className="relative mr-10 hover:cursor-pointer" onClick={() => onClick(id)}>
          <div
            className={
              completed
                ? "absolute w-6 h-6 border-2 border-yellow-500 bg-yellow-500 rounded-full"
                : "absolute w-6 h-6 border-2 border-yellow-600 rounded-full"
            }
          >
            {completed ? (
              <p className="text-sm text-white text-center align-middle mb-[5px]">
                &#10003;
              </p>
            ) : undefined}
          </div>
        </div>
        <p>{name}</p>
        <img
          src={options}
          className="h-6 my-auto ml-auto hover:cursor-pointer" 
          onClick={() => {
            setOpenSettings(!openSettings);
          }}
        />

        
      </div>

      {openSettings ? (
          <div className="bg-[#f44336] text-[#fff] cursor-pointer p-3 text-lg text-center rounded-md ">
            <ul>
              <li onClick={() => onDelete(id)}>Delete</li>
            </ul>
          </div>
        ) : undefined}
    </>
  );
}
