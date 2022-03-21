import React from 'react';
import ReactDOM from 'react-dom';
import Loginform from './components/forms/Loginform';
import Signupform from './components/forms/Signupform';
import Header from './components/Header';
import Home from './pages/Home';
import './index.css';
import App from './App';
import 
{ BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"


ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />}/>
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Loginform />} />
          <Route path="signup" element={<Signupform />} />
        </Route>
        <Route path="*" element={
        <main style={{ padding: "1rem" }}>
          <Header />
          <p>There's nothing here!</p>
        </main>
      } /> 
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

