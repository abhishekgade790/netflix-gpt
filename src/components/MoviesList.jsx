import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({ title, movies }) => {
    return (
        <div className="px-4 py-2 ">
            <h1 className="text-white text-xl font-semibold mb-2 ml-2">{title}</h1>

            <div
                className="
          flex 
          overflow-x-auto 
          snap-x 
          snap-mandatory 
          scroll-smooth 
        no-scrollbar"
            >
                {movies && movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="snap-start shrink-0 w-[120px] sm:w-[150px] md:w-[170px] aspect-[2/3]"
                    >
                        <MovieCard poster_path={movie.poster_path} />
                    </div>

                ))}
            </div>
        </div>
    )
}

export default MoviesList
