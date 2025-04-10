import { useSelector } from "react-redux";
import useMovieTrailor from "../hooks/useMovieTrailor";

const VideoBackground = ({ movieId }) => {
  useMovieTrailor(movieId); // Custom hook to fetch and set trailer

  const trailorVideo = useSelector((state) => state?.movies?.trailorVideo);
  const trailerKey = trailorVideo?.key;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {trailerKey && (
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}`}
          title="Movie Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      )}


    </div>
  );
};

export default VideoBackground;
