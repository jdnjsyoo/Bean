import React from "react";
import chatIcon from "../assets/chat-symbol.svg";
import closeIcon from "../assets/close-symbol.svg"; // 닫기 아이콘

const WaitingNotice = () => {
  return (
    <div style={styles.container}>
      <img src={chatIcon} alt="chat icon" style={styles.icon} />
      <p style={styles.message}>
        <span style={{ fontWeight: 500, color: "#fff" }}>“</span>
        <strong style={styles.highlight}>카페블라블라</strong>
        <span style={{ color: "#fff" }}> 웨이팅이 등록되었습니다.”</span>
      </p>
      <img src={closeIcon} alt="close" style={styles.closeIcon} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#1B672A", // 진한 녹색
    borderRadius: 16,
    padding: "20px 24px",
    width: "100%",
    maxWidth: 480,
    gap: 12,
  },
  icon: {
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  message: {
    margin: 0,
    color: "#fff",
    fontSize: 16,
    flex: 1,
    fontWeight: 400,
    lineHeight: 1.5,
  },
  highlight: {
    color: "#fff",
    fontWeight: 700,
    marginRight: 4,
  },
  closeIcon: {
    width: 20,
    height: 20,
    cursor: "pointer",
  },
};

export default WaitingNotice;
