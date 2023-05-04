import React from "react";
import styled from "styled-components";






const Footerst = styled.footer`
    display : flex;
    align-items: center;
    justify-content : center;
    font-size: 10px;
    border: solid 1px black;
    background-color: black;
    color : white;

    @import url('https://fonts.googleapis.com/css2?family=Foldit:wght@300&display=swap');

   
    .div1 a {
    color : white;
    margin-right: 20px;
    text-align: center;
   }

   .div2 h2 {
    font-family: 'Foldit', cursive;
    font-size: 50px;
    left: 10px;
    position: relative;
    left: 10px;
    text-align: center;
   }

   nav ul  {
    display : flex;
    padding: 15px;
    text-align: center;
   }

   h3 {
    font-size: 5px;
    margin-top: 5px;
    position: relative;
    text-align: center;
   }
`;



const Footer = () => {
    const test = "";
    return(
        <Footerst>
        <footer>
            <div className="div1">
                <nav>
                <ul>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<li><a href="">개인정보처리방침 </a></li> 
                    <li><a href="">저작권정책</a></li>&nbsp;&nbsp;
                    <li><a href="">이메일주소무단수집거부</a></li>
                    <li><a href="">고객센터</a></li>
                </ul>
                </nav>
            </div>
            <div className="div2">
                <h2>ECO FRIEND</h2>
            </div>
            <div className="addr">
            <h3>서울특별시 강남구 테헤란로14길 6 2,3층  &nbsp;&nbsp;&nbsp;  Eco Friend 대표전화 1588-0000</h3>
            </div>
        </footer>
        </Footerst>
    );
}

export default Footer;