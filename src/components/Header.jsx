import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { logout } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { resetGptState, resetToggle, toggleGptSearch } from "../store/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/langConstants";
import { changeLanguage } from "../store/configSlice";

function Header() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.signOut();
        dispatch(logout());
        dispatch(resetGptState());
        // Removed duplicate resetGptState dispatch

        navigate("/");
    };

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
                className="w-45 md:w-60 cursor-pointer"
                onClick={() => navigate("/browse")}
            />

            {user && (
                <div className="flex justify-between items-center  md:gap-4 -mt-2">
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
                    onClick={()=>{navigate("/mylist")}}
                        className="hover:border-b-2 text-white font-semibold px-4 py-2 transition cursor-pointer"
                    >
                        My List
                    </button>

                    <button
                        onClick={handleLogout}
                        className="md:bg-red-700 hover:border-b-2 md:hover:border-b-0 md:hover:bg-red-800 text-white font-semibold px-4 py-2 md:rounded-md transition cursor-pointer"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}

export default Header;
