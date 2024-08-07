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
const LatestSeries = () => {
  return (
    <div className='justify-center   '>
    <h1 className=' pt-14 text-lg text-center'> LATEST SERIES </h1>


   
      <div className='flex  flex-col py-2 px-52'>
      <div className=' flex grid grid-cols-4 gap-y-4  py-8  justify-center  justify-items-center '>
    <div className="snap-start flex-shrink-0 ">
    <a>
        <img src={se1} alt='Series' className='w-48 h-64 object-cover'>
        </img>
        </a> 
    
    </div>
    <div className="snap-start flex-shrink-0   ">
     <a>
        <img src={se2} alt='Series' className='w-48 h-64 object-cover'>
        
        </img>
     </a> 
          
        </div>
        <div className="snap-start flex-shrink-0 ">
        <a>
        <img src={se3} alt='Series' className='w-48 h-64 object-cover'>
        
        </img>
        </a> 
         
        </div>
        <div className="snap-start flex-shrink-0    ">
        
        <a>
        <img src={se4} alt='Series' className='w-48 h-64 object-cover'>
        
        </img>
        </a> 
        </div>

        <div className="snap-start flex-shrink-0   ">
        
        <a>
        <img src={se5} alt='Series' className='w-48 h-64 object-cover'>
        
        </img>
        </a> 
        </div>
        <div className="snap-start flex-shrink-0  ">
        <a>
        <img src={se6} alt='Series' className='w-48 h-64 object-cover'>
        
        </img>
        </a> 
         
        </div>
        <div className="snap-start flex-shrink-0   ">
        <a>
        <img src={se7} alt='Series' className='w-48 h-64 object-cover'>
        
        </img>
        </a> 
         
        </div>
        <div className="snap-start flex-shrink-0   ">
        <a>
        <img src={se8} alt='Series' className='w-48 h-64 object-cover'>
        </img>
        </a> 
         
        </div>







    </div> 
       <div className='justify-end justify-items-end flex  pr-20'>
       <a className='' href='#'>
          <button className=' hover:bg-purple-500 text-white px-4 py-2 rounded-full bg-indigo-600 w-20 text-center '>More</button>
         </a>
       </div>
         
      </div>
</div>
  )
}

export default LatestSeries