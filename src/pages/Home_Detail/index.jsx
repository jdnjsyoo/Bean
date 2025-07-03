import { React, useState, useEffect } from "react";
import Header from "../../components/Header";
import CafeCard from "../../components/CafeCard";
import CafeDetail from "../../components/CafeDetail/CafeDetail";
import SearchBox from "../../components/SearchBox";
import { recommendedKeywords, recentKeywords } from "../../data/searchDummy";
import "./style.css";
/* dummy data */
// import cafes from  '../../data/cafeDummy';
import axios from "axios";
import { getCafeTagRating, getCafes } from "../../apis/api";
import Chat from "../../components/Chat";

const HomeDetail = () => {
  const [cafeList, setCafeList] = useState([]);
  const [selectedCafe, setSelectedCafe] = useState(null);

  useEffect(() => {
    const getCafesAPI = async () => {
      const cafes = await getCafes();
      setCafeList(cafes);
      //setSelectedCafe(cafes[0])
    };
    getCafesAPI();
  }, []);

  const getTagsAPI = async (tagId, cafe) => {
    const tags = await getCafeTagRating(tagId, { cafeId: cafe.id });
    setTagList(tags);
  };

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
              reviewCount={914}
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
          <SearchBox />
          {selectedCafe ? (
            <CafeDetail cafe={selectedCafe} />
          ) : (
            <Chat
              questionText={"합정에서 공부하기 좋은 카페 추천해줘."}
              recommendedKeywords={recommendedKeywords}
              recentKeywords={recentKeywords}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeDetail;
