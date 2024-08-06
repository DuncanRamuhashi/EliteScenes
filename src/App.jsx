import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CoverPage from './CoverPage';
import LatestMovies from './LatestMovies';
import LatestSeries from './LatestSeries';
import FooterFinal from './FooterFinal';

function App() {
 

  return (
    <>
       <CoverPage/>
       <LatestMovies/>
       <LatestSeries/>
       <FooterFinal/>
      
    </>
  )
}

export default App
