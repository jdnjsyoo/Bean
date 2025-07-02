import React from "react";
import { Link } from "react-router-dom";
import login from "../../assets/login.png";
import "./Landing.css";


const LandingPageBefore = () => {
  return (
    <div className="landing-page-before">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="frame">
            <>
              <div className="div-wrapper">
                <Link to="/login" className="text-wrapper">로그인</Link>
              </div>

              <div className="div-wrapper">
                <Link to="/signup" className="text-wrapper">회원가입</Link>
              </div>
            </>
          </div>

          <div className="frame-wrapper">
            <div className="image-wrapper">
              <img className="image" alt="Image" src={login} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageBefore;
