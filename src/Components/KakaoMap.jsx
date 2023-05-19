// import React, { useEffect, useRef } from 'react';

// function KakaoMap() {
//   const mapContainer = useRef();

//   useEffect(() => {
//     // 지도 옵션 설정
//     const mapOption = {
//       center: new window.kakao.maps.LatLng(33.450701, 126.570667),
//       level: 3,
//     };

//     // 지도를 생성합니다.
//     const map = new window.kakao.maps.Map(mapContainer.current, mapOption);
//   }, []);

//   return <div id="map" ref={mapContainer} style={{ width: '100%', height: '100%' }} />;
// }

// export default KakaoMap;

import React, { useEffect, useRef } from 'react';
import $ from 'jquery';

function KakaoMap({ chargerInfo , Lat , Lng }) {
  const mapContainer = useRef(null);
  const map = useRef(null); // map 객체를 저장할 ref를 추가
  
  useEffect(() => {
    if (mapContainer.current) {
      const mapOption = {
        center: new window.kakao.maps.LatLng(Lat , Lng),
        level: 4,
      };
      map.current = new window.kakao.maps.Map(mapContainer.current, mapOption) // map 객체를 ref에 저장

      const createMarkers = () => {
        const positions = chargerInfo.map((data) => ({
          title: data.title,
          latlng: new window.kakao.maps.LatLng(data.lat, data.lng),
        }));

        const imageSrc = "https://cdn-icons-png.flaticon.com/128/2962/2962317.png";

        positions.forEach((position) => {
          const imageSize = new window.kakao.maps.Size(45, 64);
          const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);
          const marker = new window.kakao.maps.Marker({
            map: map.current,
            position: position.latlng,
            title: position.title,
            image: markerImage,
          });
        });
      };

      if (chargerInfo.length > 0) {
        createMarkers();
      }
    }
  }, [chargerInfo, Lat, Lng]);

  useEffect(() => {
    if (map.current) {
      const moveLatLon = new window.kakao.maps.LatLng(Lat, Lng);
      map.current.setCenter(moveLatLon);
    }

  }, [Lat, Lng]);

  
  return <div id="map" ref={mapContainer} style={{ width: '100%', height: '100%' }} />;
}

export default KakaoMap;

// App.js
