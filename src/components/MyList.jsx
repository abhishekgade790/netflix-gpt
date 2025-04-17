import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaPlay, FaInfoCircle, FaTrash } from 'react-icons/fa';
import { removeAll, removeFromList } from '../store/myListSlice';
import toast, { Toaster } from 'react-hot-toast';
import { BACKGROUND_IMG_URL } from '../utils/constants';

const MyList = () => {
  const myList = useSelector((state) => state.myList);
  const dispatch = useDispatch();
  const [activeOverlayId, setActiveOverlayId] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const toggleOverlay = (id) => {
    setActiveOverlayId((prevId) => (prevId === id ? null : id));
  };

  const handleRemove = (id, title) => {
    dispatch(removeFromList(id));
    toast.success(`Removed "${title}" from your list`);
    setActiveOverlayId(null);
  };

  const confirmClearAll = () => {
    dispatch(removeAll());
    toast.success('All items cleared from your list');
    setShowConfirmModal(false);
  };

  return (
    <div className="min-h-screen text-white px-8 py-8 pt-28 relative">
      <div className="fixed inset-0 -z-10">
        <img
          src={BACKGROUND_IMG_URL}
          alt="bg Image"
          className="w-full h-full object-cover brightness-30"
        />
      </div>
      <Toaster position="bottom center" reverseOrder={false} />

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My List</h1>
        {myList.length > 0 && (
          <button
            onClick={() => setShowConfirmModal(true)}
            className="flex items-center gap-2 text-sm bg-red-600 hover:bg-red-500 px-4 py-2 rounded transition"
          >
            <FaTrash />
            Clear All
          </button>
        )}
      </div>

      {myList.length === 0 ? (
        <p className="text-lg">Your list is empty.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {myList.map((movie) => {
            const { id, title, poster_path, release_date, vote_average } = movie;
            const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

            return (
              <div
                key={id}
                className="relative overflow-hidden shadow-md border border-gray-700 group cursor-pointer"
                onClick={() => {
                  // Only toggle on small screens
                  if (window.innerWidth < 768) toggleOverlay(id);
                }}
                onDoubleClick={() => setActiveOverlayId(null)}
              >
                <img
                  src={imgUrl}
                  alt={title}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay for Desktop (hover) */}
                <div
                  className="absolute inset-0 bg-black/80 text-white flex-col justify-between p-3 z-10 hidden md:flex opacity-0 group-hover:opacity-100 transition duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between">
                    <button className="bg-white text-black p-2 rounded-full hover:bg-gray-300 transition">
                      <FaPlay />
                    </button>
                    <button className="bg-white text-black p-2 rounded-full hover:bg-gray-300 transition">
                      <FaInfoCircle />
                    </button>
                    <button
                      onClick={() => handleRemove(id, title)}
                      className="bg-red-600 text-white p-2 rounded-full hover:bg-red-500 transition"
                    >
                      <FaTrash />
                    </button>
                  </div>
                  <div className="mt-2">
                    <h3 className="font-bold text-lg">{title}</h3>
                    {release_date && <p className="text-sm">Released: {release_date}</p>}
                    <p className="text-sm">Rating: {vote_average.toFixed(1)}</p>
                  </div>
                </div>

                {/* Overlay for Mobile (tap toggle) */}
                {activeOverlayId === id && (
                  <div
                    className="absolute inset-0 bg-black/80 text-white flex flex-col justify-between p-3 z-10 md:hidden"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex justify-between">
                      <button className="bg-white text-black p-2 rounded-full hover:bg-gray-300 transition">
                        <FaPlay />
                      </button>
                      <button className="bg-white text-black p-2 rounded-full hover:bg-gray-300 transition">
                        <FaInfoCircle />
                      </button>
                      <button
                        onClick={() => handleRemove(id, title)}
                        className="bg-red-600 text-white p-2 rounded-full hover:bg-red-500 transition"
                      >
                        <FaTrash />
                      </button>
                    </div>
                    <div className="mt-2">
                      <h3 className="font-bold text-lg">{title}</h3>
                      {release_date && <p className="text-sm">Released: {release_date}</p>}
                      <p className="text-sm">Rating: {vote_average.toFixed(1)}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ✅ Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg w-[90%] max-w-sm shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Clear All?</h2>
            <p className="mb-6">Are you sure you want to remove all movies from your list?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 rounded border border-gray-400 hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={confirmClearAll}
                className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-500"
              >
                Yes, Clear
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyList;
