import React, { lazy, Suspense } from 'react';
import { BACKGROUND_IMG_URL } from '../utils/constants';

// Lazy-loaded components
const GptSearchBar = lazy(() => import('./GptSearchBar'));
const GptMoviesSuggestion = lazy(() => import('./GptMoviesSuggestion'));

const GptSearch = () => {
  return (
    <div className="flex flex-col">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <img
          src={BACKGROUND_IMG_URL}
          alt="bg Image"
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      {/* Suspense Wrappers */}
      <Suspense fallback={<div className="text-white text-center mt-10">Loading Search Bar...</div>}>
        <GptSearchBar />
      </Suspense>

      <Suspense fallback={<div className="text-white text-center mt-5">Loading Suggestions...</div>}>
        <GptMoviesSuggestion />
      </Suspense>
    </div>
  );
};

export default GptSearch;
