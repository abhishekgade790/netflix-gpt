import React from 'react';
import { BACKGROUND_IMG_URL } from '../utils/constants';

const TrailerPlayer = ({ trailerKey, movieInfo }) => {
  if (!trailerKey || !movieInfo) return null;

  const { title, overview, release_date, vote_average, genres } = movieInfo;

  return (
    <div className="relative max-w-5xl mx-auto mt-[20vh] overflow-hidden shadow-xl">
      {/* Video */}
      <div className="w-full aspect-video ">
        <iframe
          className="w-full h-full mx-2"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=1&loop=0&modestbranding=1&showinfo=0`}
          title="Movie Trailer"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      {/* Scrollable Movie Info */}
      <div className=" p-6 text-white space-y-3 rounded-b-2xl">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-sm text-gray-300">{overview}</p>
        <div className="text-sm text-gray-400 space-y-1">
          <p><strong>Release Date:</strong> {release_date}</p>
          <p><strong>Rating:</strong> ⭐ {vote_average}</p>
          <p><strong>Genres:</strong> {genres?.map((g) => g.name).join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default TrailerPlayer;
