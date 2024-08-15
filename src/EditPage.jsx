import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const EditPage = () => {
   
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [country,setCountry] = useState('')
    const [year,setYear] = useState('');
    const [category,setCategory] = useState('');
  
    const [image,setImage] = useState('');
    //scenes listings
   const [sceneList, setSceneList] =  useState([]);
   const { idProper } = useParams();
   
   const handleClick = () => {
    toast.success('Adding Successful');
};
   useEffect(() => {
    const fetchlist = async () => {
      try {
        const res = await fetch(`http://localhost:8000/FakeDB`);
        const data = await res.json();
        setSceneList(data);
      } catch (error) {
        console.error('There was an error fetching data', error);
      }
    };
    fetchlist();
   
  }, [])
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    
    if(file) {
       const reader = new FileReader();
       reader.onloadend = () => {
          setImage(reader.result);
          

          
           
       };

       reader.readAsDataURL(file);
       
    }
 }


  const setImageAndName = (name,photo) =>{

               setName(name);
               setImage(photo);
               
  }
       
  //Editing data 
  const submitData = async (id) => {

    const newData = {
       
       name,
       description,
       country,
       year,
       category,
       image 

    }
    try {
       const res = await fetch(`http://localhost:8000/FakeDB/${id}`, {
           method: 'PUT',
           headers: {
               'Content-Type': 'application/json',
           }, 
           body: JSON.stringify(newData),
           
       });
      
       if (!res.ok) {
           throw new Error(`HTTP error! status: ${res.status}`);
       }
         
       const data = await res.json();
       toast.success('Edit is Successful');
       navigate('/#Home');
       console.log('Data added successfully:', data);
   } catch (error) {
       console.error('There was an error adding the data:', error);
       toast.error('Not Edited');
   }
    console.log(newData);
 }


 const handleSubmit = (e,id) => {
    e.preventDefault(); // Prevent the default form submission
    submitData(id); // Call submitData with the correct ID
};
  return (
    
    <div className='py-20 flex flex-col md:flex-row justify-center items-center'>
  <ToastContainer />
  {sceneList.map(param => (
    param.id === idProper && (
      <div className='flex flex-col md:flex-row w-full md:max-w-4xl' key={idProper}>
        <div className="snap-start flex-shrink-0 px-4 md:px-20">
          <input
            id='file-upload'
            type='file'
            accept='image/*'
            onChange={handleImageChange}
            className="mb-4 w-full" // Added margin for spacing
          />
          <img
            src={param.image}
            alt="mov"
            className="w-full h-60 md:w-80 md:h-96 object-cover"
          />
        </div>
        <div className="grid space-y-8 px-4 md:px-0 w-full">
          <h1 className="text-center text-3xl md:text-4xl font-semibold">Edit {param.name}</h1>
          <div className="flex flex-col space-y-10">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-row items-center space-x-6">
                <h1 className="text-base font-bold">Title:</h1>
                <div className="w-full border-4 border-white pt-4">
                  <textarea
                    id="description"
                    className="px-4 py-2 ring-2 ring-gray-400 w-full bg-white text-justify rounded-lg placeholder-zinc-400 h-10 resize-none"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={param.name}
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-row items-center space-x-6">
                <h1 className="text-base font-bold">Description:</h1>
                <div className="w-full border-4 border-white pt-4">
                  <textarea
                    id="description"
                    className="px-4 py-2 ring-2 ring-gray-400 w-full bg-white text-justify rounded-lg placeholder-zinc-400 h-40 resize-none"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder={param.description}
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-row items-center space-x-6">
                <h1 className="text-base font-bold">Country:</h1>
                <input
                  id="Country"
                  className="px-4 py-2 ring-2 ring-gray-400 w-full bg-white rounded-lg placeholder-zinc-400"
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder={param.country}
                  value={country}
                />
              </div>
              <div className="flex flex-row items-center space-x-6">
                <h1 className="text-base font-bold">Year:</h1>
                <input
                  type='number'
                  id="Year"
                  className="px-4 py-2 ring-2 ring-gray-400 w-full bg-white rounded-lg placeholder-zinc-400"
                  onChange={(e) => setYear(e.target.value)}
                  placeholder={param.year}
                  value={year}
                />
              </div>
              <div className="flex flex-row items-center space-x-6">
                <h1 className="text-base font-bold">Category:</h1>
                <select
                  id='category'
                  className="px-4 py-2 ring-2 ring-gray-400 w-full bg-white rounded-lg placeholder-zinc-400"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value='...'>....</option>
                  <option value='Movies'>Movie</option>
                  <option value='Series'>Series</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <a onClick={(e) => handleSubmit(e, idProper)} href="#">
              <button className="hover:bg-purple-500 text-white px-4 py-2 rounded-full bg-indigo-600 w-full md:w-96 text-center">
                SAVE 
              </button>
            </a>
          </div>
        </div>
      </div>
    )
  ))}
</div>

  )
}

export default EditPage