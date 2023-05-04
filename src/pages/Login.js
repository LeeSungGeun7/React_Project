import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../utils/Modal";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

import styled from "styled-components";
import AxiosApi from "../api/AxiosApi";

const Container = styled.div`
  


  .Container {
    background-color: black ;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .loginbar {
    
    color: white;
    background-color: #333333;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-evenly;
    //border: solid 1px black;
    width: 50%;
    height: 50%;
    border-radius: 30%;
    border-width: 30%;

  }
  input {
    width: 50%;
    height: 20%;
    font-size: 15px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    background-color: rgb(233, 233, 233);
  }
  button {
    border-top-left-radius: 20%;
    border-bottom-right-radius: 20%;
    //border-radius: 30%;
    background-color: #30A7FE;
    border : none;
    width: 15%;
    height:10%;
  }
  .title {
    font-size: 50px;
    weight: bold;
  }
`




const Login = () => {
  const navigate = useNavigate(); // 라우터 이동을 하기위해서
  // 키보드 입력
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  // // 오류메시지 
  // const [idMsg , setIdMsg] = useState("");
  // const [pwMsg , setPwMsg] = useState("");

  // // 유효성 검사 
  // const [isId , setIsId] = useState("");
  // const [isPw , setIsPw] = useState("");


  const onChangeId = (e) => {
    const currentId = e.target.value;
    setInputId(currentId);
  }

  const onChangePw = (e) => {
    const currentPassword = e.target.value;
    setInputPw(currentPassword);
  }
  const onClickLogin = async () => {
    // 로그인을 위한 axios 호출 
    const response = await AxiosApi.memberLogin(inputId, inputPw);
    console.log(response.data);
    if (response.data === true) {
      setInputId(inputId);
      setInputPw(inputPw);
    } else {
      alert("로그인 에러 !!!");
    }
  }

  return (
    <Container>
      <Header />
      <div className="Container">

        <div className="loginbar">
          <div className="title">LOGIN</div>
          <input type="text" placeholder="이메일 입력" value={inputId} onChange={onChangeId} />
          <input type="password" placeholder="비밀번호 입력" value={inputPw} onChange={onChangePw} />
          <button onClick={onClickLogin}>Login</button>
          <a href="">Forgot to Password?</a>
        </div>

      </div>
      <Footer />
    </Container>
  );

};

export default Login;