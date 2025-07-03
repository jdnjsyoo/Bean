import React, { useState } from "react";
import "./RatingTag.css";
import options from "./dropdownOptions";
import downarrow from "../../assets/Vector 1.svg";

const RatingTag = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("별점태그");

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (option) => {
    setSelected(option.label);
    setIsOpen(false);
    if (onSelect) onSelect(option); // option 전체를 전달
  };

  return (
    <div className="dropdown-menu">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span>{selected}</span>
        <img src={downarrow} alt="arrow" />
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option) => (
            <div
              key={option.label}
              className={`dropdown-option ${option.label === selected ? "selected" : ""}`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RatingTag;
