import React from "react";
import { Link } from "react-router-dom";
import login from "../../assets/login.png";
import search from "../../assets/material-symbol_search.svg";
import "./Landing2.css";


const Landing2 = () => {
  return (
    <div className="landing-page-before">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="frame">
            <>
              <div className="div-wrapper">
                <Link to="/signup" className="text-wrapper">로그아웃</Link>
              </div>
            </>
          </div>

          <div className="frame-wrapper">
            <div className="image-wrapper">
              <img className="image" alt="Image" src={login} />
            </div>
          <div className="search-bar-container">
            <img className="search-icon" src={search} alt="Search Icon" />
            <input
              type="text"
              className="search-input"
              placeholder="합정에서 공부하기 좋은 카페 추천해줘"
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing2;
