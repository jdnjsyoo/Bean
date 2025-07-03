import React, { useState } from 'react';
import './CafeDetail.css';
import Rate from '../RateDisplay';
import arrowDown from '../../assets/ep_arrow-down.svg';
import mapIcon from '../../assets/carbon_map.svg';
import clockIcon from '../../assets/mdi_clock.svg';
import wonIcon from '../../assets/mingcute-currency-won-line.svg';
import notebookIcon from '../../assets/stash_notebook.svg';
import tableIcon from '../../assets/hugeicons-table-round.svg';
import coffeeIcon from '../../assets/ep_coffee.svg';
import lineIcon from '../../assets/Line 5.png';
import closeIcon from '../../assets/material-close.svg';
import WaitingPage from '../WaitingPage';
import WaitingPage2 from '../WaitingPage2';

const Container = ( {children}) => {
return(
  <div className='image-box'>
    {children}
  </div>
)
}

const CafeDetail = () => {
  const [phase, setPhase] = useState('info');

  const goWaiting = () => setPhase('waiting')
  const goConfirm = () => {
    console.log('go confirm')
    setPhase('confirm')
  }
  

  if(phase === 'info') {
    return (
    <Container>
        <div className="image-slider">
          <img className="material-close" alt="" src={closeIcon} />
        </div>
        <div className="frame-group">
          <div className="frame-container">
            <div className="frame-div">
              <div className="wrapper">
                <div className="div-text" style={{fontSize: 24}}>카페블라블라</div>
              </div>
              <div className="frame-parent1">
                <Rate />
                <div className="div3-detail">{`전체 리뷰 1,503개  >`}</div>
              </div>
            </div>

            <div className="frame-parent3">
              <div className="container">
                <div className="div4">카페 사장님이 등록한 한 마디 (소개)</div>
              </div>
              <div className="frame-parent4">
                <div className="mingcutecurrency-won-line-parent">
                  <img className="mingcutecurrency-won-line-icon" alt="" src={wonIcon} />
                  <div className="div5">아메리카노 4,500원</div>
                </div>
                <div className="mdiclock-parent">
                  <img className="mdiclock-icon" alt="" src={clockIcon} />
                  <div className="parent">
                    <div className="div6">영업종료</div>
                    <div className="div7">오늘(월) 12:00 ~ 18:00</div>
                  </div>
                </div>
                <div className="carbonmap-parent">
                  <img className="carbonmap-icon" alt="" src={mapIcon} />
                  <div className="dropdown-menu-wrapper">
                    <div className="div8">서울 관악구 관악로13길 20</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 태그 영역 */}
          <div className="group-parent">
            <div className="rectangle-parent">
              <div className="group-child" />
              <div className="div9">카공맛집</div>
            </div>
            <div className="rectangle-group">
              <div className="group-item" />
              <div className="div10">에그타르트</div>
            </div>
            <div className="rectangle-container">
              <div className="group-inner" />
              <div className="div11">수제쿠키</div>
            </div>
            <div className="rectangle-container">
              <div className="group-inner" />
              <div className="div12">주차 가능</div>
            </div>
          </div>
        </div>

        {/* 회색 구분선 */}
        <div className="frame-child" />

        {/* 탭 + 좌석 정보 + 웨이팅 */}
        <div className="frame-parent5">
          <div className="group">
            <b className="b">홈</b>
            <div className="div4">메뉴</div>
            <div className="div4">
              <span>사진 </span>
              <span className="span2">3,914</span>
            </div>
            <div className="div4">
              <span>리뷰 </span>
              <span className="span3">1,503</span>
            </div>
          </div>

          <img className="frame-item" alt="" src={lineIcon} />

          <div className="frame-parent6">
            <div className="frame-parent7">
              <div className="parent1">
                <div className="div">현재 잔여석:</div>
                <div className="div17">
                  <span>2</span>
                  <span className="span4"> </span>
                  <span className="span5">/ 10</span>
                </div>
              </div>
              <div className="stashnotebook-parent">
                <img className="stashnotebook-icon" alt="" src={notebookIcon} />
                <div className="div4">
                  <span>콘센트 자리 잔여석: </span>
                  <span className="span6">0</span>
                  <span> </span>
                  <span className="span5">/ 2</span>
                </div>
              </div>
            </div>

            <div className="frame-parent8">
              <div className="wrapper1">
                <div className="div">웨이팅</div>
              </div>
              <div className="frame-parent9">
                <div className="frame-wrapper" onClick={goWaiting}>
                  <div className="frame-parent10">
                    <div className="hugeiconstable-round-parent">
                      <img className="hugeiconstable-round" alt="" src={tableIcon} />
                      <div className="div">매장 이용</div>
                    </div>
                    <div className="parent2">
                      <div className="div4">1팀</div>
                      <img className="eparrow-down-icon" alt="" src={arrowDown} />
                    </div>
                  </div>
                </div>

                <div className="frame-wrapper" onClick={goWaiting}>
                  <div className="frame-parent11">
                    <div className="hugeiconstable-round-parent">
                      <img className="hugeiconstable-round" alt="" src={coffeeIcon} />
                      <div className="div">테이크아웃</div>
                    </div>
                    <div className="parent2">
                      <div className="div4">0팀</div>
                      <img className="eparrow-down-icon" alt="" src={arrowDown} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 지도 */}
        <div className="frame-parent12">
          <div className="wrapper2">
            <div className="div24">매장 위치</div>
          </div>
          <div className="rectangle-wrapper">
            <div className="frame-inner" />
          </div>
        </div>
      
    </Container>
  )
    
  }

  if(phase === 'waiting') {
    return(
      <Container>
        <WaitingPage onGoToNextButtonClick={goConfirm} />
      </Container>
    )
  }
  
  else {
    return (
      <Container>
        <WaitingPage2 />
      </Container>
    )
  }
}


export default CafeDetail;
