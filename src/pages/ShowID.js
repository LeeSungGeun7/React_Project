import React from "react";
import styled from "styled-components";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import AxiosApi from "../api/AxiosApi";
import { Link } from "react-router-dom";

const Container = styled.div`
	* {
		box-sizing: border-box;
	}

`

const ShowID = () => {

    
    return(
        <>
        <Container>
            <Header />
            <p>고객님의 정보와 일치하는 아이디입니다.</p>
            <div className="showID">
                <p>IDIDIDID</p>
            </div>
            <Link to="/Login"><button>로그인 하기</button></Link>
            <Link to="/TypedID"><button>비밀번호 찾기</button></Link>
            <Footer />
        </Container>
        </>
    );
};
export default ShowID;