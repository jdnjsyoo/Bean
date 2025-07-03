import React, { useState } from "react";
import RatingTag from "./RatingTag/RatingTag";
import "./RatingTag/RatingTag.css";
import star from "../assets/Vector.svg";

const Rate = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="frame-parent">
      <div className="dropdown-menu-wrapper">
        <RatingTag onSelect={setSelectedOption} />
      </div>

      {selectedOption && (
        <div className="vector-parent">
          <img className="vector-icon" alt="star" src={star} />
          <div className="div1">
            <span className="span">{selectedOption.rating}</span>
            <span className="span1"> ({selectedOption.count})</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rate;
