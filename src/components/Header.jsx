import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { logout } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { resetGptState, toggleGptSearch } from "../store/gptSlice";
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
        dispatch(resetGptState())

        navigate("/");
    };

    const showGptSearch = useSelector((state => state.gpt.showGptSearch));


    const handleSearchClick = () => {
        dispatch(toggleGptSearch())
    };

    const handleLanguageChange = (e)=>{
        dispatch(changeLanguage(e.target.value))
    }

    return (
        <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black  md:px-6 py-1 flex  flex-row  justify-between items-center z-10">
            {/* CineNest Logo */}
            <img
                src={LOGO}
                alt="CineNest Logo"
                className="w-45 md:w-60 cursor-pointer"
                onClick={() => navigate("/browse")}
            />

            {user && (
                <div className="flex justify-between items-center gap-2 md:gap-4 -mt-2">
                    {showGptSearch&&<select
                        className="text-white md:bg-gray-800 px-2 md:px-4 py-1 md:py-2 hover:border-b-2 md:hover:border-b-0 md:hover:bg-gray-900 cursor-pointer md:rounded-lg"
                        onChange={handleLanguageChange}
                    >
                        {SUPPORTED_LANGUAGES.map((lang) => (
                            <option  key={lang.identifier} value={lang.identifier}>
                                {lang.name}
                            </option>
                        ))}
                    </select>}

                    <button
                        onClick={handleSearchClick}
                        className="md:bg-white hover:border-b-2 md:hover:border-b-0 md:hover:bg-gray-300 text-white md:text-gray-900 font-semibold px-4 py-2 md:rounded-md transition cursor-pointer"
                    >
                        {showGptSearch ? "Back to Movie" : "GPT Search"}
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
