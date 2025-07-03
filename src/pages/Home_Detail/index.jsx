import React from 'react';
import Header from '../../components/Header';
import CafeCard from '../../components/CafeCard';
import CafeDetail from '../../components/CafeDetail/CafeDetail';
import SearchBox from '../../components/SearchBox';
import './style.css';
/* dummy data */
import cafes from  '../../data/cafeDummy';

const HomeDetail = () => {
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
          <SearchBox/>
          <CafeDetail/>
        </div>
      </div>
    </div>
  );
};

export default HomeDetail;
