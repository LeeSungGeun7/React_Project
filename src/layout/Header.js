import React from "react";
import styled ,{css} from "styled-components";

import { Link } from "react-router-dom"; 
// import LoginBtn from "../Components/LoginBtn";
// import Login from "../pages/Login";






const Headerst = styled.header`

    position: ${props => props.overlap ? `absolute` : 'static'};

    background-color: none; /* 헤더의 배경색을 투명하게 설정 (투명도 조절 가능) */

    background-color: rgba(255, 255, 255, 0.5); /* 헤더의 배경색을 투명하게 설정 (투명도 조절 가능) */


    width: 100%;
    top:0;
    left:0;
    font-size: 50px;
   // border: 1px solid black;
    display : grid;
    grid-columns: 1 / 2;
    header{
        height: 80px;
        display : flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    .logo {
        width : 200px;
       // background-image : url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3VHDuYYdNPDsW9nqOJQQAfQCI7dfHtFojHA&usqp=CAU');
        background-repeat: no-repeat;
        background-size: contain;
        display:flex;
        align-items:center;

        color : white;
        font-family: 'Yeon Sung', cursive;
        font-size: 35px;
        weight : bold;
    }
    .menu{
        display:flex;
        width:100%;
        height:100%;
        justify-content:center;
        align-items:center;
    }
    nav a {
        color: white;
        margin: 50px;
        z-index:100;
        font-size: 15px;
        text-decoration: none;

        color : black;
        font-family: 'Yeon Sung', cursive;
        font-size: 35px;
        weight : bold;

    }
`   
;




const Header = (props) => {

    return(
        <Headerst overlap={props.overlap} >
        <header>
        <style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@700&family=Yeon+Sung&display=swap');
          
        </style>
        <div className="logo">
            ECO FRIENDS

            </div>
            <div className="menu-group" >
            <nav className="menu">
              <Link to="/">Home</Link> 
               <Link to="car">전기차충전소</Link> 
                <Link to="/MyPage">마이페이지</Link>
                <Link to="/">회원가입</Link>
                <Link to="/login">로그인</Link>
            </nav>
            </div>
            <div>
                클릭버튼
            </div>

          
          


        </header>
        </Headerst>
    );
};

export default Header;