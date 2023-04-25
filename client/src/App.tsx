import React from 'react';
import background from "./images/background.jpg"
import avatar from "./images/avatar.jpg"

function App() {
  return (
    <>
      <img src={background} className='w-screen h-screen absolute -z-50' />
      <div className='flex w-screen h-screen'>
        <div className='w-1/3 h-2/3 m-auto bg-green-300'>
          
          <img src={avatar} className='w-1/5 h-1/5 border-2 border-yellow-600 rounded-full mx-auto my-10' />
        </div>
      </div>
      
    </>
  );
}

export default App;
