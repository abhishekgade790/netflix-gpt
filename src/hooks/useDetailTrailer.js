import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { setDetailTrailerVideo } from "../store/moviesSlice";

const useDetailTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const data = await res.json();

    const trailer = data.results.find(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );
    dispatch(setDetailTrailerVideo(trailer));
  };

  useEffect(() => {
    if (movieId) getMovieVideos();
  }, [movieId]);
};

export default useDetailTrailer;
