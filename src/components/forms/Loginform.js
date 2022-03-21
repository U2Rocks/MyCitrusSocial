import React, { useState, useRef } from 'react'
import { Link } from "react-router-dom"


// fields: [username] [password]
// interactives: [submit button]
// styling: [same as login]

const Loginform = () => {
  // state and ref variables for the form fields
  const [usernameValue, setUsernameValue] = useState('N/A')
  const [passwordValue, setPasswordValue] = useState('N/A')
  const usernameField = useRef()
  const passwordField = useRef()

  // state variable to hold error message
  const [errorMsg, setErrorMsg] = useState("")


  const logIN = (e) => {
    // prevent page reload
    e.preventDefault()

    // reset error Msg
    setErrorMsg("")

    // prevent empty entries
    if (usernameValue === "" || usernameValue === "N/A") {
      setErrorMsg("Username field is empty...")
      return
    }
    if (passwordValue === "" || passwordValue === "N/A") {
      setErrorMsg("Password field is empty...")
      return
    }

    // log that function has run
    console.log("%c You are logging in...", "color:green")

    // console log values
    console.group("Log In Values")
    console.log(`%c username ${usernameValue}`, "color: orange")
    console.log(`%c password ${passwordValue}`, "color: orange")
    console.groupEnd()

    // reset form fields and state variables
    setUsernameValue("N/A")
    setPasswordValue("N/A")
    usernameField.current.value = ""
    passwordField.current.value = ""
  }


  return (
    <>
      <div className="flex flex-col items-center drop-shadow-sm mt-6">
        <div className="w-3/4">
          <div className="text-center text-3xl font-bold bg-light-g p-1 pt-4">Login</div>
          <form onSubmit={logIN} className="flex flex-col gap-4 items-center p-4 bg-light-g">
            {errorMsg ? <div className="text-[#ff052f] bg-black p-1 rounded-xl">{errorMsg}</div> : <div></div>}
            <input onChange={(event) => setUsernameValue(event.target.value)} ref={usernameField} className="w-3/4 focus:outline-none rounded-lg p-4 drop-shadow-md" type="text" id="userInput" maxLength={50} placeholder="Username" />
            <input onChange={(event) => setPasswordValue(event.target.value)} ref={passwordField} className="w-3/4 focus:outline-none rounded-lg p-4 drop-shadow-md" type="password" id="passInput" maxLength={50} placeholder="Password" />
            <button className="hover:font-bold text-white bg-formblue hover:bg-darkformblue p-4 rounded-xl pl-8 pr-8 text-xl" type="submit">Log In</button>
            <div>Dont have an Account? <Link className="text-darkest-g hover:font-bold" to="/signup">Sign Up</Link></div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Loginform