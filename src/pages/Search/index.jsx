import React from 'react';
import Header from '../../components/Header';
import CafeCard from '../../components/CafeCard';
import Chat from '../../components/Chat';
import './style.css';
/* dummy data */
import cafes from  '../../data/cafeDummy';

const Search = () => {
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
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Search;
