import EliteSceneCover from './assets/EliteSceneCover.jpg';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';


const CoverPage  = (Title) =>  {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  const navigate = useNavigate();
  const goToSeries= () => {
    navigate('/SeriesPage');
  }
 
  
  const goToMovies = () => {
    navigate('/MoviePage');
  }
  return (
<div className='flex'>
    <div
        className='relative h-96 w-full bg-no-repeat bg-cover bg-center'
        style={{ backgroundImage: `url(${EliteSceneCover})` }}
    >
        <header>
            <div className='container flex flex-wrap items-center justify-between py-8 px-4 md:px-8'>
                <a href='/'>
                    <div className='flex items-center border-2 border-x-purple-800 border-y-violet-200'>
                        <h1 className='font-bold text-2xl md:text-4xl bg-gradient-to-r from-violet-500 to-fuchsia-500'>
                            Elite
                        </h1>
                        <h1 className='font-bold text-2xl md:text-4xl bg-gradient-to-r from-violet-500 to-fuchsia-500'>
                            Scences
                        </h1>
                    </div>
                </a>
                <button
          className="text-white text-2xl md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
        >
          &#9776;
        </button>
                <nav className={`bg-gradient-to-r ps-4 md:ps-20 ${ menuOpen ? 'block' : 'hidden'} md:flex`  }>
                    <ul className='flex flex-col md:flex-row space-x-0 md:space-x-2 items-center justify-between'>
                        <li className='text-white hover:bg-purple-500 px-4 py-2 rounded transition duration-200'>
                            <a href='' onClick={goToMovies} className='hover:underline'>
                                Movies
                            </a>
                        </li>
                        <li className='text-white hover:bg-purple-500 px-4 py-2 rounded transition duration-200'>
                            <a href='' onClick={goToSeries} className='hover:underline'>
                                Series
                            </a>
                        </li>
                        <div className='mt-2 md:mt-0'>
                            <a href='#' className=''>
                                <button className='hover:bg-purple-500 text-white px-4 py-2 rounded-lg'>
                                    SUBSCRIBE
                                </button>
                            </a>
                        </div>
                    </ul>

    
  
                </nav>
               
            </div>
           
        </header>
    </div>
</div>

  );
}

export default CoverPage