import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CoverPage from './CoverPage';
import LatestMovies from './LatestMovies';
import LatestSeries from './LatestSeries';
import FooterFinal from './FooterFinal';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function App() {
 

  return (
    <>
       
       
       
       
      <Router>
        <Routes>
            <Route
               path="*"
               element={
                <>
                   <section id="Home"><CoverPage/></section>
                   <section id="Movies"><LatestMovies/></section>
                   <section id="Series"><LatestSeries/></section>
                   <section id=""><FooterFinal/></section>
                </>
               }
            />
        </Routes>
      </Router>
    </>
  )
}

export default App
