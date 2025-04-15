import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MoviesList from './MoviesList';
import { ClipLoader } from 'react-spinners';
import { setSearchClick, resetGptMovieResult } from '../store/gptSlice';

const GptMoviesSuggestion = () => {
  const dispatch = useDispatch();
  const { gptMovieName, gptMovieResult, isSearchClick } = useSelector((state) => state.gpt);

  const [searchInProgress, setSearchInProgress] = useState(false);

  useEffect(() => {
    if (isSearchClick) {
      setSearchInProgress(true); // start loader
      dispatch(resetGptMovieResult()); // clear old data
    }
  }, [isSearchClick, dispatch]);

  useEffect(() => {
    if (searchInProgress && gptMovieName?.length > 0) {
      setSearchInProgress(false);
      dispatch(setSearchClick(false));
    }
  }, [gptMovieName, searchInProgress, dispatch]);

  if (searchInProgress) {
    return (
      <div className="flex justify-center items-center h-64 mt-10 z-70">
        <ClipLoader color="#f87171" size={50} />
      </div>
    );
  }

  if (!gptMovieName || gptMovieName.length === 0) return null;

  return (
    <div className="bg-black/50 md:px-20 py-5 mt-20 rounded-lg">
      {gptMovieName.map((movieName, index) => (
        gptMovieResult[index]?.length > 0 && (
          <MoviesList
            key={movieName}
            title={movieName}
            movies={gptMovieResult[index]}
          />
        )
      ))}
    </div>
  );
};

export default GptMoviesSuggestion;
