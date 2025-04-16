import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setDetailMovieInfo } from "../store/moviesSlice";

const useFetchMovieDetail = (id) => {
    const dispatch = useDispatch()
  const fetchMovie = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/" + id + "?language=en-US",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(setDetailMovieInfo(data))
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);
};

export default useFetchMovieDetail;
