// import React, { useEffect, useRef } from 'react';
// import { useState } from 'react';
// import AxiosApi from '../api/AxiosApi';





// function KakaoMap() {
//   const [chargerInfo, setChargerInfo] = useState("");
//   const mapContainer = useRef();

//   useEffect(() => {
//     const chargerInfo = async() => {
//       const rsp = await AxiosApi.chargerData("서울특별시"); 
//       if(rsp.status === 200) setChargerInfo(rsp.data);
//       console.log(rsp.data);
//       var positions = [
//         {
//             title: rsp.data.title, 
//             latlng: new window.kakao.maps.LatLng(rsp.data.latlng, rsp.data.LatLng)
//         }
//     ];
//     for (var i = 0; i < positions.length; i ++) {
    
//       // 마커 이미지의 이미지 크기 입니다
//       var imageSize = new window.kakao.maps.Size(24, 35); 
      
//       // 마커 이미지를 생성합니다    
//       var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize); 
      
//       // 마커를 생성합니다
//       var marker = new window.kakao.maps.Marker({
//           map: map, // 마커를 표시할 지도
//           position: positions[i].latlng, // 마커를 표시할 위치
//           title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
//           image : markerImage // 마커 이미지 
//       });
//   }
// }
//     }, []);
  
//     };
  
  
//     // 지도 옵션 설정
//     const mapOption = {
//       center: new window.kakao.maps.LatLng(33.450701, 126.570667),
//       level: 3,
//     };
//     // 지도를 생성합니다.
//     const map = new window.kakao.maps.Map(mapContainer.current, mapOption);
  
   


//   // 마커 이미지 주소
//   const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
//       // 마커 이미지의 이미지 주소입니다

    
  
  
//   return <div id="map" ref={mapContainer} style={{ width: '100%', height: '100%' }} />;
  
//   }

// export default KakaoMap;

// // App.js

import React, { useEffect, useRef, useState } from 'react';
import AxiosApi from '../api/AxiosApi';

function KakaoMap() {
  const [chargerInfo, setChargerInfo] = useState("");
  const mapContainer = useRef(null);

  const fetchChargerInfo = async () => {
    const rsp = await AxiosApi.chargerData("서울특별시");
    if (rsp.status === 200) setChargerInfo(rsp.data);
    console.log(rsp.data);
  };

  useEffect(() => {
    fetchChargerInfo();
  }, []);

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
