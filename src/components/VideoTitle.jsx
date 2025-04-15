import React from 'react';
import { FaPlay, FaPlus, FaInfoCircle } from 'react-icons/fa';
import { addToList } from '../store/myListSlice';
import { useDispatch, useSelector } from 'react-redux';

const VideoTitle = ({ mainMovie }) => {
  const dispatch = useDispatch();
  const { title, overview, id } = mainMovie;

  const myList = useSelector((state) => state.myList);
  const alreadyAdded = myList.some((item) => item.id === id);

  const handleMyListClick = () => {
    if (alreadyAdded) {
      return;
    }
    dispatch(addToList(mainMovie));
  };

  return (
    <div className="absolute w-2/3 top-[30%] md:top-[25%] left-0 px-6 sm:px-12 z-20 text-white text-left">
      <h1 className="text-[clamp(1.5rem,5vw,3rem)] font-extrabold drop-shadow-md mb-4 leading-tight">
        {title}
      </h1>
      <p className="w-full h-20 overflow-y-scroll no-scrollbar md:h-auto text-[clamp(0.6rem,2vw,1rem)] md:text-[clamp(0.8rem,2vw,1.1rem)] mb-6 drop-shadow-md leading-relaxed">
        {overview}
      </p>

      <div className="flex w-screen flex-wrap gap-2 md:gap-4 -mt-2 -md:mt-8">
        <button
          className="bg-white text-black font-semibold text-sm md:text-lg px-3 md:px-4 py-1 sm:py-2.5 rounded hover:bg-gray-300 transition flex items-center gap-2"
          onClick={() => { console.log("paly clicked") }}
        >
          <FaPlay />
          Play
        </button>

        <button
          className="bg-gray-700/70 text-white font-semibold text-sm md:text-lg px-3 md:px-4 py-1 sm:py-2.5 rounded hover:bg-gray-600 transition flex items-center gap-2"
          onClick={handleMyListClick}
        >
          <FaPlus />
          My List
        </button>

        <button className="bg-gray-700/70 text-white font-semibold text-sm md:text-lg px-3 md:px-4 py-1 sm:py-2.5 rounded hover:bg-gray-600 transition flex items-center gap-2">
          <FaInfoCircle />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
