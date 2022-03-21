import { Outlet, Link } from "react-router-dom"
import { useState } from "react"

// make a popup form for the create a post form and do not use a route in the final version...
// App is base template for pages: place [header] here...

// to add: [big title] [link to home] [link to signup] [link to login] [link to logout]
// conditionally render signup/login/logout options based on if user has logged in

//signup, login, home

function App() {

  const isLoggedin = true



  return (
    <>
      <div className="flex flex-row gap-4 p-2 bg-lightest-g drop-shadow-xl sticky top-0 z-10 overflow-scroll">
        <div className="text-5xl font-bold m-4 sm:text-2xl">CitrusSocial&trade;</div>
        <nav className="flex flex-row items-center">
          <Link className="p-4 m-2 text-xl hover:font-extrabold hover:bg-light-g" to="/home">Home</Link>
          { isLoggedin ?
          <Link className="p-4 m-2 text-xl hover:font-extrabold hover:bg-light-g" to="/login">Login</Link> :
          <Link className="p-4 m-2 text-xl hover:font-extrabold hover:bg-light-g" to="/login">Logout</Link>
          }
          <Link className="p-4 m-2 text-xl hover:font-extrabold hover:bg-light-g" to="/signup">Signup</Link>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default App;
