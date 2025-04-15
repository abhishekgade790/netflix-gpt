import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';

const MovieCard = ({ poster_path }) => {
  const [isLoading, setIsLoading] = useState(true);

  if (!poster_path) return null;

  const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className="w-full h-full overflow-hidden flex justify-center items-center relative">
      {isLoading && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 z-10">
          <ClipLoader color="#f87171" size={40} />
        </div>
      )}
      <img
        src={imgUrl}
        alt="Movie Poster"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)} // Hide loader on error too
        className={`w-full h-full p-2 object-cover transition-transform duration-300 hover:scale-105 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  );
};

export default MovieCard;
