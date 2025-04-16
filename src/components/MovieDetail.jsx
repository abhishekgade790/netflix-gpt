import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useDetailTrailer from '../hooks/useDetailTrailer';
import useFetchMovieDetail from '../hooks/useFetchMovieDetail';
import TrailerPlayer from './TrailerPlayer';
import MovieInfo from './MovieInfo';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';


const MovieDetail = () => {
    const { id } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const action = searchParams.get('action') || 'play';

    useDetailTrailer(id);
    useFetchMovieDetail(id);

    const trailerKey = useSelector((state) => state.movies.detailTrailerVideo?.key);
    const movieInfo = useSelector((state) => state?.movies?.detailMovieInfo);

    const handleToggle = (target) => {
        setSearchParams({ action: target });
    };

    if (!movieInfo) return null;

    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden">
            {/* Toggle Buttons */}
            <div className="absolute z-50 top-[13vh] flex items-center justify-center gap-3 w-screen">
                <button
                    onClick={() => handleToggle('play')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${action === 'play' ? 'bg-red-600 text-white' : 'bg-white text-black'
                        }`}
                >
                    <FaPlay /> Trailer
                </button>
                <button
                    onClick={() => handleToggle('info')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${action === 'info' ? 'bg-red-600 text-white' : 'bg-white text-black'
                        }`}
                >
                    <FaInfoCircle /> Info
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
                    {action === 'play' && trailerKey && (
                        <TrailerPlayer trailerKey={trailerKey} movieInfo={movieInfo} />
                    )}
                    {action === 'info' && id && <MovieInfo id={id} />}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default MovieDetail;
