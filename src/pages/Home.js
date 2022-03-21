import React, { useState } from 'react'
import Post from '../components/Post'
import AddPostModal from '../components/AddPostModal'

const Home = () => {

    // conditionally render modal and add post button depending is user logged in
    // non logged in users can only see posts and login and signup page
    // after logged in then change header and home page...
    // logout will just be conditionally render button that uses a firebase function to log user out
    // use firebase function to get server timestamp to order messages

    const [modalVisible, setModalVisible] = useState(false)

    const toggleModalOn = () => {
        setModalVisible(true)
    }

    const toggleModalOff = () => {
        setModalVisible(false)
    }
 

  return (
    <>
        <AddPostModal removeModal={toggleModalOff} modalState={modalVisible}/>
        <div className="flex flex-col items-center last:pb-0">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
        <button onClick={toggleModalOn} className="p-6 pt-5 pb-5 m-4 rounded-full border-2 border-white bg-formblue hover:bg-darkformblue hover:scale-105 font-bold text-xl sticky bottom-3 z-10">&#10133;</button>
    </>
  )
}

export default Home