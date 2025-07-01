import React from "react";
import login from "../assets/login.png";

function Login() {
  return (
    <div className="w-screen h-screen overflow-auto">
      <div
        className="w-full h-full bg-[url('/background.png')] bg-cover bg-center bg-no-repeat relative"
      >
        {/* 로그인/회원가입 버튼 */}
        <div className="absolute top-8 right-10 flex gap-6 text-white text-lg font-semibold z-10">
          <div>로그인</div>
          <div>회원가입</div>
        </div>

        {/* 가운데 카드 */}
        <div className="absolute top-1/2 left-1/2 w-[770px] h-[339px] -translate-x-1/2 -translate-y-1/2 bg-[#f4f0e5cc] shadow-md opacity-80 flex items-center justify-center z-10">
          <img
            className="h-[214px] object-contain"
            alt="카페 이미지"
            src={login}
          />
        </div>
      </div>
    </div>
  );
}

export default Login