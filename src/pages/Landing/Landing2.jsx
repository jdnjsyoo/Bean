import { React, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/login.png";
import search from "../../assets/material-symbol_search.svg";
import "./Landing2.css";

const Landing2 = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate(); 

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };
  
  return (
    <div className="landing2">
      <div className="landing2-overlap-group-wrapper">
        <div className="landing2-overlap-group">
          
          <div className="landing2-frame">
            <div className="landing2-div-wrapper">
              <Link to="/" className="landing2-text-wrapper">로그아웃</Link>
            </div>
          </div>

          <div className="landing2-frame-wrapper">
            <div className="landing2-image-wrapper">
              <img className="landing2-image" alt="Image" src={login} />
            </div>

            <div className="landing2-search-bar-container">
              <img className="landing2-search-icon" src={search} alt="Search Icon" />
              <input
                type="text"
                className="landing2-search-input"
                placeholder="합정에서 공부하기 좋은 카페 추천해줘"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Landing2;
