import React from 'react'
import se1 from './Images/se1.jpg'
import se2 from './Images/se2.jpg'
import se3 from './Images/se3.png'
import se4 from './Images/se4.jpg'
import se5 from './Images/se5.png'
import se6 from './Images/se6.jpg'
import se7 from './Images/se7.png'
import se8 from './Images/se8.png'
import se9 from './Images/se9.jpg'
import se10 from './Images/se10.png'
import se11 from './Images/se11.jpg'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
const SeriesPage = () => {
    const navigate = useNavigate();
  
    const goToAddPage= () => {
      navigate('/AddingPage');
    }

    const goToViewerPage = (idProper)  => {
    
      navigate(`/ViewerPage/${idProper}`);
    }
        //Sceene listings
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
    <div className='flex flex-col items-center'>
    <div className='flex justify-end w-full px-4 sm:px-8 md:px-20 py-7'>
        <a onClick={goToAddPage}>
            <button className='hover:bg-purple-500 text-white px-4 py-2 rounded-full bg-indigo-600 w-20 text-center'>ADD</button>
        </a>
    </div>

    <div className='flex flex-col py-2 px-4 sm:px-8 md:px-12 lg:px-52'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-8 justify-items-center'>
            {sceneList.map(param => (
                param.category === "Series" ? (
                    <div className='snap-start flex-shrink-0' key={param.id}>
                        <a onClick={(e) => {
                            e.preventDefault(); // Prevent the default anchor behavior
                            goToViewerPage(param.id); // Pass the id to the function
                        }} href=''>
                            <img src={param.image} alt='scene' className='w-48 h-64  object-cover' />
                        </a>
                    </div>
                ) : null
            ))}
        </div>
    </div>
</div>

  )
}

export default SeriesPage