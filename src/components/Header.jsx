import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div
      style={{
        position: 'fixed',
        width: '100%',
        backgroundColor: '#f4f0e5',
        fill: '#f4f0e5',
        height: '80px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 80px',
        boxSizing: 'border-box',
        gap: 0,
        textAlign: 'center',
        fontSize: 15,
        color: '#000',
        fontFamily: 'Inter',
        zIndex:2,
      }}
    >
      <img
        alt="로고"
        src={Logo}
        style={{
          width: 124,
          position: 'relative',
          maxHeight: '100%',
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
          }}
        >
          <Link to="/"
            style={{
              position: 'relative',
              fontWeight: 600,
            }}
          >
            로그아웃
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
