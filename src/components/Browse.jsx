import { useSelector } from "react-redux";
import useFetchMovies from "../hooks/useFetchMovies";
import { setNowPlayingMovies, setPopularMovies, setTopRatedMovies, setUpcomingMovies } from "../store/moviesSlice";
import GptSearch from "./GptSearch";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { BACKGROUND_IMG_URL } from "../utils/constants";

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

  const showGptSearch = useSelector((state => state.gpt.showGptSearch));

  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-10">
              <img
                src={BACKGROUND_IMG_URL}
                alt="bg Image"
                className="w-full h-full object-cover brightness-50"
              />
            </div>
      {
        showGptSearch ? <GptSearch /> : <> <MainContainer />
          <SecondaryContainer /></>
      }
    </div>
  );
};


export default Browse;
