import { React, useState } from "react";
import chatIcon from "../assets/chat-symbol.svg";
import sendIcon from "../assets/send-symbol.svg";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (inputValue.trim()) {
        navigate(`/search?q=${encodeURIComponent(inputValue)}`);
      }
    }
  };

  return (
    <div style={styles.container}>
      <img src={chatIcon} alt="chat icon" style={styles.icon} />
      <input
        type="text"
        style={styles.input}
        value={inputValue}
        placeholder="어떤 카페를 찾고 계신가요?"
        onKeyDown={handleKeyDown}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <img src={sendIcon} alt="send icon" style={styles.icon} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    width: 500,
    backgroundColor: "#d8e4da",
    borderRadius: 10,
    padding: "20px 16px",
    gap: 12,
  },
  icon: {
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  input: {
    flex: 1,
    backgroundColor: "#d8e4da",
    border: "none",
    outline: "none",
    fontSize: 15,
    fontFamily: "Inter",
    color: "#333",
  },
};

export default SearchBox;
