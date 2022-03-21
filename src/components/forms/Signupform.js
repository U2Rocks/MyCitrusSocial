import React from 'react'
import { Link } from "react-router-dom"

// fields: [username] [password] [confirm password]
// interactives: [submit button]
// styling: [same as login]

const Signupform = () => {

  const SignUP = (e) => {
    e.preventDefault()
    console.log("You are signed up...")
  }

  return (
    <>
        <>
      <div className="flex flex-col items-center drop-shadow-sm mt-6">
        <div className="w-3/4">
          <div className="text-center text-3xl font-bold bg-light-g p-1 pt-4">Signup</div>
          <form onSubmit={SignUP} className="flex flex-col gap-4 items-center p-4 bg-light-g">
            <input className="w-3/4 focus:outline-none rounded-lg p-4 drop-shadow-md" type="text" id="userInput" maxLength={50} placeholder="Username" />
            <input className="w-3/4 focus:outline-none rounded-lg p-4 drop-shadow-md" type="password" id="passInput" maxLength={50} placeholder="Password" />
            <input className="w-3/4 focus:outline-none rounded-lg p-4 drop-shadow-md" type="password" id="passConfirmInput" maxLength={50} placeholder="Confirm Password" />
            <button className="hover:font-bold text-white bg-formblue hover:bg-darkformblue p-4 rounded-xl pl-8 pr-8 text-xl" type="submit">Sign Up</button>
            <div>Already have an Account? <Link className="text-darkest-g hover:font-bold" to="/login">Log In</Link></div>
          </form>
        </div>
      </div>
    </>
    </>
  )
}

export default Signupform