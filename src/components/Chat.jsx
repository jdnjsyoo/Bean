import { React, useState } from 'react';
import { recommendedKeywords, recentKeywords } from '../data/searchDummy';
import { useNavigate } from 'react-router-dom';

const Chat = ({
  questionText,
  recommendedKeywords = [],
  recentKeywords = [],
}) => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (inputValue.trim()) {
        navigate(`/search?q=${encodeURIComponent(inputValue)}`);
      }
    }
  };

  return (
    <div
      className="chat-container"
      style={{
        width: '450px',
        height: '710px',
        padding: '2px 38px',
        background: 'var(--chatbot_bg, #D8E4DA)',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 155,
      }}
    >
      {/* 질문 텍스트 */}
      <div
        style={{
          alignSelf: 'stretch',
          height: 70.94,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 6,
        }}
      >
        <div
          style={{
            width: 279,
            textAlign: 'center',
            color: 'black',
            fontSize: 24,
            fontFamily: 'Inter',
            fontWeight: 600,
            wordWrap: 'break-word',
          }}
        >
          {questionText}
        </div>
      </div>

      {/* 검색창 및 추천어 */}
      <div
        style={{
          width: 530,
          padding: '30px 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: 40,
        }}
      >
        {/* 검색 입력창 */}
        <div
          style={{
            width: '424px',
            height: '33px',
            padding: '14px 13px 13px',
            background: '#ECECEC',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            margin: '0 auto'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center'}}>
            <input
              type="text"
              placeholder="검색어를 입력하세요."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{
                border: 'none',
                outline: 'none',
                background: 'transparent',
                fontSize: 15,
                fontFamily: 'Inter',
                color: '#8C8C8C',
                padding: '10px',
                width: '400px',
              }}
            />
          </div>
        </div>

        {/* 추천 검색어 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 15, alignSelf: 'center' }}>
          <div>
            <div
              style={{
                height: 18,
                color: 'black',
                fontSize: 15,
                fontFamily: 'Inter',
                fontWeight: 400,
                display: 'flex'
              }}
            >
              추천 검색어
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
              {recommendedKeywords.map((text, idx) => (
                <div key={idx} style={tagStyle('#1C6A28')}>
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* 최근 검색어 */}
          <div>
            <div
              style={{
                height: 18,
                color: 'black',
                fontSize: 15,
                fontFamily: 'Inter',
                fontWeight: 400,
                display: 'flex'
              }}
            >
              최근 검색어
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
              {recentKeywords.map((text, idx) => (
                <div key={idx} style={tagStyle('#0A4C14')}>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const tagStyle = (bgColor) => ({
  padding: 10,
  background: bgColor,
  borderRadius: 10,
  border: '1px solid white',
  color: 'white',
  fontSize: 15,
  fontFamily: 'Inter',
  fontWeight: 400,
  textAlign: 'center',
});

export default Chat;
