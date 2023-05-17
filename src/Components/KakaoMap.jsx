
// import React, { useEffect, useRef } from 'react';




// function KakaoMap({ chargerInfo , Lat , Lng }) {
//   const mapContainer = useRef(null);

  
  
//   useEffect(() => {
//     if (mapContainer.current) {
//       const mapOption = {
//         center: new window.kakao.maps.LatLng(Lat , Lng),
//         level: 4,
//       };
//       const map = new window.kakao.maps.Map(mapContainer.current, mapOption)

//       const createMarkers = () => {
//         const positions = chargerInfo.map((data) => ({
//           title: data.title,
//           latlng: new window.kakao.maps.LatLng(data.lat, data.lng),
//         }));

//         const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

//         positions.forEach((position) => {
//           const imageSize = new window.kakao.maps.Size(24, 35);
//           const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);
//           const marker = new window.kakao.maps.Marker({
//             map: map,
//             position: position.latlng,
//             title: position.title,
//             image: markerImage,
//           });
//         });
//       };

  

//       if (chargerInfo.length > 0) {
//         createMarkers();

//       }
    
//     }
//   }, [chargerInfo]);

 

  


  



//   return <div id="map" ref={mapContainer} style={{ width: '100%', height: '100%' }} />;
// }

// export default KakaoMap;

import React, { useEffect, useRef } from 'react';

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

