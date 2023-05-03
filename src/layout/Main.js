import React, { useState } from "react";
import styled from "styled-components";
import vd from "../images/video-src-pc (1).mp4";
import vd2 from "../images/KakaoTalk_Video_2023-05-03-16-40-25.mp4";
import KakaoMap from "../Components/KakaoMap";
import CardSlider from "../Components/CardSlider";

const Mainst = styled.main`
  display: grid;

  // 메인 그리드로 수정
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);

  .top {
    display: flex;

    grid-column: 1 / 3;
    background-color: none;
    background-repeat: no-repeat;
    background-size: contain;
    // background-image : url('https://www.hyundai.com/contents/mainbanner/sonata-23fl-w.png');
    width: 100%;
    height: 20vh;

    // border: solid 1px black;
  }
  .top video {
    object-fit: cover;
    width: 100%;

    border: solid 1px black;
  }
  .map {
    grid-column: 1 / 2;
    grid-row: 2/3;
    width: 100%;
    height: 350px;
    // border: solid 1px black;
  }
  .map1 {
    grid-column: 2 / 3;
    grid-row: 2/3;
  }
  .bottom {
    grid-column: 1 / 3;
    grid-row: 3/4;
  }
  .card-container {
    grid-column: 1 / 3;
  }
  .top,
  .map,
  .map1,
  .bottom,
  .card-container {
    margin: 2px;
    width: 100%;
    height: 350px;
    // border: solid 1px black;
  }
  .Homeinput {
    position: absolute;
    top: 15%;
    left: 45%;
    width: 25%;
    font-size: 15px;
    color: #222222;
    border: none;
  }
  .Homeinput button {
    width: 15%;
    color: white;

    border-top-right-radius: 25%;
    border-bottom-right-radius: 25%;
    background-color: #333333;
    border: none;
  }
`;

const Main = () => {
  const [vdValue, setVdValue] = useState(vd);

  const vdClick = () => {
    setVdValue(vd2);
    if (vdValue === vd2) {
      setVdValue(vd);
    }
  };

  return (
    <Mainst>
      <div className="top">
        <video
          onClick={vdClick}
          src={vdValue}
          autoPlay
          muted
          loop
          width="100%"
          height="100%"
          controls={false}
        />
        <div className="Homeinput">
          <input type="text" className="input" />
          <button>검색</button>
        </div>
      </div>
      <div className="map">
        <KakaoMap />
      </div>
      <div className="map1">마킹된 정보표시</div>
      <div className="bottom">하부</div>
      <div className="card-container">
        카드컨테이너
        <CardSlider />
      </div>
    </Mainst>
  );
};

export default Main;
