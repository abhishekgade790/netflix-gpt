import { useSelector } from "react-redux";
import useMovieTrailor from "../hooks/useMovieTrailor";

const VideoBackground = ({ movieId }) => {
  useMovieTrailor(movieId);

  const trailorVideo = useSelector((state) => state?.movies?.trailorVideo);
  const trailerKey = trailorVideo?.key;

  return (
    <div className="relative z-0">
      {trailerKey && (
        <div className="fixed inset-0 z-0 overflow-hidden animate-fadeIn">
          <iframe
            className="absolute w-screen aspect-video scale-[1.5] pointer-events-none transition-transform duration-1000 ease-out"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}&modestbranding=1&showinfo=0`}
            title="Movie Trailer"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          {/* Optional overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
        </div>
      )}
    </div>
  );
};

export default VideoBackground;
