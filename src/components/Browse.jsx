import useFetchMovies from "../hooks/useFetchMovies";
import { setNowPlayingMovies, setPopularMovies, setTopRatedMovies, setUpcomingMovies } from "../store/moviesSlice";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useFetchMovies(
    'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
    setNowPlayingMovies
  );

  useFetchMovies(
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    setPopularMovies
  );

  useFetchMovies(
    'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
    setTopRatedMovies
  )

  useFetchMovies(
    'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
    setUpcomingMovies
  )

  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden">
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};


export default Browse;
