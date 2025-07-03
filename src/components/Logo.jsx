import React from "react";
import logoImage from "../assets/logo.png"; // 실제 경로 확인 필요

const Logo = () => {
return (
  <img
    src={logoImage}
    alt="Logo"
    className="logo-instance"
  />
);
};

export default Logo;