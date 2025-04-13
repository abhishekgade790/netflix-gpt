import React from 'react';

const GptSearchBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    // You can add your search logic here
    console.log('Search submitted');
  };

  return (
    <div className=" py-6 px-4 flex justify-center mt-[10%]">
      <form onSubmit={handleSubmit} className="flex w-full max-w-xl">
        <input
          type="text"
          className="flex-grow px-4 py-2 rounded-l-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white"
          placeholder="What would you like to search today?"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-red-600 text-white font-semibold rounded-r-md hover:bg-red-700 transition"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
