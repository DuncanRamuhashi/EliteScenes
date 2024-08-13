import React from 'react'
import mov2 from './Images/mov2.png'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ViewerPage = () => {
   // retrieve id from URL
   const { idProper } = useParams();
        
  //scenes listings
  const [sceneList, setSceneList] =  useState([]);
  
    
  useEffect(() => {
   const fetchlist = async () => {
     try {
       const res = await fetch('http://localhost:8000/FakeDB');
       const data = await res.json();
       
       setSceneList(data);
     } catch (error) {
       console.error('There was an error fetching data', error);
     }
   };
   fetchlist();
 }, [])

  return (
    <div className='py-20  flex justify-center justify-items-center'>   

           
       {sceneList.map(param => ( 

        param.id == idProper ? 
        <><div className="snap-start flex-shrink-0  px-20    ">
             <a>
               <img src={param.image} alt='mov' className='w-80 h-96 object-cover'>

               </img>
             </a>

           </div><div className='grid'>
               <h1 className='text-center text-4xl font-semibold'>{param.name}</h1>
               <div className=' flex flex-col space-y-6'>

                 <div className='flex flex-row space-x-6'>
                   
                   <div className='box-content h-32 w-72  border-4  '>
                     <h1 className=' text-sm '>{param.description}</h1>
                   </div>


                 </div>
                 <div className='flex flex-row space-x-6'>
                   <h1 className=' text-base font-bold '>Country: </h1>
                   <h1 className=' text-base '>{param.country}</h1>

                 </div>

                 <div className='flex flex-row space-x-6'>
                   <h1 className=' text-base  font-bold'>Year: </h1>
                   <h1 className=' text-base '>{param.year}</h1>

                 </div>
                 <div className='flex flex-row space-x-6'>
                   <h1 className=' text-base font-bold '>Type: </h1>
                   <h1 className=' text-base '>{param.category}</h1>

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

             </div></>
        : ""
           
         ))}
     
      
       
       </div>
  )
}

export default ViewerPage