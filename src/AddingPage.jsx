import React from 'react';
import FakeDB  from './FakeDB';
import { v4 as uuidv4 } from 'uuid'; 
import  {useState, useEffect} from 'react';

const AddingPage = () => {
   const [name,setName] = useState('');
   const [description,setDescription] = useState('');
   const [country,setCountry] = useState('');
   const [year,setYear] = useState('');
   const [category,setCategory] = useState('');
   const [image,setImage] = useState('');
   const [id,setID] = useState('');
   const [uploadImage,setUploadImage] = useState(null);
    
   const generateRandomId = () => {
      return Math.floor(Math.random() * 1000000) + 1;
    }
    
   const handleImageChange = (e) => {
      const file = e.target.files[0];
     
      if(file) {
         const reader = new FileReader();
         reader.onloadend = () => {
            setUploadImage(reader.result);
         

            setImage(reader.result);
             
         };

         reader.readAsDataURL(file);
          
      }
   }

   const submitData = async () => {

      const newData = {
         id: Math.floor(Math.random() * 1000000) + 1,
         name,
         description,
         country,
         year,
         category,
         image,

      }
      try {
         const res = await fetch('http://localhost:8000/FakeDB', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify(newData),
         });
 
         if (!res.ok) {
             throw new Error(`HTTP error! status: ${res.status}`);
         }
 
         const data = await res.json();
         console.log('Data added successfully:', data);
     } catch (error) {
         console.error('There was an error adding the data:', error);
     }
      console.log(newData);
   }


  return (
<div className='py-20  flex justify-center justify-items-center'>   
      <div className="snap-start flex-shrink-0  px-20   ">
    <a >
       <input id='file-upload' type='file' accept='image/*' onChange={handleImageChange}>
        
       </input>
       <span className=''>Upload Image </span>
       {
         uploadImage && (
            <img src={uploadImage}  alt='Upload Movie Poster' className='w-80 h-96 object-cover text-center bg-gray-400'>
         
            </img>
         )
       }
       
       
    </a> 
         
       </div> 
       <div className='pr-40 flex flex-col space-y-6'> 
        <div>
        <h1 className=' text-xl '>Movie/Series name</h1>

           <div className='flex flex-col  self-center  w-full max-w-lg '>
        <input
        id='name'
         className='px-4 py-2 ring-2 ring-gray-400 w-80 bg-white rounded-lg placeholder-zinc-400'
          placeholder="Movie/Series name"
          value={name}      
          onChange={(e) => setName(e.target.value)}
               required 
             />
         </div>
        </div>
        <div>
        <h1 className=' text-xl '>Description</h1>

           <div className='flex flex-col  self-center  w-full max-w-lg '>
        <input
        id='description'
         className='px-4 py-2 ring-2 ring-gray-400 w-80 bg-white rounded-lg placeholder-zinc-400'
          placeholder="Movie / Series Description"
               required
               value={description}      
               onChange={(e) => setDescription(e.target.value)}
             />
         </div>
        </div>
        <div>
        <h1 className=' text-xl '>Country</h1>

           <div className='flex flex-col  self-center  w-full max-w-lg '>
        <input
        id='country'
         className='px-4 py-2 ring-2 ring-gray-400 w-80 bg-white rounded-lg placeholder-zinc-400'
          placeholder="Select country"
               required
               value={country}      
               onChange={(e) => setCountry(e.target.value)}
             />
         </div>
        </div>
        <div>
        <h1 className=' text-xl '>Year</h1>

           <div className='flex flex-col  self-center  w-full max-w-lg '>
        <input
        id='year'
        type='number'
         className='px-4 py-2 ring-2 ring-gray-400 w-80 bg-white rounded-lg placeholder-zinc-400'
          placeholder="2024"
               required
               value={year}      
               onChange={(e) => setYear(e.target.value)}
               min="1900"
               max={new Date().getFullYear()} 
             />
         </div>
        </div>
        <h1 className=' '>Category</h1>

         <select id='category' 
                   value={category}      
                   onChange={(e) => setCategory(e.target.value)}>
                     <option value='...'>....</option>
                     <option value='Movies'>Movie</option>
                     <option value='Series'>Series</option>

         </select>

        <a className='' onClick={submitData} href='#'>
          <button className=' hover:bg-purple-500 text-white px-4 py-2 rounded-full bg-indigo-600 w-80 text-center '>SAVE</button>
         </a>
       </div>
      
       
       </div>
  )
}

export default AddingPage