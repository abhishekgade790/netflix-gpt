import React from 'react';
import { lang } from '../utils/langConstants';
import { useSelector } from 'react-redux';


const GptSearchBar = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const langKey = useSelector((store) => store.config.lang)

    return (
        <div className="flex justify-center mt-[10%]">
            <form onSubmit={handleSubmit} className="flex w-full max-w-xl border-1 border-white rounded-md">
                <input
                    type="text"
                    className="flex-grow px-5 py-3 rounded-l-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
                    placeholder={lang[langKey].placeholder}
                />
                <button
                    type="submit"
                    className="px-10 py-3 bg-red-600 text-white font-semibold rounded-r-md hover:bg-red-700 transition"
                >
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
