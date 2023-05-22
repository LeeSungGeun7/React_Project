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
    
    .Container {
        background-color: mintcream;
        display: flex;
        /* flex-wrap: wrap; */
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 100%;
        min-width: 780px;
    }

    .TopMenu {
        display: flex;
        width: 100%;
        height: 60px;
        background-color: #D9D9D9;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        list-style: none;
    }

    .top_findId, .top_findPw {
        text-decoration: none;
        color: #FFF;
        font-size: 20px;
        margin: 0 30px;



    }

    .top_findId:hover  {
        color: yellow;
    }

    .top_findPw:hover {
        color: yellow;
    }
`

const TypedID = () => {

    return(
        <>
        <Container>
            <Header />
            <div className="Container">
                <div className="TopMenu">
                    <a href="/FindID" className="top_findId"><li>아이디 찾기</li></a>
                    <a href="/TypedID" className="top_findPw"><li>비밀번호 찾기</li></a>
                </div>
                <div>
                    <p>비밀번호를 찾고자 하는 아이디를 입력해주세요.</p>
                    <input></input>
                    <Link to="/FindPassword"><button>다음</button></Link>
                    <p>아이디가 기억나지 않는다면?</p>
                    <a href="/FindID">아이디 찾기</a>
                </div>
            </div>
            <Footer />
        </Container>
        </>
    );
};
export default TypedID;