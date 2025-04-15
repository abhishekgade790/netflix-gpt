import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector((state) => state?.movies?.nowPlayingMovies);
  if (!movies) return null;

  const mainMovie = movies[19];
  const { id } = mainMovie;

  return (
    <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[90vh] xl:h-[100vh] bg-black overflow-hidden">
      <VideoBackground movieId={id} />
      <VideoTitle mainMovie={mainMovie} />
    </div>
  );
};

export default MainContainer
