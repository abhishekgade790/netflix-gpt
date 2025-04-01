import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';

function Login() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const confirmPassword = useRef(null);

    const handleToggle = () =>{setIsSignIn(!isSignIn);
        setErrorMessage(null);
    }
    const handleClick = () => {
        const Message = checkValidData(
            name?.current?.value,
            email?.current?.value,
            password?.current?.value,
            confirmPassword?.current?.value,
            isSignIn
        );

        if (Message !== true) {
            setErrorMessage(Message);
            return;
        }

        setErrorMessage(null);
    };

    const inputField = "w-full p-2 sm:p-3 bg-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-white";
    const btnRed = "w-full py-2 sm:py-3 bg-red-600 hover:bg-red-700 rounded font-semibold";

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

            <form onSubmit={(e) => { e.preventDefault() }} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-full max-w-md p-6 sm:p-8 bg-black opacity-90 rounded-md shadow-lg text-white space-y-4">
                <h1 className="text-2xl sm:text-3xl font-bold">{isSignIn ? "Sign In" : "Sign Up"}</h1>

                <>
                    {!isSignIn && <input ref={name} type="text" placeholder="Enter your name" className={inputField} />}
                    <input ref={email} type="email" placeholder="Email" className={inputField} />
                    <input ref={password} type="password" placeholder="Password" className={inputField} />
                    {!isSignIn && (
                        <input ref={confirmPassword} type="password" placeholder="Confirm Password" className={inputField} />
                    )}
                </>

                {errorMessage && (
                    <p className="text-red-500 text-center text-sm">{errorMessage}</p>
                )}

                <button type="button" className={btnRed} onClick={handleClick}>
                    {isSignIn ? "Sign In" : "Sign Up"}
                </button>

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
