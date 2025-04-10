import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { setNowPlayingMovies } from '../store/moviesSlice'

const Browse = () => {

  const dispatch = useDispatch()


  const nowPlayingMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=hi&page=1', API_OPTIONS)
    const data = await response.json()
    console.log(data.results)
    dispatch(setNowPlayingMovies(data.results))
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
