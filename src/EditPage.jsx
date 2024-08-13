import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const EditPage = () => {
    //scenes listings
   const [sceneList, setSceneList] =  useState([]);
   const { idProper } = useParams();
    
   useEffect(() => {
    const fetchlist = async () => {
      try {
        const res = await fetch('http://localhost:8000/FakeDB?category=Movies');
        const data = await res.json();
        setSceneList(data);
      } catch (error) {
        console.error('There was an error fetching data', error);
      }
    };
    fetchlist();
   
  }, [])
  return (
    <div className='py-20 flex-col md:flex-row flex justify-center justify-items-center'>   
    
    <div className=" snap-start flex-shrink-0  px-20    ">
             <a>
               <img src={""} alt='mov' className='w-80 h-96 object-cover'>

               </img>
             </a>
               
           </div>
           <div className='grid'>
               <h1 className='text-center text-4xl font-semibold'>Edit {""}</h1>
               <div className=' flex flex-col space-y-6'>

                 <div className='flex flex-row space-x-6'>
                   
                   <div className='box-content h-32 w-72  border-4  border-white pt-4 '>
                   <input
              id='description'
         className='px-4 py-2 ring-2 ring-gray-400 w-80 bg-white rounded-lg placeholder-zinc-400 h-40 w-20'
          placeholder="Movie / Series Description"
               required

             />
                   </div>


                 </div>
                 <div className='flex flex-row space-x-6'>
                   <h1 className=' text-base font-bold '>Country: </h1>
                   <h1 className=' text-base '>{""}</h1>

                 </div>

                 <div className='flex flex-row space-x-6'>
                   <h1 className=' text-base  font-bold'>Year: </h1>
                   <h1 className=' text-base '>{""}</h1>

                 </div>
                 <div className='flex flex-row space-x-6'>
                   <h1 className=' text-base font-bold '>Type: </h1>
                   <h1 className=' text-base '>{""}</h1>

                 </div>



               </div>

             </div>
    </div>
  )
}

export default EditPage