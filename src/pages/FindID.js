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

    .top_findId, .top_findPw :hover  {
        color: yellow;
    }

    //h2
    .title {
        position: relative;
        right: 270px;
        margin-top: 80px;
    }

    .FindID {
        display: inline-block;
        width: auto;
        height: auto;
        min-width: 700px;
        min-height: 260px;
        margin: 30px;
        padding: 50px 30px;
        border: 1px solid gray;
        border-radius: 3px;
    }

    //p
    .text {
        margin: 0 0 60px 30px;
        
    }

    .label_dt {
        float: left;
        /* display: block; */
        width: 100px;
        height: 25px;
        margin: 0 30px;
    }

    .input_dd {
        /* display: block; */
        width: 488px;
        height: 25px;
        margin: 0;
    }
    
    .label {
        
    }

    .inputBox {
        margin-right: 10px;
        border: 1px solid gray;
        border-radius: 3px;
        height: 20px;

    }

    .sendCode {
        background-color: #FFF;
        border-radius: 5px;
        border: 1px solid gray;
        font-weight: bold;

    }

    .nextBotton {
        width: 80px;
        height: 50px;
        margin: 30px;
        border-radius: 5px;
        border: 1px solid gray;
        background-color: #FFF;
        font-weight: bold;
        margin-bottom: 234px;
        font-size: 20px;
    }

`

const Input = styled.input`

	
`

const FindID = () => {


    return(
        <>
        <Container>
            <Header/>
            <div className="Container">
                <div className="TopMenu">
                    <a href="/FindID" className="top_findId"><li>아이디 찾기</li></a>
                    <a href="/TypedID" className="top_findPw"><li>비밀번호 찾기</li></a>
                </div>

                <h2 className="title">아이디 찾기</h2>
                <div className="FindID">
                    <p className="text">본인확인 이메일 주소와 입력한 이메일 주소가 같아야 인증번호를 받을 수 있습니다.</p>
                    <dt className="label_dt">
                        <label className="label">이름</label>
                    </dt>
                    <dd className="input_dd">
                        <Input type="text" className="inputBox"></Input>
                    </dd>
                    {/* <br></br> */}
                    <dt className="label_dt">
                        <label className="label">이메일 주소</label>
                    </dt>
                    <dd className="input_dd">
                        <Input type="text" className="inputBox"></Input>
                        <button className="sendCode">인증번호 받기</button>
                    </dd>
                    {/* <br></br> */}
                    <dt className="label_dt">
                        <label className="label">인증번호</label>
                    </dt>
                    <dd className="input_dd">
                        <Input type="text" className="inputBox" placeholder="인증번호 6자리 숫자 입력"></Input>
                    </dd>
                </div>
                <Link to="/ShowID"><button className="nextBotton">다음</button></Link>
            </div>
            <Footer/>
        </Container>
        </>
    );
};
export default FindID;