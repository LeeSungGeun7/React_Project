

// import React, { useEffect, useRef, useState } from 'react';
// import AxiosApi from '../api/AxiosApi';

// function KakaoMap() {
//   const [chargerInfo, setChargerInfo] = useState("");
//   const mapContainer = useRef(null);

//   const fetchChargerInfo = async () => {
//     const rsp = await AxiosApi.chargerData("서울특별시 강남구");
//     if (rsp.status === 200) setChargerInfo(rsp.data);
//     console.log(rsp.data);
//   };

//   useEffect(() => {
//     fetchChargerInfo();
//   }, []);

//   useEffect(() => {
//     if (mapContainer.current) {
//       const mapOption = {
//         center: new window.kakao.maps.LatLng(37.394940490775, 127.110105738),
//         level: 4,
//       };
//       const map = new window.kakao.maps.Map(mapContainer.current, mapOption);

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

//  export default KakaoMap;



import React, { useEffect, useRef } from 'react';

function KakaoMap({ chargerInfo }) {
  const mapContainer = useRef(null);
  
  useEffect(() => {
    if (mapContainer.current) {
      const mapOption = {
        center: new window.kakao.maps.LatLng(37.394940490775, 127.110105738),
        level: 4,
      };
      const map = new window.kakao.maps.Map(mapContainer.current, mapOption);

      const createMarkers = () => {
        const positions = chargerInfo.map((data) => ({
          title: data.title,
          latlng: new window.kakao.maps.LatLng(data.lat, data.lng),
        }));

        const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

        positions.forEach((position) => {
          const imageSize = new window.kakao.maps.Size(24, 35);
          const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);
          const marker = new window.kakao.maps.Marker({
            map: map,
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
  }, [chargerInfo]);

  return <div id="map" ref={mapContainer} style={{ width: '100%', height: '100%' }} />;
}

export default KakaoMap;
