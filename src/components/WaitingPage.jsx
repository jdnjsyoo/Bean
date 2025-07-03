import React, { useState } from "react";

const WaitingPage = () => {
  const [count, setCount] = useState(2);

  const purposeTags = [
    "노트북 활용 공부/작업",
    "노트북 없이 공부/작업",
    "데이트",
    "친구와 수다",
    "사진/인스타",
    "혼자 힐링",
    "팀 회의",
    "기타",
  ];

  const seatTags = {
    인원기준: ["1인석", "2인석", "4인석", "6인 이상 단체석"],
    형태기준: ["바 테이블", "원형 테이블", "테라스석", "소파석"],
    기능기준: ["콘센트 자리", "창가 자리", "흡연가능 야외석", "에어컨 근처"],
  };

  const TAG_STYLE = {
    padding: "8px 16px",
    backgroundColor: "white",
    border: "1px solid #ccc",
    borderRadius: 10,
    fontSize: 13,
    fontWeight: 500,
    cursor: "pointer",
  };

  const HorizontalLine = () => (
    <div
      style={{
        height: 5,
        width: "100%",
        backgroundColor: "#f6f6f6",
      }}
    />
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: 32,
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          width: 530,
          backgroundColor: "#fff",
          borderRadius: 16,
          boxShadow: "0 0 0 1px #e0e0e0",
          padding: 45,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        {/* 방문 인원 */}
        <div style={{ textAlign: "left" }}>
          <h3 style={{ fontSize: 20, fontWeight: "bold", margin: 0 }}>
            방문 인원
          </h3>
          <p style={{ fontSize: 14, color: "#666", marginTop: 10 }}>
            방문 총 인원을 확인해주세요.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginTop: 15,
              gap: 12,
            }}
          >
            <span style={{ fontSize: 16, fontWeight: "bold", marginTop: 20 }}>
              인원 수
            </span>
            <div
              style={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "flex-start",
                gap: 20,
              }}
            >
              <button
                onClick={() => setCount((c) => Math.max(1, c - 1))}
                style={{
                  width: 27,
                  height: 27,
                  borderRadius: "50%",
                  backgroundColor: "#f1f1f1",
                  fontSize: 18,
                  border: "none",
                  marginTop: 20,
                }}
              >
                –
              </button>
              <span style={{ fontSize: 18, marginTop: 22 }}>{count}</span>
              <button
                onClick={() => setCount((c) => c + 1)}
                style={{
                  width: 27,
                  height: 27,
                  borderRadius: "50%",
                  backgroundColor: "#f1f1f1",
                  fontSize: 18,
                  border: "none",
                  marginTop: 20,
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <HorizontalLine />

        {/* 방문 목적 */}
        <div style={{ textAlign: "left" }}>
          <h3
            style={{
              fontSize: 20,
              fontWeight: "bold",
              margin: 0,
            }}
          >
            방문 목적
          </h3>
          <p style={{ fontSize: 14, color: "#666", marginTop: 10 }}>
            서비스 개선에 활용됩니다.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              marginTop: 20,
            }}
          >
            {purposeTags.map((tag, idx) => (
              <div key={idx} style={TAG_STYLE}>
                {tag}
              </div>
            ))}
          </div>
        </div>

        <HorizontalLine />

        {/* 테이블 타입 요청 */}
        <div style={{ textAlign: "left" }}>
          <h3 style={{ fontSize: 20, fontWeight: "bold", margin: 0 }}>
            테이블 타입 요청{" "}
            <span style={{ fontSize: 14, fontWeight: 400 }}>(선택)</span>
          </h3>
          <p style={{ fontSize: 14, color: "#666", marginTop: 10 }}>
            선택시 해당 테이블 타입이 남아있는 경우에만 예약이 확정됩니다.
          </p>
          {Object.entries(seatTags).map(([title, tags]) => (
            <div key={title} style={{ marginTop: 22 }}>
              <span style={{ color: "#2d8c59", fontSize: 14, fontWeight: 500 }}>
                {title}
              </span>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                  marginTop: 8,
                }}
              >
                {tags.map((tag, idx) => (
                  <div key={idx} style={TAG_STYLE}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 다음 버튼 */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{
              width: "100%",
              height: 48,
              backgroundColor: "#d9ecdd",
              border: "none",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
              marginTop: 20,
            }}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaitingPage;
