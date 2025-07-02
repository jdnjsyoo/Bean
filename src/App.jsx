import { useState } from 'react'
import React from "react"
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPageBefore from "./pages/Landing/Landing"; // Landing.jsx의 컴포넌트
import { SignIn } from "./pages/Login"; // Login/index.jsx의 컴포넌트

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageBefore />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;