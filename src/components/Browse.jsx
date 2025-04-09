import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'

const Browse = () => {

  const nowPlayingMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
    const data = await response.json()
    console.log(data.results)
  }

  useEffect(()=>{
    nowPlayingMovies()
  },[])

  return (
    <div>
      <h1>Browse</h1>
    </div>
  )
}

export default Browse
