import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { FaStar, FaStarHalfAlt, FaRegStar, FaPlay, FaPlus, FaInfoCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToList } from '../store/myListSlice';

const MovieCard = ({ movie }) => {
  const { id,title, vote_average, original_language, poster_path } = movie;
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch()

  const myList = useSelector((state) => state.myList);
  const alreadyAdded = myList.some((item) => item.id === id);

  const handleMyListClick = () => {
    if (alreadyAdded) {
      return;
    }
    dispatch(addToList(movie));
  };

  if (!poster_path) return null;

  const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  const rating = vote_average / 2;

  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
    }

    return stars;
  };

  return (
    <div className="w-full h-full overflow-hidden relative group p-1 md:p-2 shadow-md">
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
        onError={() => setIsLoading(false)}
        className={`w-full h-full object-cover transition-transform duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} group-hover:scale-105`}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-1 md:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className='flex flex-col'>
          <div className="flex items-center gap-1">
            {renderStars()}
            <span className="text-xs ml-1">({vote_average.toFixed(1)})</span>
          </div>
          <p className="text-xs uppercase">LANGUAGE: {original_language}</p>
        </div>

        {/* Icons below */}
        <div className="flex justify-around items-center mt-2 text-white text-sm">
          <div className="flex items-center gap-1 hover:text-red-400 cursor-pointer">
            <FaPlay />
          </div>
          <div className="flex items-center gap-1 hover:text-red-400 cursor-pointer"
          onClick={handleMyListClick}
          >
            <FaPlus />
          </div>
          <div className="flex items-center gap-1 hover:text-red-400 cursor-pointer">
            <FaInfoCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
