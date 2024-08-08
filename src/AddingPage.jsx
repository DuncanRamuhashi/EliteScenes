import React from 'react'

const AddingPage = () => {
  return (
<div className='py-20  flex justify-center justify-items-center'>   
      <div className="snap-start flex-shrink-0  px-20   ">
    <a >
       <img src=" " alt='Upload Movie Poster' className='w-80 h-96 object-cover text-center bg-gray-400'>
         
       </img>
       
    </a> 
         
       </div> 
       <div className='pr-40 flex flex-col space-y-6'> 
        <div>
        <h1 className=' text-xl '>Movie/Series name</h1>

           <div className='flex flex-col  self-center  w-full max-w-lg '>
        <input
         className='px-4 py-2 ring-2 ring-gray-400 w-80 bg-white rounded-lg placeholder-zinc-400'
          placeholder="Movie/Series name"
               required 
             />
         </div>
        </div>
        <div>
        <h1 className=' text-xl '>Description</h1>

           <div className='flex flex-col  self-center  w-full max-w-lg '>
        <input
         className='px-4 py-2 ring-2 ring-gray-400 w-80 bg-white rounded-lg placeholder-zinc-400'
          placeholder="Movie / Series Description"
               required
             />
         </div>
        </div>
        <div>
        <h1 className=' text-xl '>Country</h1>

           <div className='flex flex-col  self-center  w-full max-w-lg '>
        <input
         className='px-4 py-2 ring-2 ring-gray-400 w-80 bg-white rounded-lg placeholder-zinc-400'
          placeholder="Select country"
               required
             />
         </div>
        </div>
        <div>
        <h1 className=' text-xl '>Year</h1>

           <div className='flex flex-col  self-center  w-full max-w-lg '>
        <input
         className='px-4 py-2 ring-2 ring-gray-400 w-80 bg-white rounded-lg placeholder-zinc-400'
          placeholder="2024 / 08 / 01"
               required
             />
         </div>
        </div>

        <div className='flex flex-row space-x-20'>
            <div className='space-x-4 '>
                <input className='checked:bg-blue-500 ' type='radio'/>
                <label>Movie</label>
            </div>
            <div className='space-x-4'>
                <input className='checked:bg-blue-700' type='radio'/>
                <label>Series</label>
            </div> 
        </div>
        <a className='' href='#'>
          <button className=' hover:bg-purple-500 text-white px-4 py-2 rounded-full bg-indigo-600 w-80 text-center '>SAVE</button>
         </a>
       </div>
      
       
       </div>
  )
}

export default AddingPage