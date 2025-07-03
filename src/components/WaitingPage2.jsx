import React, { useState } from "react";
import WaitingNotice from "./WaitingNotice";
import { useNavigate } from "react-router-dom";

const WaitingPage2 = () => {
  const [showNotice, setShowNotice] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  const handleRegister = () => {
    setShowNotice(true);
    // console.log("🔔 showNotice = true");

    setTimeout(() => {
      setShowNotice(false);
      // console.log("🕒 showNotice = false");
    }, 3000);
  };

  const cafeName = "카페블라블라";
  const waitingCount = 0;
  const totalGuests = 2;
  const tableInfo = "2인석, 콘센트 자리";

  const noticeList = [
    "웨이팅 등록 후, 방문을 하지 않으면 방문 이력이 노쇼로 처리될 수 있습니다. 노쇼로 처리될 경우, 빈자리 이용에 제한이 생길 수 있으니 이 점 꼭 확인 부탁드립니다.",
    "웨이팅 노쇼는 매장과 매장을 이용하는 다른 고객에게 피해를 줄 수 있으니, 꼭 방문하실 분만 신중하게 웨이팅을 등록해주세요.",
    "부득이하게 방문이 힘드신 경우, 알림톡 또는 빈자리 앱을 통해 웨이팅을 취소해주세요.",
    "빈자리는 매장의 원활한 운영과 고객의 매장 이용의 불편함을 덜기 위해 최선을 다해 노력하고 있습니다.",
  ];

  const HorizontalLine = () => (
    <div
      style={{
        height: 5,
        width: "100%",
        backgroundColor: "#f6f6f6",
        marginTop: "20px 0",
      }}
    />
  );

  return (
    <div
      style={{
        display: "flex",
        width: '530px',
        boxSizing: 'border-box',
        justifyContent: "center",
        padding: 32,
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          width: '100%',
          backgroundColor: "#fff",
          borderRadius: 16,
          boxShadow: "0 0 0 1px #e0e0e0",
          padding: 50,
          display: "flex",
          flexDirection: "column",
          gap: 15,
        }}
      >
        {/* 상단 안내 */}
        <div style={{ textAlign: "left" }}>
          <button
            onClick={handleBack}
            style={{
              background: "none",
              border: "none",
              display: "flex",
              alignItems: "center",
              gap: 10,
              cursor: "pointer",
              fontSize: 18,
              fontWeight: 700,
              color: "#333",
              padding: 0,
              marginBottom: 8,
            }}
          >
            <span style={{ fontSize: 20, fontWeight: 700 }}>←</span> 웨이팅 정보
            확인
          </button>

          <p
            style={{
              fontSize: 22,
              fontWeight: 600,
              marginTop: 20,
              lineHeight: 1.6,
              gap: 10,
            }}
          >
            <span style={{ color: "#1a7f44", fontWeight: 800 }}>
              {cafeName}
            </span>
            에<br />
            웨이팅 등록 하시겠어요?
          </p>
        </div>

        {/* 현재 웨이팅 */}
        <div
          style={{
            border: "2.0px solid #d9ecdd",
            borderRadius: 12,
            padding: "12px 0",
            textAlign: "center",
            width: "70%",
            alignSelf: "center",
            margin: 10,
          }}
        >
          <div style={{ fontSize: 14, color: "#666" }}>현재 웨이팅</div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              color: "#1a7f44",
              marginTop: 10,
            }}
          >
            {waitingCount} 팀
          </div>
        </div>

        <HorizontalLine />

        {/* 정보 요약 섹션 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "20px 20px",
            // borderBottom: "1px solid #eee",
          }}
        >
          {[
            ["이용 방식", "매장 이용"],
            ["총 입장 인원", "2명"],
            ["테이블 타입 요청", "2인석, 콘센트 자리"],
          ].map(([label, value], idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 16, fontWeight: 600 }}>{label}</span>
              <span style={{ fontSize: 16 }}>{value}</span>
            </div>
          ))}
        </div>

        {/* 안내사항 */}
        <div
          style={{
            fontSize: 16,
            textAlign: "left",
            backgroundColor: "#f6f6f6",
            borderRadius: 8,
            padding: "10px 16px",
          }}
        >
          <p style={{ fontWeight: 600, margin: 20 }}>
            웨이팅 등록 전 꼭 확인해주세요
          </p>
          <ul
            style={{
              paddingLeft: 16,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {noticeList.map((item, idx) => (
              <li
                key={idx}
                style={{
                  lineHeight: 1.6,
                  color: "#444",
                  fontSize: 14,
                  padding: "0 18px",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 버튼 */}
        <button
          onClick={handleRegister} // 등록 버튼 핸들러 연결
          style={{
            marginTop: 12,
            width: "100%",
            height: 48,
            backgroundColor: "#d9ecdd",
            border: "none",
            borderRadius: 8,
            fontWeight: 600,
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          웨이팅 등록하기
        </button>
      </div>
    </div>
  );
};

export default WaitingPage2;
