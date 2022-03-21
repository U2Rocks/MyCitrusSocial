import React from 'react'
import Post from '../components/Post'

const Home = () => {
  return (
    <>
        <div className="flex flex-col items-center last:pb-0">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
            <button className="p-6 pt-5 pb-5 m-4 rounded-full border-2 border-white bg-formblue hover:bg-darkformblue hover:scale-105 font-bold text-xl sticky bottom-3">&#10133;</button>
    </>
  )
}

export default Home