import React from 'react';

const CafeCard = ({
  name,
  emptySeats,
  totalSeats,
  rating,
  reviewCount,
  tags,
  status,
  hours,
  address,
  thumbnailUrls,
}) => {
  return (
    <div className="cafe-card" style={{ display: 'flex', flexDirection: 'column', marginBottom: 32 }}>
      {/* 상단: 제목 + 빈자리 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontWeight: 'bold' }}>{name}</h3>
        <div
          style={{
            background: '#D8E4DA',
            borderRadius: 10,
            padding: '4px 10px',
            fontWeight: '600',
            fontSize: 13,
            height: '20px',
          }}
        >
          빈자리 : <span style={{ color: 'red' }}>{emptySeats}</span> / {totalSeats}
        </div>
      </div>

      {/* 썸네일 이미지들 */}
      <div style={{ display: 'flex', gap: 10, margin: '10px 0' }}>
        {thumbnailUrls?.map((url, idx) => (
          <div
            key={idx}
            style={{
              width: 170,
              height: 123,
              borderRadius: 5,
              backgroundImage: `url(${url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#d9d9d9',
            }}
          />
        ))}
      </div>

      {/* 태그 + 평점 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {tags?.map((tag, idx) => (
          <span
            key={idx}
            style={{
              padding: '4px 10px',
              background: 'white',
              borderRadius: 5,
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            #{tag}
          </span>
        ))}
        <span style={{ fontSize: 13, fontWeight: 600 }}>⭐ {rating} ({reviewCount})</span>
      </div>

      {/* 영업시간 + 주소 */}
      <div style={{ marginTop: 8, fontSize: 13 }}>
        <div style={{ display: 'flex', allignItems: 'center', gap: 8}}>
          <div style={{ color: status === '영업중' ? 'green' : '#D90000' }}>{status}</div>
          <div>{hours}</div>
        </div>
        <div style={{display: 'flex'}}>{address}</div>
      </div>
    </div>
  );
};

export default CafeCard;
