import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditPage = () => {
   
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [country,setCountry] = useState('')
    const [year,setYear] = useState('');
    const [category,setCategory] = useState('');
    //scenes listings
   const [sceneList, setSceneList] =  useState([]);
   const { idProper } = useParams();
    
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
    <div className='py-20 flex-col md:flex-row flex justify-center justify-items-center'>   
         
       {sceneList.map(param  => (
           param.id == idProper ?
            <>
                    <div className="snap-start flex-shrink-0 px-4 md:px-20">
  <a>
    <img
      src={param.image}
      alt="mov"
      className="w-full h-60 md:w-80 md:h-96 object-cover"
    />
  </a>
</div>
<div className="grid space-y-8 px-4 md:px-0">
  <h1 className="text-center text-3xl md:text-4xl font-semibold">Edit {param.name}</h1>
  <div className="flex flex-col space-y-10">
    <div className="flex flex-row space-x-6">
      <h1 className="text-base font-bold">Country: </h1>
      <div className="box-content h-32 w-full border-4 border-white pt-4">
        <textarea
          id="description"
          className="px-4 py-2 ring-2 ring-gray-400 w-full bg-white text-justify rounded-lg placeholder-zinc-400 h-40 resize-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={param.description}
        ></textarea>
      </div>
    </div>

    <div className="flex flex-row space-x-6">
      <h1 className="text-base font-bold">Country: </h1>
      <input
        id="Country"
        className="px-4 py-2 ring-2 ring-gray-400 w-full bg-white rounded-lg placeholder-zinc-400"
        onChange={(e) => setCountry(e.target.value)}
        placeholder={param.country}
        value={country}
      />
    </div>

    <div className="flex flex-row space-x-10">
      <h1 className="text-base font-bold">Year: </h1>
      <input
      type='number'
        id="Year"
        className="px-4 py-2 ring-2 ring-gray-400 w-full bg-white rounded-lg placeholder-zinc-400"
        onChange={(e) => setYear(e.target.value)}
        placeholder={param.year}
        value={year}
      />
    </div>

    <div className="flex flex-row space-x-10 text-black">
      <h1 className="text-base font-bold">Type: </h1>
      <input
        id="Type"
        className="px-4 py-2 ring-2 ring-gray-400 w-full bg-white rounded-lg placeholder-zinc-400"
        onChange={(e) => setCategory(e.target.value)}
        placeholder={param.category}
        value={category}
      />
    </div>
  </div>

  <div className="flex justify-center">
    <a onClick={""} href="#">
      <button className="hover:bg-purple-500 text-white px-4 py-2 rounded-full bg-indigo-600 w-full md:w-96 text-center">
        SAVE 
      </button>
    </a>
  </div>
</div>

            </>
           : ""
        ) )}
    
    </div>
  )
}

export default EditPage