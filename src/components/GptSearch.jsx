import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestion from './GptMoviesSuggestion'
import { BACKGROUND_IMG_URL } from '../utils/constants'

const GptSearch = () => {
    return (
        <div className='flex flex-col'>
            <div className="fixed inset-0 -z-10">
                <img
                    src={BACKGROUND_IMG_URL}
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
