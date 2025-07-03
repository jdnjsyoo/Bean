import React from "react";
import Logo from "../../components/Logo";
import "./style.css";
import "../../styles/styleguide.css";
import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="div-2">
        <div className="text-wrapper-4">회원가입</div>
        <Logo className="logo-instance" />

        <div className="frame-3">
          <div className="text-wrapper-6">*필수입력</div>

          <div className="frame-4">
            {/* 아이디 */}
            <div className="input-group">
              <label htmlFor="username">아이디<span className="required">*</span></label>
              <input id="username" type="text" placeholder="아이디를 입력해주세요" />
            </div>

            {/* 비밀번호 */}
            <div className="input-group">
              <label htmlFor="password">비밀번호<span className="required">*</span></label>
              <input id="password" type="password" placeholder="비밀번호를 입력해주세요" />
            </div>

            {/* 비밀번호 확인 */}
            <div className="input-group">
              <label htmlFor="passwordCheck">비밀번호 확인<span className="required">*</span></label>
              <input id="passwordCheck" type="password" placeholder="비밀번호를 한번 더 입력해주세요" />
            </div>

            {/* 이름 */}
            <div className="input-group">
              <label htmlFor="name">이름<span className="required">*</span></label>
              <input id="name" type="text" placeholder="이름을 입력해주세요" />
            </div>

            {/* 이메일 */}
            <div className="input-group">
              <label htmlFor="email">이메일<span className="required">*</span></label>
              <input id="email" type="email" placeholder="이메일을 입력해주세요" />
            </div>

            {/* 휴대폰 */}
            <div className="input-group">
              <label htmlFor="phone">휴대폰<span className="required">*</span></label>
              <input id="phone" type="tel" placeholder="숫자만 입력해주세요" />
            </div>

            {/* 생년월일 */}
            <div className="input-group">
              <label htmlFor="birthday">생년월일</label>
              <input id="birthday" type="text" placeholder="YYYY / MM / DD" />
            </div>
          </div>
        </div>

        {/* 버튼 */}
        <div className="group">
          <Link to="/home" className="signup-button">회원가입하기</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
