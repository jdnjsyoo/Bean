import { useState } from "react";
import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPageBefore from "./pages/Landing/Landing"; // Landing.jsx의 컴포넌트
import Landing2 from "./pages/Landing/Landing2";
import SignIn from "./pages/Login"; // Login/index.jsx의 컴포넌트
import SignUp from "./pages/SignUp";
import Search from "./pages/Search";
import HomeDetail from "./pages/Home_Detail";
import WaitingPage from "./components/WaitingPage";
import WaitingPage2 from "./components/WaitingPage2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageBefore />} />
        <Route path="/home" element={<Landing2 />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail" element={<HomeDetail />} />
        <Route path="/waiting" element={<WaitingPage />} />
        <Route path="/waiting2" element={<WaitingPage2 />} />
      </Routes>
    </Router>
  );
}

export default App;
