import { Outlet, Link, useOutletContext } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import { auth } from "./firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

// make a popup form for the create a post form and do not use a route in the final version...
// App is base template for pages: place [header] here...

// use context tag in outlet to pass down useState from App
// const [user, setUser] = useOutletContext(); in child elements to access value of user...

//signup, login, home

function App() {

  // useEffect for debugging purposes
  useEffect(() => {
    console.log("%c App(header) loaded...", "color: green")
  }, [])

  // state variable to manage whether auth or non-auth UI should load
  const [user, setUser] = useState({})
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  // turnery to check whether auth or non-auth elements should load
  const isLoggedin = user ? true : false

  // function to sign out users via the header
  const logout = async () => {
    await signOut(auth);
  }


  // <Link className="p-4 m-2 text-2xl hover:font-extrabold hover:bg-light-g" to="/login">Login</Link>

  return (
    <>
      <div className="flex flex-row gap-4 p-2 bg-lightest-g drop-shadow-xl sticky top-0 z-10 overflow-scroll">
        <div className="text-4xl font-bold m-4">CitrusSocial&trade;</div>
        <nav className="flex flex-row items-center">
          <Link className="p-4 m-2 text-2xl hover:font-extrabold hover:bg-light-g" to="/home">Home</Link>
          { isLoggedin ?
          <Link onClick={logout} className="p-4 m-2 text-2xl hover:font-extrabold hover:bg-light-g" to="/home">Logout</Link> :
          <Link className="p-4 m-2 text-2xl hover:font-extrabold hover:bg-light-g" to="/login">Login</Link>
          }
          { isLoggedin ? <div></div> : <Link className="p-4 m-2 text-2xl hover:font-extrabold hover:bg-light-g" to="/signup">Signup</Link>}
        </nav>
        { isLoggedin ? <div className="p-4 m-2 text-2xl">{user?.email}</div> : <div></div>}
      </div>
      <Outlet context={[user, setUser]} />
    </>
  );
}

export default App;
