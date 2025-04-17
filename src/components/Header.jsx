import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { resetToggle, toggleGptSearch } from "../store/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/langConstants";
import { changeLanguage } from "../store/configSlice";
import { FaUserCircle } from 'react-icons/fa';


function Header() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const showGptSearch = useSelector((state) => state.gpt.showGptSearch);


    // Updated function to navigate to /browse
    const handleSearchClick = () => {
        navigate("/browse");
        dispatch(toggleGptSearch());
    };

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    };

    return (
        <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black md:px-6 py-1 flex flex-col md:flex-row justify-between items-center z-10">
            {/* CineNest Logo */}
            <img
                src={LOGO}
                alt="CineNest Logo"
                className="w-36 md:w-60 cursor-pointer"
                onClick={() => navigate("/browse")}
            />

            {user && (
                <div className="flex justify-between items-center text-sm md:text-lg md:gap-4 -mt-2">
                    <button
                        onClick={() => {
                            navigate("/browse")
                            dispatch(resetToggle());
                        }}
                        className="hover:border-b-2 text-white font-semibold px-4 py-2 transition cursor-pointer"
                    >
                        Home
                    </button>
                    {showGptSearch && (
                        <select
                            className="bg-transparent text-white px-2 md:px-4 py-1 md:py-2 hover:border-b-2 cursor-pointer"
                            onChange={handleLanguageChange}
                        >
                            {SUPPORTED_LANGUAGES.map((lang) => (
                                <option
                                    className="text-black"
                                    key={lang.identifier}
                                    value={lang.identifier}
                                >
                                    {lang.name}
                                </option>
                            ))}
                        </select>
                    )}

                    <button
                        onClick={handleSearchClick}
                        className="hover:border-b-2 text-white font-semibold px-4 py-2 transition cursor-pointer"
                    >
                        {!showGptSearch ? "GPT Search" : "Browse Movies"}
                    </button>

                    <button
                        onClick={() => { navigate("/mylist") }}
                        className="hover:border-b-2 text-white font-semibold px-4 py-2 transition cursor-pointer"
                    >
                        My List
                    </button>

                    <div>
                        <FaUserCircle
                            className="hover:scale-110 text-white text-2xl md:text-3xl ml-4 cursor-pointer"
                            onClick={() => {
                                navigate(`/u/${user.uid}`)
                            }}
                        />


                    </div>

                </div>
            )}
        </div>
    );
}

export default Header;
