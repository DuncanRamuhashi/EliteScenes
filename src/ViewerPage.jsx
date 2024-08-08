import React from 'react'
import mov2 from './Images/mov2.png'
const ViewerPage = () => {
  return (
    <div className='py-20  flex justify-center justify-items-center'>   
      <div className="snap-start flex-shrink-0  px-20    ">
    <a>
       <img src={mov2} alt='mov' className='w-80 h-96 object-cover'>
       
       </img>
    </a> 
         
       </div> 
       <div className='grid'>
       <h1 className='text-center text-4xl font-semibold'>Ringo Gringo</h1>
       <div className=' flex flex-col space-y-6'> 

        <div className='flex flex-row space-x-6'>
         <h1 className=' text-xl '>Description: </h1>
         <div className='box-content h-32 w-72  border-4  '>
         <h1 className=' text-sm '>GRINGO, a dark comedy mixed with white-knuckle action and dramatic intrigue, explores the battle of survival for businessman Harold Soyinka (David Oyelowo) when he finds himself crossing the line from law-abiding citizen to wanted criminal.</h1>
         </div>
        

         </div>
        <div className='flex flex-row space-x-6'>
         <h1 className=' text-xl '>Country: </h1>
         <h1 className=' text-xl '>South Africa</h1>

         </div>
        
         <div className='flex flex-row space-x-6'>
         <h1 className=' text-xl '>Year: </h1>
         <h1 className=' text-xl '>2012</h1>

         </div>   
       


        <div className='space-x-10  '>
       <a className='' href='#'>
          <button className=' hover:bg-purple-500 text-white px-4 py-2 rounded-full bg-indigo-600 w-20 text-center '>EDIT</button>
         </a>
         <a className='' href='#'>
          <button className=' hover:bg-purple-500 text-white px-4 py-2 rounded-full bg-indigo-600 w-20 text-center '>DELETE</button>
         </a>
       </div>
       </div>
      
       </div>
      
       
       </div>
  )
}

export default ViewerPage