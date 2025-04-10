import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='mt-40 mx-12 '>
      <h1 className='text-5xl font-bold m-2'>{title}</h1>
      <p className='m-2 text-lg w-2/5'>{overview}</p>
      <div>
        <button className='bg-gray-300/50 m-1 py-2 px-12 rounded-md'>Play</button>
        <button className='bg-gray-300/50 m-1 py-2 px-12 rounded-md'>My List</button>
        <button className='bg-gray-300/50 m-1 py-2 px-12 rounded-md'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
