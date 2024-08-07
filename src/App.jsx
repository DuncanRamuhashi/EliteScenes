import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CoverPage from './CoverPage';
import LatestMovies from './LatestMovies';
import LatestSeries from './LatestSeries';
import FooterFinal from './FooterFinal';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MoviePage from './MoviePage';
import SeriesPage from './SeriesPage';
import ViewerPage from './ViewerPage';
import AddingPage from './AddingPage';

function App() {
 

  return (
    <>
       
       
       
       
      <Router>
        <section id="Home"><CoverPage/></section>
        <Routes>
          
          <Route  path="/MoviePage" element={<MoviePage/>}/>
          <Route  path="/SeriesPage" element={<SeriesPage/>}/>
          <Route  path="/ViewerPage" element={<ViewerPage/>}/>
          <Route  path="/AddingPage" element={<AddingPage/>}/>
          
            <Route
               path="*"
               element={
                <>
                  
                   <section id="Movies"><LatestMovies/></section>
                   <section id="Series"><LatestSeries/></section>
                  
                   
                </>
               }
            />
        </Routes>
        <section id=""><FooterFinal/></section>
      </Router>
    </>
  )
}

export default App
