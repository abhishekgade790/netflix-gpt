import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { logout } from '../store/userSlice';
import { resetGptState } from '../store/gptSlice';
import { useNavigate } from 'react-router-dom';
import UpdateProfile from './UpdateProfileForm';
import { BACKGROUND_IMG_URL } from '../utils/constants';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    auth.signOut();
    dispatch(logout());
    dispatch(resetGptState());
    navigate('/');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen text-white px-4 pb-20 pt-[25%] md:pt-[20%] flex flex-col items-center">
      <div className="fixed inset-0 -z-10">
        <img
          src={BACKGROUND_IMG_URL}
          alt="bg Image"
          className="w-full h-full object-cover brightness-40"
        />
      </div>
      <div className="bg-black/70 w-full max-w-2xl rounded-lg p-8 pb-15 space-y-4 border border-gray-700/90 shadow-lg">
        <h1 className="text-2xl font-bold text-center">Profile</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={user.photoURL}
            alt="profile"
            className="h-28 w-28 rounded-full object-cover border border-gray-600"
          />
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-xl font-semibold">{user.displayName}</h2>
            <p className="text-sm text-gray-400">{user.email}</p>
            <button
              onClick={handleLogout}
              className="mt-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-semibold"
            >
              Logout
            </button>
          </div>
        </div>

        <UpdateProfile />
      </div>
    </div>
  );
};

export default Profile;
