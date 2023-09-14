import React from 'react'
import Homepage from './Homepage/Homepage.jsx'
import Movie from './movie-page/Movie.jsx'

import './index.css'

import  { Route, Router, Routes} from 'react-router-dom'


export default function App() {
  return (
  <div className='app'>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path='/Movie/:movieId' element={<Movie />}/>
    </Routes>

  </div>
   
  )
}


