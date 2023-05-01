import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import styled from "styled-components";

const CarSerachst = styled.body`
     position: relative;
    display: grid;
   grid-template-columns: 1fr ;
   grid-template-rows: repeat(2,minmax(140px,auto));

`;



const CarSerach = () => {

    return (
        <>
        <Header/>
        <div className="Container">
            자동차 컨테이너 입니다.

        </div>
        <Footer/>
        </>
    );    



}

export default CarSerach;