import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { logout } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { toggleGptSearch } from "../store/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/langConstants";
import { changeLanguage } from "../store/configSlice";

function Header() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.signOut();
        dispatch(logout());
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
        <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black px-6 py-1 flex justify-between items-center z-10">
            {/* CineNest Logo */}
            <img
                src={LOGO}
                alt="CineNest Logo"
                className="w-60 cursor-pointer"
                onClick={() => navigate("/browse")}
            />

            {user && (
                <div className="flex justify-between items-center gap-4">
                    {showGptSearch&&<select
                        className="text-white bg-gray-800 px-4 py-2 hover:bg-gray-900 cursor-pointer"
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
                        className="bg-white hover:bg-gray-300 text-gray-900 font-semibold px-4 py-2 rounded-md transition cursor-pointer"
                    >
                        {showGptSearch ? "Back to Movie" : "GPT Search"}
                    </button>

                    <button
                        onClick={handleLogout}
                        className="bg-red-700 hover:bg-red-800 text-white font-semibold px-4 py-2 rounded-md transition cursor-pointer"
                    >
                        Logout
                    </button>
                </div>
            )}

        </div>
    );
}

export default Header;
