import React, { useState } from 'react';
import Header from './Header';

function Login() {
    const [isSignIn, setIsSignIn] = useState(true);
    const handleToggle = () => setIsSignIn(!isSignIn);

    // Utility class variables
    const inputField = "w-full p-2 sm:p-3 bg-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-white";
    const btnRed = "w-full py-2 sm:py-3 bg-red-600 hover:bg-red-700 rounded font-semibold";
    const btnGray = "w-full py-2 sm:py-3 bg-gray-600 hover:bg-gray-700 rounded font-semibold";

    return (
        <div className="relative h-screen w-screen bg-black">
            <Header />
            <div className="absolute inset-0">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_small.jpg"
                    alt="bg Image"
                    className="w-full h-full object-cover brightness-50"
                />
            </div>

            <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-full max-w-md p-6 sm:p-8 bg-black bg-opacity-80 rounded-md shadow-lg text-white space-y-4">
                <h1 className="text-2xl sm:text-3xl font-bold">{isSignIn ? "Sign In" : "Sign Up"}</h1>

                {!isSignIn && (
                    <>
                        <input type="text" placeholder="Enter your name" className={inputField} />
                        <input type="email" placeholder="Email" className={inputField} />
                        <input type="text" placeholder="Mobile Number" className={inputField} />
                    </>
                )}

                {isSignIn && (
                    <input type="text" placeholder="Email or Mobile Number" className={inputField} />
                )}

                <input type="password" placeholder="Password" className={inputField} />

                {!isSignIn && (
                    <input type="password" placeholder="Confirm Password" className={inputField} />
                )}

                <button className={btnRed}>{isSignIn ? "Sign In" : "Sign Up"}</button>

                {isSignIn && (
                    <>
                        <div className="text-center text-gray-400">OR</div>
                        <button className={btnGray}>Use a sign-in code</button>
                    </>
                )}

                <p className="text-xs sm:text-sm text-gray-400 text-center">
                    {isSignIn ? "New to NetflixGPT? " : "Already have an account? "}
                    <span className="text-white hover:underline cursor-pointer" onClick={handleToggle}>
                        {isSignIn ? "Sign up now" : "Sign In"}
                    </span>
                </p>
            </form>
        </div>
    );
}

export default Login;
