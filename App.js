import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './componenets/Login/Login.js';
import Submit from './componenets/Submit/Submit.js';
import Signin from './componenets/Signin/Signin.js';
import Signup from './componenets/Signup/Signup.js';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Submit" element={<Submit />} />
          <Route path="/Submit/Signin" element={<Signin/>}/>
          <Route path="/Submit/Signup" element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
