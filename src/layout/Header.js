import React from "react";
import styled ,{css} from "styled-components";
import LoginBtn from "../Components/LoginBtn";


const Headerst = styled.header`
    position: absolute;
    background-color: rgba(255, 255, 255, 0.5); /* 헤더의 배경색을 투명하게 설정 (투명도 조절 가능) */

    width: 100%;
    top:0;
    left:0;
    font-size: 50px;
    border: 1px solid black;
    display : grid;
    grid-columns: 1 / 2;
    .logo {
        background-color : green;
        color : white;
    }
    header{
        height: 80px;
        display : flex;
        flex-direction: flex-start;
    }
    .logo:after {
        color:red;
    }
`   
;




const Header = () => {

    return(
        <Headerst>
        <header>
            <div className="logo">
                LOGO
            </div>
            <div >
            ECO FRIENDS
            </div>
            {/* <LoginBtn/> */}
            
        </header>
        </Headerst>
    );
};

export default Header;