import EliteSceneCover from './assets/EliteSceneCover.jpg';


import React from 'react';

const CoverPage  = () =>  {
  return (
    <div className=' flex '>
        <div className='relative  from-transparent  bg-top  h-96 w-screen bg-no-repeat' style={{ backgroundImage: `url(${EliteSceneCover})`
    , backgroundSize: 'cover',
    backgroundPosition: 'center', }}>
            <header>

                 <div className=' container flex flex-wrap items-center justify-between py-8  px-8 '>
                 <a href=''>
                    <div className='flex items-center border-2 border-x-purple-800 border-y-violet-200'>
                        
                           <h1 className=' font-bold text-4xl bg-gradient-to-r from-violet-500 to-fuchsia-500'> Elite    </h1>  
                           <h1  className=' font-bold text-4xl  bg-gradient-to-r from-violet-500 to-fuchsia-500'> Scences   </h1>  
                        
                           
                        
                    </div>


                    </a>

                          <nav className="  bg-gradient-to-r  ps-20 "> 
                            
                          <ul className="flex space-x-2 items-center justify-between">
                            <li className="text-white hover:bg-purple-500 px-4 py-2 rounded transition duration-200">
                              <a href="#" className="hover:underline">Movies</a>
                                </li>
                          <li className="text-white hover:bg-purple-500 px-4 py-2 rounded transition duration-200">
                       <a href="#" className="hover:underline">Series</a>
                           </li>
                           <div className='ps-20 '>
                           <a href="#" className="">
                              <button className=" hover:bg-purple-500 text-white px-4 py-2 rounded-lg">SUBSCRIBE</button>
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