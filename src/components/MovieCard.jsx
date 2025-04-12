// MovieCard.js
import React from 'react'

const MovieCard = ({ poster_path }) => {
  const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`

  return (
    <div className="w-full h-full  overflow-hidden">
      <img
        src={imgUrl}
        alt="Movie Poster"
        className="w-full p-2 h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  )
}

export default MovieCard
