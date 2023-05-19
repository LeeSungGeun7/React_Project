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

const TypedID = () => {

    return(
        <>
        <Container>
            <Header />
            <div>
                <p>비밀번호를 찾고자 하는 아이디를 입력해주세요.</p>
                <input></input>
                <Link to="/FindPassword"><button>다음</button></Link>
                <p>아이디가 기억나지 않는다면?</p>
                <a href="/FindID">아이디 찾기</a>
            </div>
            <Footer />
        </Container>
        </>
    );
};
export default TypedID;