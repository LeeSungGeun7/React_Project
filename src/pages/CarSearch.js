import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import styled from "styled-components";
import KaKao from "../Components/KakaoMap";


const CarSerachst = styled.body`

    display: grid;
    grid-template-columns: 1fr  ;
    grid-template-rows: repeat(2,minmax(80px,auto));
    
    .Container {
        margin: 50px;
        display: flex;
        flex-direction: column;

        //border: solid 1px black;
        background-color:#BCECE5;
        border: solid 1px black;

        height:150vh;
    }
    
    .map , .line , .result {
        border: solid 1px black;
        width: 100%;
        
    }
    .line {
        display: flex;
        align-items:center;
        flex-direction: row;
        height: 20%;
    }
    .map {
        height: 100%;
        background-size: cover ;
        background-image: url("https://t1.daumcdn.net/cfile/tistory/9968D2465E832E5A34") ;
    }
    .result {
        display: flex;
        flex-direction: row;
        height: 100%;
    }
    .rst , .rst2 {
        display: flex;
        flex-direction: column;
        border: solid 1px black;
        width: 50%;

    }
    input {
        height: 80%;
        width: 30%;
    }
    .charge-method , .service , .local {
        margin:19px;
        width: 20%;
        
    }
`;



const CarSerach = () => {

    return (
        <CarSerachst>
        <>
        <Header overlap={false}/>
        </>
        <div className="Container">
            <div className="map">
            <KaKao/>
            </div>
            <div className="line">
                <div className="charge-method">충전방식</div>
                <div className="service">서비스</div>
                <div className="local">시/군구</div>
                <input type="text" placeholder="입력하세요"/>
            </div>
            <div className="result">
                
                <div className="rst">검색결과 : 
                    
                </div>
                <div className="rst2">상세표시 </div>
            </div>
        </div>
        <Footer/>
        </CarSerachst>
    );    



}

export default CarSerach;