import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((state) => state.movies)

  return (
    <div className='bg-black/80'>
      <div className='relative  -mt-5 md:-mt-20 lg:-mt-65 xl:-mt-75 pt-4'>
        {movies && <MoviesList title={"Now Playing"} movies={movies?.nowPlayingMovies} />}
        {movies && <MoviesList title={"Popular"} movies={movies?.popularMovies} />}
        {movies && <MoviesList title={"Top Rated"} movies={movies?.topRatedMovies} />}
        {movies && <MoviesList title={"Upcoming"} movies={movies?.upcomingMovies} />}
      </div>
    </div>
  )
}

export default SecondaryContainer
