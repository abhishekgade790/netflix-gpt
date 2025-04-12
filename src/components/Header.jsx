import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { logout } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";

function Header() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.signOut();
        dispatch(logout());
        navigate("/");
    };

    return (
        <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black px-6 py-1 flex justify-between items-center z-10">
            {/* CineNest Logo */}
            <img
                src= {LOGO}
                alt="CineNest Logo"
                className="w-60 cursor-pointer"
                onClick={() => navigate("/browse")}
            />

            <div className="flex justify-between items-center gap-4">
                {user && (
                    <div className="flex">
                        <img
                            src={user.photoURL}
                            alt={user.displayName}
                            className="w-10 h-10 rounded-full cursor-pointer"
                            onClick={() => navigate("/browse")}
                        />

                    </div>
                )}
                {user && (

                    <button
                        onClick={handleLogout}
                        className="bg-red-700 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md"
                    >
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
}

export default Header;
