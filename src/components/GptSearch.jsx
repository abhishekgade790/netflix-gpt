import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestion from './GptMoviesSuggestion'

const GptSearch = () => {
    return (
        <div className='flex flex-col'>
            <div className="absolute inset-0">
                <img
                    src="https://api.deepai.org/job-view-file/dd01177f-817e-4d4e-b99a-03de2ff44395/outputs/output.jpg"
                    alt="bg Image"
                    className="w-full h-full object-cover brightness-50"
                />
            </div>
            <GptSearchBar />
            <GptMoviesSuggestion />
        </div>
    )
}

export default GptSearch
