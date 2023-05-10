import React from "react";
import styled from "styled-components";

const Footerst = styled.footer`
    display : flex;
    align-items: center;
    justify-content : center;
    font-size: 50px;
    border: solid 1px black;
    background-color: #282c37;
    color : white;

    footer a {
        color: white;
    }
`;



const Footer = () => {
    const test = "";
    return(
        <Footerst>
        <footer>
            푸터 
        </footer>
        </Footerst>
    );
}

export default Footer;