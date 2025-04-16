import React from 'react';
import useFetchMovieDetail from '../hooks/useFetchMovieDetail';
import { useSelector } from 'react-redux';

const MovieInfo = ({ id }) => {
  useFetchMovieDetail(id);
  const movieInfo = useSelector((state) => state?.movies?.detailMovieInfo);

  if (!movieInfo) return null;

  const {
    title,
    overview,
    release_date,
    vote_average,
    genres,
    tagline,
    runtime,
    budget,
    revenue,
    homepage,
    production_companies,
    production_countries,
    spoken_languages,
    poster_path,
    backdrop_path,
  } = movieInfo;

  const formatCurrency = (num) => (num ? `$${num.toLocaleString()}` : 'N/A');
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <div
      className="relative z-0 text-white min-h-screen"
      style={{
        backgroundImage: backdrop_path ? `url(${imageBaseUrl}${backdrop_path})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="bg-black/70 w-full min-h-screen  md:p-4 flex flex-col md:grid md:grid-cols-[30%_1fr] mt-[20vh]">
        {/* Poster */}
        <div className="w-full mx-auto md:mx-0 md:mt-8">
          {poster_path && (
            <img
              src={`${imageBaseUrl}${poster_path}`}
              alt={`${title} Poster`}
              className="w-full shadow-xl object-cover"
            />
          )}
        </div>

        {/* Movie Info */}
        <div className="space-y-4 p-4 md:p-6">
          <h1 className="text-3xl font-bold">{title}</h1>
          {tagline && <p className="italic text-red-400">"{tagline}"</p>}
          <p className="text-sm text-gray-300">{overview}</p>

          <div className="text-sm text-gray-400 space-y-1">
            <p><strong>Release Date:</strong> {release_date}</p>
            <p><strong>Rating:</strong> ⭐ {vote_average}</p>
            <p><strong>Runtime:</strong> {runtime} minutes</p>
            <p><strong>Genres:</strong> {genres?.map((g) => g.name).join(', ')}</p>
            <p><strong>Budget:</strong> {formatCurrency(budget)}</p>
            <p><strong>Revenue:</strong> {formatCurrency(revenue)}</p>
            <p>
              <strong>Languages:</strong> {spoken_languages?.map((lang) => lang.english_name).join(', ')}
            </p>
            <p>
              <strong>Countries:</strong> {production_countries?.map((c) => c.name).join(', ')}
            </p>
            <p>
              <strong>Production:</strong> {production_companies?.map((p) => p.name).join(', ')}
            </p>
            {homepage && (
              <p>
                <strong>Homepage:</strong>{' '}
                <a href={homepage} target="_blank" rel="noreferrer" className="text-blue-400 underline">
                  {homepage}
                </a>
              </p>
            )}
          </div>

          {/* Production Companies */}
          {production_companies && production_companies.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Production Companies</h3>
              <div className="flex flex-wrap gap-4 py-4 pb-20">
                {production_companies.map((company) => (
                  <div
                    key={company.id}
                    className="w-auto flex flex-col items-center text-center space-y-2 mx-auto md:mx-0"
                  >
                    {company.logo_path ? (
                      <img
                        src={`${imageBaseUrl}${company.logo_path}`}
                        alt={company.name}
                        className="h-20 w-30 object-contain rounded bg-white p-2 shadow-md"
                      />
                    ) : (
                      <div className="w-[100px] h-[60px] bg-gray-800 flex items-center justify-center rounded shadow-md text-gray-500 text-xs">
                        No Logo
                      </div>
                    )}
                    <p className="text-xs text-gray-300">{company.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
