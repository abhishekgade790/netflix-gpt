import React, { useState } from 'react';
import { lang } from '../utils/langConstants';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleGenAI } from "@google/genai";
import { API_OPTIONS, GEMINI_API_KEY } from '../utils/constants';
import { addGptMovieResult, setSearchClick } from '../store/gptSlice';



const GptSearchBar = () => {
    const dispatch = useDispatch();

    const langKey = useSelector((store) => store.config.lang)
    const [input, setInput] = useState("suggest your self in hindi and always random")

    const searchMovieTMDB = async (movie) => {
        const response = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language="hi"&page=1', API_OPTIONS)
        const data = await response.json();
        return data.results;

    }

    const fetchMovieList = async () => {
        dispatch(setSearchClick(true));
        const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

        const Query = "give me only movies names (dont give any extra information and names more than 10 movies) which is present on TMDB for query: "
            + input +
            ". and make the movie name comma seperated like the example result given ahead. example = sholay,gadar,hum aapke hai kon,3 idiots,..... and the final result should only be a movies name not consist of any extra text "

        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: Query,
        });
        const movieList = response?.text.split(",");

        const prommiseArray = movieList.map((movie) => searchMovieTMDB(movie));
        const movies = await Promise.all(prommiseArray);
        dispatch(addGptMovieResult({ movieName: movieList, movieResult: movies }));
    }



    return (
        <div className="flex flex-col justify-center items-center mt-[30%] md:mt-[10%]">
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                }}
                className="flex w-[80%] md:w-full md:max-w-xl rounded-md">
                <input
                    type="text"
                    className="flex-grow px-5 py-3 rounded-l-md bg-gray-800/90 text-white placeholder-gray-400 focus:outline-none"
                    placeholder={lang[langKey].placeholder}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    onClick={fetchMovieList}
                    className="px-10 py-3 bg-red-600/95 text-white font-semibold rounded-r-md hover:bg-red-700 transition cursor-pointer"
                >
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
