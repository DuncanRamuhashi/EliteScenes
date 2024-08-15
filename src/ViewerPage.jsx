import React from 'react'
import mov2 from './Images/mov2.png'
import { useState,useEffect } from 'react';
import { redirect, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer} from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';



const ViewerPage = () => {
   // retrieve id from URL
   const { idProper } = useParams();
        
  //scenes listings
  const [sceneList, setSceneList] =  useState([]);
  
  const navigate = useNavigate();
  const goToEditPage= () => {
    navigate(`/EditPage/${idProper}`);
  }
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
          

 const deleteScene =  async (id) => {

  
  //const res =  await fetch(`http://localhost:8000/FakeDB?id${id}`,{
        console.log('delete',id)
        try {
          // Make a DELETE request to the API (adjust the URL as needed)
          const res = await fetch(`http://localhost:8000/FakeDB/${id}`, {
            method: 'DELETE',
          });
      
          // Check if the response is ok (status in the range 200-299)
          if (!res.ok) {
            throw new Error('Failed to delete the scene');
          }
      
          // Optionally, you could parse the response if needed
          const data = await res.json();
          console.log('Delete response:', data);
          toast.success('Deleted Successfully');
          // You can also handle any UI updates here after successful deletion
        } catch (error) {
          console.error('Error deleting scene:', error);
          alert('An error occurred while deleting the scene. Please try again.');
          toast.error('Deleted Successfully');
        }
 
};
 // delete helper
 const onDeleteClick = (e,thisID) => {
  e.preventDefault(); 
  const confirm = window.confirm('Are you sure you want to delete this ?')

  if(!confirm ) return;
  deleteScene(thisID);
  //onClick={(e) => onDeleteClick(e,param.id)
    navigate('/#Home');
 };
  return (
    <div  className='py-20 flex-col md:flex-row flex justify-center justify-items-center'>   

           
       {sceneList.map(param => ( 

        param.id == idProper ? 
    
                   <div key={param.id} className='flex' ><div className=" snap-start flex-shrink-0  px-20    " >
             <a>
               <img src={param.image} alt='mov' className='w-80 h-96 object-cover'>

               </img>
             </a>

           </div><div className='grid'>
               <h1 className='text-center text-4xl font-semibold'>{param.name}</h1>
               <div className=' flex flex-col space-y-6'>

                 <div className='flex flex-row space-x-6'>
                   
                   <div className='box-content h-32 w-72  border-4  border-white pt-4 '>
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
                   <a className='' href='' onClick={goToEditPage}>
                     <button className=' hover:bg-purple-500 text-white px-4 py-2 rounded-full bg-indigo-600 w-20 text-center '>EDIT</button>
                   </a>
                   <a className='' href='' onClick={(e) => onDeleteClick(e,param.id)}>
                     <button className=' hover:bg-purple-500 text-white px-4 py-2 rounded-full bg-indigo-600 w-20 text-center '>DELETE</button>
                   </a>
                 </div>
               </div>

             </div>
             </div>
       
       
        : ""
           
         ))}
     
      
       
       </div>
  )
}

export default ViewerPage