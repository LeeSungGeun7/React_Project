import React from "react";
import styled from "styled-components";


const Mainst = styled.main`
   
     display : grid;
     
    // 메인 그리드로 수정 
    grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(3, 1fr);

    
     .top {
        grid-column: 1 / 3 ; 
        background-color: #22dcdc;
        background-repeat: no-repeat;
        background-size: contain;
        background-image : url('https://www.hyundai.com/contents/mainbanner/sonata-23fl-w.png');
        width: 100%;
        height: 20vh;
        border: solid 1px black;
     }
      .map    {
        grid-column: 1 / 2 ;
        grid-row : 2/3;  
        width: 100%;
        height: 350px;
        border: solid 1px black;
     }
     .map1 {
        grid-column: 2 / 3 ;
        grid-row : 2/3; 
     }
     .bottom {
        grid-column: 1 / 3 ;
        grid-row : 3/4; 
     }
     .card-container {
        grid-column: 1 / 3 ;
     }
    .top , .map , .map1 , .bottom , .card-container {
        width: 100%;
        height: 350px;
        border: solid 1px black;
    }
`;

const Main = () => {

    return(
        <Mainst>
        <div className="top">상단</div>
        <div className="map">지도</div>
        <div className="map1">마킹된 정보표시</div>
        <div className="bottom">하부</div>
        <div className="card-container">카드컨테이너</div>
        </Mainst>
    );
}

export default Main;