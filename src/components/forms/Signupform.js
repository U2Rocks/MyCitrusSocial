import React, { useState, useRef } from 'react'
import { Link } from "react-router-dom"

// fields: [username] [password] [confirm password]
// interactives: [submit button]
// styling: [same as login]

const Signupform = () => {
  // state and ref variables
  const [usernameValue, setUsernameValue] = useState("N/A")
  const [passwordValue, setPasswordValue] = useState("N/A")
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("N/A")

  const usernameRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()

  // state variable for the error message
  const [errorMsg, setErrorMsg] = useState("")

  const SignUP = (e) => {
    // prevent page reload
    e.preventDefault()

    // reset error message
    setErrorMsg("")

    // check for empty fields and confirm password
    if (usernameValue === "" || usernameValue === "N/A") {
      setErrorMsg("Username field is empty...")
      return
    }
    if (passwordValue === "" || passwordValue === "N/A") {
      setErrorMsg("Password field is empty...")
      return
    }
    if (confirmPasswordValue === "" || confirmPasswordValue === "N/A") {
      setErrorMsg("Confirm Password field is empty...")
      return
    }
    if (passwordValue !== confirmPasswordValue) {
      setErrorMsg("Password field and Confirm Password field do not match...")
      return
    }

    // log that function has run
    console.log("%c You are signed up...", "color:green")

    // console log values
    console.group("Sign Up Values")
    console.log(`%c username: ${usernameValue}`, "color:orange")
    console.log(`%c password: ${passwordValue}`, "color:orange")
    console.groupEnd()

    // reset form fields and state variables
    setUsernameValue("N/A")
    setPasswordValue("N/A")
    setConfirmPasswordValue("N/A")

    usernameRef.current.value = ""
    passwordRef.current.value = ""
    confirmPasswordRef.current.value = ""


  }

  return (
    <>
        <>
      <div className="flex flex-col items-center drop-shadow-sm mt-6">
        <div className="w-3/4">
          <div className="text-center text-3xl font-bold bg-light-g p-1 pt-4">Signup</div>
          <form onSubmit={SignUP} className="flex flex-col gap-4 items-center p-4 bg-light-g">
            {errorMsg ? <div className="text-[#ff052f] bg-black p-1 rounded-xl">{errorMsg}</div> : <div></div>}
            <input onChange={(event) => setUsernameValue(event.target.value)} ref={usernameRef} className="w-3/4 focus:outline-none rounded-lg p-4 drop-shadow-md" type="text" id="userInput" maxLength={50} placeholder="Username" />
            <input onChange={(event) => setPasswordValue(event.target.value)} ref={passwordRef} className="w-3/4 focus:outline-none rounded-lg p-4 drop-shadow-md" type="password" id="passInput" maxLength={50} placeholder="Password" />
            <input onChange={(event) => setConfirmPasswordValue(event.target.value)} ref={confirmPasswordRef} className="w-3/4 focus:outline-none rounded-lg p-4 drop-shadow-md" type="password" id="passConfirmInput" maxLength={50} placeholder="Confirm Password" />
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