import { useSelector } from "react-redux";
import useFetchMovies from "../hooks/useFetchMovies";
import { setNowPlayingMovies } from "../store/moviesSlice";

const Browse = () => {
  useFetchMovies('https://api.themoviedb.org/3/movie/now_playing?language=hi&page=1', setNowPlayingMovies);

  const movies = useSelector((state) => state.movies.nowPlayingMovies);
  console.log("Now Playing Movies from Redux:", movies);

  return (
    <div>
      <h1>Browse</h1>
      {movies && movies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
};

export default Browse;
