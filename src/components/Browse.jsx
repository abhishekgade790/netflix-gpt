import useFetchMovies from "../hooks/useFetchMovies";
import { setNowPlayingMovies } from "../store/moviesSlice";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useFetchMovies(
    'https://api.themoviedb.org/3/movie/now_playing?language=hi&page=1',
    setNowPlayingMovies
  );

  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden">
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};


export default Browse;
