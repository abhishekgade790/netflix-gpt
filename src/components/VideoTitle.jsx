import React from 'react';
import { FaPlay, FaPlus, FaInfoCircle } from 'react-icons/fa';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-[30%] left-6 sm:left-12 z-20 text-white max-w-[90%] sm:max-w-2xl text-left">
      <h1 className="text-[clamp(1.5rem,5vw,3rem)] font-extrabold drop-shadow-md mb-4 leading-tight">
        {title}
      </h1>
      <p className="text-[clamp(0.9rem,2vw,1.25rem)] mb-6 drop-shadow-md leading-relaxed">
        {overview}
      </p>
      <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mt-[10px] sm:mt-[20px] md:mt-[30px]">
  <button className="bg-white text-black font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded hover:bg-gray-300 transition flex items-center gap-2">
    <FaPlay />
    Play
  </button>
  <button className="bg-gray-700/70 text-white font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded hover:bg-gray-600 transition flex items-center gap-2">
    <FaPlus />
    My List
  </button>
  <button className="bg-gray-700/70 text-white font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded hover:bg-gray-600 transition flex items-center gap-2">
    <FaInfoCircle />
    More Info
  </button>
</div>

    </div>
  );
};

export default VideoTitle;
