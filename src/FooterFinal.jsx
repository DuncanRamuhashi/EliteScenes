import React from 'react'
import { useNavigate } from 'react-router-dom';
const FooterFinal = () => {
  const navigate = useNavigate();
  const goToSeries= () => {
    navigate('/SeriesPage');
  }
 
  
  const goToMovies = () => {
    navigate('/MoviePage');
  }
  return (
    <div className='flex bg-gray-400 h-20 space-x-96 '>
            <div className=' py-4 pl-12'>
            <a href='/' className=''>
                    <div className='flex hover:bg-purple-500 rounded-lg items-center border-2 border-x-purple-800 border-y-violet-200'>
                        
                           <h1 className=' font-bold text-4xl '> Elite    </h1>  
                           <h1  className=' font-bold text-4xl  '> Scences   </h1>  
                        
                           
                        
                    </div>


                    </a>
            </div>
            
            <div className='py-6 flex space-x-14 '>
              <a href='' onClick={goToMovies} className='hover:bg-purple-500 rounded-lg'>
                MOVIES 
              </a>
              <a href='' onClick={goToSeries} className='hover:bg-purple-500 rounded-lg'>
                SERIES
              </a>
            </div>
            <div className='ps-20 py-4'>
                           <a href="#" className="">
                              <button className=" hover:bg-purple-500 text-black px-4 py-2 rounded-lg">SUBSCRIBE</button>
                             </a>
                           </div>
               </div>
  )
}

export default FooterFinal