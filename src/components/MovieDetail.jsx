import React, { Suspense, lazy } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useDetailTrailer from '../hooks/useDetailTrailer';
import useFetchMovieDetail from '../hooks/useFetchMovieDetail';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';
import { BACKGROUND_IMG_URL } from '../utils/constants';

// Lazy components
const MovieInfo = lazy(() => import('./MovieInfo'));
const TrailerPlayer = lazy(() => import('./TrailerPlayer'));

const MovieDetail = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const action = searchParams.get('action') || 'play';

  useDetailTrailer(id);
  useFetchMovieDetail(id);

  const trailerKey = useSelector((state) => state.movies.detailTrailerVideo?.key);
  const movieInfo = useSelector((state) => state?.movies?.detailMovieInfo);

  if (!movieInfo) return null;

  const handleToggle = (target) => {
    setSearchParams({ action: target });
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="fixed inset-0 -z-10">
              <img
                src={BACKGROUND_IMG_URL}
                alt="bg Image"
                className="w-full h-full object-cover brightness-10"
              />
            </div>
      {/* Toggle Buttons */}
      <div className="absolute z-50 top-[13vh] flex items-center justify-center gap-3 w-screen">
        <button
          onClick={() => handleToggle('play')}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
            action === 'play' ? 'bg-red-600 text-white' : 'bg-white text-black'
          }`}
        >
          <FaPlay className="inline mr-1" /> Trailer
        </button>
        <button
          onClick={() => handleToggle('info')}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
            action === 'info' ? 'bg-red-600 text-white' : 'bg-white text-black'
          }`}
        >
          <FaInfoCircle className="inline mr-1" /> Info
        </button>
      </div>

      {/* Animated View */}
      <AnimatePresence mode="wait">
        <motion.div
          key={action}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          <Suspense fallback={<div className="text-center mt-20 text-white">Loading...</div>}>
            {action === 'play' && trailerKey && (
              <TrailerPlayer trailerKey={trailerKey} movieInfo={movieInfo} />
            )}
            {action === 'info' && id && <MovieInfo id={id} />}
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MovieDetail;
