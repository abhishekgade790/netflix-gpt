import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((state) => state.movies)

  return (
    <div className='bg-black'>
      <div className='relative z-40 -mt-5 md:-mt-20 lg:-mt-65 xl:-mt-75'>
        {movies && <MoviesList title={"Now Playing"} movies={movies?.nowPlayingMovies} />}
        {movies && <MoviesList title={"Now Playing"} movies={movies?.nowPlayingMovies} />}
        {movies && <MoviesList title={"Now Playing"} movies={movies?.nowPlayingMovies} />}
      </div>
    </div>
  )
}

export default SecondaryContainer
