import React, { useState } from "react";
import "./RatingTag.css";
import options from "./dropdownOptions";

const RatingTag = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("별점태그");

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option); // 부모에게 전달
  };

  return (
    <div className="dropdown-menu">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <div>{selected}</div>
        <img src="/assets/Vector 1.svg" alt="arrow" />
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option) => (
            <div
              key={option}
              className={`dropdown-option ${option === selected ? "selected" : ""}`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RatingTag;
