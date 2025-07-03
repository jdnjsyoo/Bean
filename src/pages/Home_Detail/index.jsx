import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import CafeCard from "../../components/CafeCard";
import CafeDetail from "../../components/CafeDetail/CafeDetail";
import SearchBox from "../../components/SearchBox";
import "./style.css";
/* dummy data */
// import cafes from "../../data/cafeDummy";
// import WaitingNotice from "../../components/WaitingNotice";
import axios from "axios";

const HomeDetail = () => {
  const [cafes, setCafes] = useState([]);
  const [loading, setLoading] = useState(true); // optional
  const [error, setError] = useState(null); // optional

  useEffect(() => {
    const fetchCafes = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/cafes/");
        setCafes(response.data);
      } catch (err) {
        console.error("Error fetching cafes:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCafes();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading cafes.</div>;

  return (
    <div className="search-page">
      <Header />
      <div className="content-container">
        <div className="left-column">
          {cafes.map((cafe, index) => (
            <CafeCard
              key={index}
              name={cafe.name}
              emptySeats={cafe.emptySeats}
              totalSeats={cafe.totalSeats}
              rating={cafe.rating}
              reviewCount={cafe.reviewCount}
              tags={cafe.tags}
              status={cafe.status}
              hours={cafe.hours}
              address={cafe.address}
              thumbnailUrls={cafe.thumbnailUrls}
            />
          ))}
        </div>
        <div className="right-column">
          <SearchBox />
          {/* <WaitingNotice /> */}
          <CafeDetail />
        </div>
      </div>
    </div>
  );
};

export default HomeDetail;
