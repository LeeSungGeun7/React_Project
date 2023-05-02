import React, { useEffect, useRef } from 'react';

function KakaoMap() {
  const mapContainer = useRef();

  useEffect(() => {
    // 지도 옵션 설정
    const mapOption = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    // 지도를 생성합니다.
    const map = new window.kakao.maps.Map(mapContainer.current, mapOption);
  }, []);

  return <div id="map" ref={mapContainer} style={{ width: '100%', height: '100%' }} />;
}

export default KakaoMap;

// App.js
