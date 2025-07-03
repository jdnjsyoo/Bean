import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // ✅ 추가
import Header from "../../components/Header";
import CafeCard from "../../components/CafeCard";
import Chat from "../../components/Chat";
import CafeDetail from "../../components/CafeDetail/CafeDetail";
import "./style.css";
import cafes from "../../data/cafeDummy";
import { recommendedKeywords, recentKeywords } from "../../data/searchDummy";

import axios from "axios";
import { getChatbot } from "../../apis/api";
import SearchBox from "../../components/SearchBox";

const Search = () => {
  const [cafeList, setCafeList] = useState([]);
  const [selectedCafe, setSelectedCafe] = useState(null);
  const location = useLocation(); // ✅ 현재 URL 접근
  const query = new URLSearchParams(location.search).get("q"); // ✅ 쿼리 파싱
  const [question, setQuestion] = useState(query);

  useEffect(() => {
    const getCafesAPI = async () => {
      const cafes = await getChatbot({ question: question });
      setCafeList(cafes);
    };
    setQuestion(query);
    getCafesAPI();
  }, []);

  useEffect(() => {
    const getCafesAPI = async () => {
      const cafes = await getChatbot({ question: question });
      setCafeList(cafes);
    };
    setQuestion(query);
    getCafesAPI();
  });

  useEffect(() => {
    const getCafesAPI = async () => {
      const cafes = await getChatbot({ question: question });
      setCafeList(cafes);
    };
    getCafesAPI();
  }, [question]);

  return (
    <div className="search-page">
      <Header />
      <div className="content-container">
        <div className="left-column">
          {cafeList.slice(0, 10).map((cafe, index) => (
            <CafeCard
              key={index}
              name={cafe.name}
              emptySeats={6}
              totalSeats={20}
              rating={cafe.rating}
              reviewCount={1216}
              tags={cafe.keywords.slice(0, 5).map((keyword) => keyword.content)}
              status={"영업중"}
              hours={"오늘(월) 12:00 ~ 18:00"}
              address={cafe.address}
              thumbnailUrls={cafe.photo_urls}
              onClick={() => setSelectedCafe(cafe)}
            />
          ))}
        </div>
        <div className="right-column">
          {selectedCafe ? (
            <>
              <SearchBox />
              <CafeDetail cafe={selectedCafe} />
            </>
          ) : (
            <Chat
              questionText={query || "합정에서 공부하기 좋은 카페 추천해줘."}
              recommendedKeywords={recommendedKeywords}
              recentKeywords={recentKeywords}
              onClick={setQuestion}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
