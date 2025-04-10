import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useFetchMovies = (url, action) => {
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    try {
      const response = await fetch(url, API_OPTIONS);
      const data = await response.json();
      dispatch(action(data.results));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [url]);
};

export default useFetchMovies;
