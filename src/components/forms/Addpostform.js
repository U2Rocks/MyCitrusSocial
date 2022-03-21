import React from 'react'

const Addpostform = () => {


    const addPost = () => {
        console.log("%c post added", "color:green")
    }


  return (
    <>
        <div className="flex flex-col items-center drop-shadow-sm mt-6">
        <div className="w-3/4">
          <div className="text-center text-3xl font-bold bg-light-g p-1 pt-4">Login</div>
          <form onSubmit={addPost} className="flex flex-col gap-4 items-center p-4 bg-light-g">
            <input className="w-3/4 focus:outline-none rounded-lg p-4 drop-shadow-md" type="text" id="userInput" maxLength={50} placeholder="Username" />
            <input className="w-3/4 focus:outline-none rounded-lg p-4 drop-shadow-md" type="password" id="passInput" maxLength={50} placeholder="Password" />
            <button className="hover:font-bold text-white bg-formblue hover:bg-darkformblue p-4 rounded-xl pl-8 pr-8 text-xl" type="submit">Add A Post</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Addpostform