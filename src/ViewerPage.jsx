import React from 'react'
import mov2 from './Images/mov2.png'
const ViewerPage = () => {
  return (
    <div className='py-20  flex justify-center justify-items-center'>   
      <div className="snap-start flex-shrink-0  px-20   ">
    <a>
       <img src={mov2} alt='mov' className='w-80 h-96 object-cover'>
       
       </img>
    </a> 
         
       </div> 
       <div className='pr-40 grid'>
       <h1 className='text-center text-4xl font-semibold'>Ringo Gringo</h1>

       <div className='space-x-10 pt-60  '>
       <a className='' href='#'>
          <button className=' hover:bg-purple-500 text-white px-4 py-2 rounded-full bg-indigo-600 w-20 text-center '>EDIT</button>
         </a>
         <a className='' href='#'>
          <button className=' hover:bg-purple-500 text-white px-4 py-2 rounded-full bg-indigo-600 w-20 text-center '>DELETE</button>
         </a>
       </div>
       </div>
      
       
       </div>
  )
}

export default ViewerPage