import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { FaStar, FaStarHalfAlt, FaRegStar, FaPlay, FaPlus, FaInfoCircle, FaCheck } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToList } from '../store/myListSlice';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie, activeOverlayId, setActiveOverlayId }) => {
  const { id, title, vote_average, original_language, poster_path } = movie;
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const myList = useSelector((state) => state.myList);
  const alreadyAdded = myList.some((item) => item.id === id);

  const handlePlayClick = (e) => {
    e.stopPropagation();
    navigate(`/movie/${id}?action=play`);
  };
  
  const handleInfoClick = (e) => {
    e.stopPropagation();
    navigate(`/movie/${id}?action=info`);
  };

  const handleMyListClick = () => {
    if (!alreadyAdded) {
      dispatch(addToList(movie));
      toast.success(`Added "${title}" to My List`);
    }
  };

  if (!poster_path) return null;

  const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const rating = vote_average / 2;
  const isOverlayOpen = activeOverlayId === id;

  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];
    for (let i = 0; i < fullStars; i++) stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    if (hasHalfStar) stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    for (let i = 0; i < emptyStars; i++) stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
    return stars;
  };

  return (
    <div
      className="w-full h-full overflow-hidden relative group p-1 md:p-2 shadow-md cursor-pointer"
      onClick={() => {
        if (window.innerWidth < 768) {
          setActiveOverlayId((prev) => (prev === id ? null : id));
        }
      }}
    >
      <Toaster position="bottom-center" />
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
        className={`w-full h-full object-cover transition-transform duration-300 
          ${isLoading ? 'opacity-0' : 'opacity-100'} group-hover:scale-105`}
      />

      {/* Overlay */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-black/80 text-white p-2 md:p-4 z-20 
          transition-all duration-300 ease-in-out 
          ${isOverlayOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} 
          md:group-hover:opacity-100 md:group-hover:translate-y-0 md:opacity-0 md:translate-y-4`}
      >
        <h5 className="text-sm font-semibold">{title}</h5>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            {renderStars()}
            <span className="text-xs ml-1">({vote_average.toFixed(1)})</span>
          </div>
          <p className="text-xs uppercase">LANGUAGE: {original_language}</p>
        </div>

        {/* Action Icons */}
        <div className="flex justify-around items-center mt-2 text-white text-sm">
          <div className="flex items-center gap-1 hover:text-red-400"
          onClick={handlePlayClick}
          >
            <FaPlay />
          </div>
          <div
            className={`flex items-center gap-1 cursor-pointer transition hover:text-red-400 ${
              alreadyAdded ? 'text-green-500' : ''
            }`}
            onClick={(e) => {
              e.stopPropagation();
              handleMyListClick();
            }}
          >
            {alreadyAdded ? <FaCheck /> : <FaPlus />}
          </div>
          <div className="flex items-center gap-1 hover:text-red-400"
          onClick={handleInfoClick}
          >
            <FaInfoCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
