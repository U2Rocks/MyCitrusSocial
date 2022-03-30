import React, { useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom'


const Signupform = () => {
  // variable to allow navigation after form submission
  let navigate = useNavigate()

  // variable to prevent redirect if authentication is bad
  let correctlyAuthentified;


  useEffect(() => {
    console.log("%c signinform loaded...", "color: green")
  }, [])
 

  // function to move user to home page
  const moveUserHome = async () =>{
    console.log("moving user...")
    if (correctlyAuthentified === true)
    {
    await navigate("/home")
    }
  }

  // sign up person function
  const signUpUser = async () => {
    try{
    const userVar = await createUserWithEmailAndPassword(auth, usernameValue, passwordValue)
    correctlyAuthentified = true
    console.log(correctlyAuthentified)
    moveUserHome()
    } catch(error) {
      console.group("Sign up auth/server error")
      console.error(error.code)
      console.error(error.message)
      console.groupEnd()
      setErrorMsg("The email entered is already in use")
      return
    }
  }



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

    // set to false
    correctlyAuthentified = false
    console.log(correctlyAuthentified)

    // reset error message
    setErrorMsg("")

    // check for empty fields and confirm password
    if (usernameValue === "" || usernameValue === "N/A") {
      setErrorMsg("Email field is empty...")
      return
    }
    if (passwordValue === "" || passwordValue === "N/A") {
      setErrorMsg("Password field is empty...")
      return
    }
    if (passwordValue.length < 6) {
      setErrorMsg("Password must be atleast 6 characters...")
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

    // add user to authentication service
    signUpUser()

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
            {errorMsg ? <div className="text-black bg-error-bg p-1 rounded-xl text-center">{errorMsg}</div> : <div></div>}
            <input onChange={(event) => setUsernameValue(event.target.value)} ref={usernameRef} className="w-3/4 focus:outline-none rounded-lg p-4 drop-shadow-md" type="email" id="userInput" maxLength={50} placeholder="Email" />
            <input onChange={(event) => setPasswordValue(event.target.value)} ref={passwordRef} className="w-3/4 focus:outline-none rounded-lg p-4 drop-shadow-md" type="password" id="passInput" maxLength={50} placeholder="Password" />
            <input onChange={(event) => setConfirmPasswordValue(event.target.value)} ref={confirmPasswordRef} className="w-3/4 focus:outline-none rounded-lg p-4 drop-shadow-md" type="password" id="passConfirmInput" maxLength={50} placeholder="Confirm Password" />
            <button className="hover:font-bold text-black bg-formblue hover:bg-darkformblue hover:text-white p-4 rounded-xl pl-8 pr-8 text-xl" type="submit">Sign Up</button>
            <div>Already have an Account? <Link className="text-darkest-g hover:font-bold" to="/login">Log In</Link></div>
          </form>
        </div>
      </div>
    </>
    </>
  )
}

export default Signupform