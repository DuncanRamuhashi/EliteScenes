import React from 'react'
import mov1 from './Images/mov1.png'
import mov2 from './Images/mov2.png'
import mov3 from './Images/mov3.png'
import mov4 from './Images/mov4.png'
import mov5 from './Images/mov5.png'
import mov6 from './Images/mov6.png'
import mov7 from './Images/mov7.png'
import mov8 from './Images/mov8.png'
import mov9 from './Images/mov9.png'
import mov10 from './Images/mov10.png'
import mov11 from './Images/mov11.png'
import mov12 from './Images/mov12.jpg'
import mov13 from './Images/mov13.png'
import mov14 from './Images/mov14.png'
import mov15 from './Images/mov15.png'
import mov16 from './Images/mov16.png'
import listHelper from './listHelper'
 

import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const MoviePage = () => {
    const navigate = useNavigate();
  
    const goToAddPage= () => {
      navigate('/AddingPage');
    }
    const goToViewerPage = () => {
        navigate('/ViewerPage');
      }
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
    <div className='justify-center   '>
      <div className='justify-end justify-items-end flex  pr-20 py-7'>
       <a className='' onClick={goToAddPage}>
          <button className=' hover:bg-purple-500 text-white px-4 py-2 rounded-full bg-indigo-600 w-20 text-center '>ADD</button>
         </a>
       </div> 
      <div className='flex  flex-col py-2 px-52'>
      <div className=' flex grid grid-cols-4 gap-y-4  py-8  justify-center  justify-items-center '>

             {sceneList.map(param => ( 

              param.category == "Movies" ? <div className='snap-start flex-shrink-0 ' key={param.id}>
                     
              <a onClick={goToViewerPage} href=''>
                  <img src={param.image} alt='scene' className='w-48 h-64 object-cover' />
             </a> 
            
       </div>: ""

              ))}




 






    </div> 

         
      </div>
</div>
  )
}

export default MoviePage