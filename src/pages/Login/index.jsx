import React from "react";
import Logo from "../../components/Logo";
import line10 from "../../assets/line10.svg";
import "./style.css";
import "../../styles/styleguide.css";
import { Link } from "react-router-dom"

const SignIn = () => {
    return (
        <div className="sign-in">
            <div className="div">
                <div className="text-wrapper">로그인</div>

                <div className="overlap-group">
                    <div className="frame">
                        <div className="div-wrapper">
                            <input
                                type="text"
                                className="input-text"
                                placeholder="아이디를 입력해주세요"
                            />
                        </div>

                        <div className="frame-2">
                            <input
                                type="password"
                                className="input-text"
                                placeholder="비밀번호를 입력해주세요"
                            />
                        </div>
                    </div>
                </div>

                <div className="frame-3">
                    <div className="frame-4">
                        <Link to="/home" className="text-wrapper-3">로그인</Link>
                    </div>

                    <div className="frame-5">
                        <Link to="/signup" className="text-wrapper-4">회원가입</Link>
                    </div>
                </div>

                <div className="text-2">{""}</div>

                <div className="frame-6">
                    <div className="text-wrapper-5">아이디 찾기</div>
                    <img className="line" alt="Line" src={line10} />
                    <div className="text-wrapper-5">비밀번호 찾기</div>
                </div>

                <Logo className="logo-instance" />
            </div>
        </div>
    );
};

export default SignIn;
