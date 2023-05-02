import React from "react";
import styled ,{css} from "styled-components";


const Headerst = styled.header`

    position: ${props => props.overlap ? `absolute` : 'static'};
    background-color: rgba(255, 255, 255, 0.5); /* 헤더의 배경색을 투명하게 설정 (투명도 조절 가능) */

    width: 100%;
    top:0;
    left:0;
    font-size: 50px;
    border: 1px solid black;
    display : grid;
    grid-columns: 1 / 2;
    header{
        height: 80px;
        display : flex;
        flex-direction: flex-start;
    }
    .logo {
        width : 200px;
       // background-image : url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3VHDuYYdNPDsW9nqOJQQAfQCI7dfHtFojHA&usqp=CAU');
        background-repeat: no-repeat;
        background-size: contain;
        display:flex;
        align-items:center;
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
            <div >
           
            </div>
            
        </header>
        </Headerst>
    );
}

export default Header;