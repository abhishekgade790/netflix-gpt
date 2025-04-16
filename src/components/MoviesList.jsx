import React, { useState } from 'react';
import MovieCard from './MovieCard';

const MoviesList = ({ title, movies }) => {
  const [activeOverlayId, setActiveOverlayId] = useState(null); // 👈 manage one active overlay at a time

  return (
    <div className="px-4 py-2">
      <h1 className="text-white md:text-xl font-semibold md:mb-2 ml-2">{title}</h1>

      <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
        {movies?.map((movie) =>
          movie.poster_path && (
            <div
              key={movie.id}
              className="snap-start shrink-0 w-[110px] md:w-[170px] aspect-[2/3]"
            >
              <MovieCard
                movie={movie}
                activeOverlayId={activeOverlayId}
                setActiveOverlayId={setActiveOverlayId}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MoviesList;
