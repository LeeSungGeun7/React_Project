import React  from "react";
import styled ,{css} from "styled-components";

import LoginBtn from "../Components/LoginBtn";

import { BsFillFilePersonFill } from "react-icons/bs";
import { Link , useNavigate} from "react-router-dom"; 

import MyPageBtn from "../Components/MyPageBtn";
import { useEffect } from "react";
// import LoginBtn from "../Components/LoginBtn";
// import Login from "../pages/Login";
import cookies from 'react-cookies'







const Headerst = styled.header`

    position: ${props => props.overlap ? `absolute` : 'static'};

      background-color: none; /* 헤더의 배경색을 투명하게 설정 (투명도 조절 가능) */

   // background-color: rgba(255, 255, 255, 0.5); /* 헤더의 배경색을 투명하게 설정 (투명도 조절 가능) */


    width: 100%;
    top:0;
    left:0;
    font-size: 50px;
   // border: 1px solid black;
    display : grid;
    grid-template-columns: 1 / 2;
    header{
        background-color: rgb(255,255,255,0.4);
        height: 80px;
        display : flex;
        flex-direction: row;
        justify-content: space-evenly;
        z-index: 100000;
    }
    .logo {
        width : 200px;
        
        background-repeat: no-repeat;
        background-size: contain;
        display:flex;
        align-items:center;
        justify-content: center;
        
        color : #41D3BD;
        font-family: 'Do Hyeon', sans-serif;

        font-size: 35px;
        //font-weight : bold;
    }
    .menu{
        display:flex;
       
        width:100%;
        height:100%;
        justify-content:center;
        align-items:center;
    }
    nav a {
        font-family: 'Do Hyeon', sans-serif;
        min-width: 100px;
        color: black;
        margin: 50px;
        z-index:100;
        font-size: 17px;
        text-decoration: none;
    }
    .btns {
        width: 100%;
        height:100%;
        display: flex;
        
        align-items: center;
        justify-content:center;
    }
    .header-customer{
        z-index:100000;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:space-evenly;
        align-items:center;
        margin:15px;
    }
   .logout-btn {
        border:none;
        border-radius:15px;
        color : white;
        <background-color:grey></background-color:grey>;
        font-family:'Do Hyeon', sans-serif;
        &:hover{
            color:#333333;
        }
   }
   .customer-items {
     display:flex;
     align-items:center;
     justify-content:center;   
   }
   .customer-item1 , .customer-item2 , .logout-btn{
    margin:10px;
   }
`   
;




const Header = (props) => {
    const isLoggedIn = "true";
    const navigate = useNavigate();
        
    // useEffect(()=> {
    //     console.log(cookies.load("sessionId"));
    // },[]);

    const handleHome = () => {
        navigate('/');
    }    

    return(
        <Headerst overlap={props.overlap} >
        <header>
        <style>

          
        </style>
        <div className="logo" onClick={handleHome}>
            에코 프렌즈 

            </div>
            <div className="menu-group" >
            <nav className="menu">


                 
                <Link to="/car">전기차충전소</Link> 
                <Link to="/Service">고객센터</Link>
                {/* <Link to="/Mypage">마이페이지</Link> */}
               {!isLoggedIn && <Link to="/">회원가입</Link>}



            </nav>
            </div>
            <div className="header-customer" >
                {isLoggedIn ? (
                <div className="customer-items">
                    <div className="customer-item1" style={{fontSize:"15px" , color:"black"}}> 님 환영합니다</div>
                    <MyPageBtn className="customer-item2" /> 
                    <button className="logout-btn" >로그아웃</button>
                </div>
                ) : (
                    <div className="btns">
                    <Link to="/login"> <LoginBtn name="로그인"/> </Link> 
                    <LoginBtn name="회원가입" addr="/Mypage"/>
                    </div>
                     
                )}
            </div>

          
          


        </header>
        </Headerst>
    );
};

export default Header;