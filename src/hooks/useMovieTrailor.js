import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { setTrailorVideo } from "../store/moviesSlice";
import { useEffect } from "react";

const useMovieTrailor = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const data = await response.json();

      const trailer =
        data.results.find((item) => item.type === "Trailer") || data.results[0];
      dispatch(setTrailorVideo(trailer));
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  useEffect(() => {
    if (!movieId) return;
    getMovieVideo();
  }, [movieId]);
};

export default useMovieTrailor;
