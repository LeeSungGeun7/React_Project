import React from "react";
import Header  from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import Main from "./Main";

const Container = styled.body`
    position: relative;
    display: grid;
   grid-template-columns: 1fr ;
   grid-template-rows: repeat(2,minmax(140px,auto));

`;
//로그인 버튼 / 로그아웃 버튼 / 회원가입 버튼 / 검색바 / 카카오맵 / 주유소정보 / 카드아이템 /  



const Layout = () => {

    return(
        <Container>
        <Header/>
            
            <Main>
            
            </Main>

        <Footer/>
        </Container>
    );
}

export default Layout;