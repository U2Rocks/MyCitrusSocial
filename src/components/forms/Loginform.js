import React, { useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom"
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom'

// testing user: test@example.com -> test22 test account details

const Loginform = () => {
  // variable to allow navigation after form submission
  let navigate = useNavigate()

  // google sign in provider
  const provider = new GoogleAuthProvider()
  provider.addScope('profile');
  provider.addScope('email');

  // variable to prevent redirect if authentication is bad
  let correctlyAuthentified;

  useEffect(() => {
    console.log("%c loginform loaded...", "color: green")
  }, [])

  // function to sign in user with google authentication
  const googleSignin = async () => {
    try{
    await signInWithPopup(auth, provider)
    correctlyAuthentified = true
    console.log("%c authentified with GOOGLE...", "color:green")
    moveUserHome()
    } catch(error) {
      console.group("sign in auth/server error")
        console.error(error.code)
        console.error(error.message)
        console.groupEnd()
    }
  }

  // log in user function
  const logInUser = async () => {
    try{
    const userVar = await signInWithEmailAndPassword(auth, usernameValue, passwordValue)
    correctlyAuthentified = true
    console.log(correctlyAuthentified)
    // move user to home page
    moveUserHome()
    } catch(error) {
        console.group("sign in auth/server error")
        console.error(error.code)
        console.error(error.message)
        console.groupEnd()
        setErrorMsg("Incorrect Username or Password...")
        return
    }
    
  }


  // function to move user to home page
  const moveUserHome = async () =>{
    console.log("moving user...")
    if (correctlyAuthentified === true)
    {
    await navigate("/home")
    }
  }

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

    // set to false
    correctlyAuthentified = false
    console.log(correctlyAuthentified)

    // prevent empty entries
    if (usernameValue === "" || usernameValue === "N/A") {
      setErrorMsg("Email field is empty...")
      return
    }
    if (passwordValue === "" || passwordValue === "N/A") {
      setErrorMsg("Password field is empty...")
      return
    }

    // attempt to log in user with verified information
    logInUser()

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

  // google button
  // <button className="hover:font-bold text-black bg-[#1ddb4f] hover:bg-[#32a852] hover:text-white p-4 rounded-xl pl-8 pr-8 text-xl" onClick={googleSignin}>Log In with Google</button>


  return (
    <>
      <div className="flex flex-col items-center drop-shadow-sm mt-6">
        <div className="w-3/4 text-center bg-light-g">
          <div className="text-center text-3xl font-bold bg-light-g p-1 pt-4">Login</div>
          <form onSubmit={logIN} className="flex flex-col gap-4 items-center p-4 bg-light-g">
            {errorMsg ? <div className="text-black bg-error-bg p-1 rounded-xl text-center">{errorMsg}</div> : <div></div>}
            <input onChange={(event) => setUsernameValue(event.target.value)} ref={usernameField} className="w-3/4 focus:outline-none rounded-lg p-4 drop-shadow-md" type="email" id="userInput" maxLength={50} placeholder="Email" />
            <input onChange={(event) => setPasswordValue(event.target.value)} ref={passwordField} className="w-3/4 focus:outline-none rounded-lg p-4 drop-shadow-md" type="password" id="passInput" maxLength={50} placeholder="Password" />
            <button className="hover:font-bold text-black bg-formblue hover:bg-darkformblue hover:text-white p-4 rounded-xl pl-8 pr-8 text-xl" type="submit">Log In</button>
            <div>Dont have an Account? <Link className="text-darkest-g hover:font-bold" to="/signup">Sign Up</Link></div>
          </form>
          <button className="hover:font-bold text-black bg-[#1ddb4f] hover:bg-[#32a852] hover:text-white p-4 rounded-xl pl-8 pr-8 text-xl mb-4" onClick={googleSignin}>Log In with Google</button>
        </div>
      </div>
    </>
  )
}

export default Loginform