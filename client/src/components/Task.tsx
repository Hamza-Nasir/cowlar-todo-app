import React from 'react'

interface taskProps {
    id: string;
    name: string;
    completed: boolean;
    onClick: Function;
}

export default function Task({ id, name, completed, onClick}: taskProps) {

  return (
    <div key={id} className='flex w-full p-4 border-b-2 ' onClick={() => onClick(id)}>
        <div className='relative mr-10'>
          
            <div className={completed ? 'absolute w-6 h-6 border-2 border-yellow-500 bg-yellow-500 rounded-full' : 'absolute w-6 h-6 border-2 border-yellow-600 rounded-full'}>
                {completed ? <p className='text-sm text-white text-center align-middle mb-[5px]'>&#10003;</p> : undefined}
            </div>
        </div>
    
        <p>{name}</p>
    </div>
  )
}
