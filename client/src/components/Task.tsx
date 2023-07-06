import React, { useState } from "react";
import options from "../media/images/options.png";
import { StringLiteral } from "typescript";

interface taskProps {
  id: string;
  name: string;
  completed: boolean;
  completionTime: Date;
  onClick: Function;
  onDelete: Function;
}

export default function Task({ id, name, completed, completionTime, onClick, onDelete }: taskProps) {
  const [openSettings, setOpenSettings] = useState(false);
  const completeDate = new Date(completionTime);

  console.log(typeof(completionTime));

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
        
        { completed && (
          <p
            className="h-6 xs:bg-red-100 my-auto ml-auto"

          >{`${completeDate.getDate()}/${completeDate.getMonth()}/${completeDate.getFullYear()}`}</p>
        ) }

        <img
          src={options}
          className="h-6 my-auto ml-4 md:ml-auto hover:cursor-pointer" 
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
