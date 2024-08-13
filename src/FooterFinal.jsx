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
    <footer>
    <div className='flex flex-col sm:flex-row bg-gray-300 h-auto w-full justify-between items-center px-4 sm:px-12 py-4'>
        <div className='py-2'>
            <a href='/' className=''>
                <div className='flex hover:bg-purple-500 rounded-lg items-center border-2 border-x-purple-800'>
                    <h1 className='font-bold text-2xl sm:text-4xl'>Elite</h1>
                    <h1 className='font-bold text-2xl sm:text-4xl'>Scences</h1>
                </div>
            </a>
        </div>

        <div className='flex space-x-6 sm:space-x-14 flex-grow justify-center   '>
            <a href='' onClick={goToMovies} className='hover:bg-purple-500 rounded-lg px-2 py-1 sm:px-4 sm:py-2'>
                MOVIES
            </a>
            <a href='' onClick={goToSeries} className='hover:bg-purple-500 rounded-lg px-2 py-1 sm:px-4 sm:py-2'>
                SERIES
            </a>
        </div>

        <div className='py-2 hidden md:block'>
            <a href="#">
                <button className="hover:bg-purple-500 text-black px-2 py-1 sm:px-4 sm:py-2 rounded-lg">SUBSCRIBE</button>
            </a>
        </div>
    </div>
</footer>

    
  )
}

export default FooterFinal