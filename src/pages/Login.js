
import {useState , useContext} from "react";

import { useNavigate } from "react-router-dom";
import Modal from "../utils/Modal";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import styled from "styled-components";
import AxiosApi from "../api/AxiosApi";

import cookies from 'react-cookies';
import cookie from 'react-cookies';


import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { async } from "q";


const Container = styled.div`

  .Container {
    background-color: #EAF6F7 ;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .loginbar {
    
    color: white;
    background-color: #31393C;
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
    
    font-size: 25px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 20px;
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
    cursor: pointer;
  }
  .title {
    font-size: 50px;
    weight: bold;
  }
  a {
    text-decoration: none;
    color: white;
  }
  
`

const Login = () => {

  //  const { loginUser } = useContext(AuthContext);
   const clientId = "157067894615-cai8h2gq8gatlmoqpkfe08os9rhq92vp.apps.googleusercontent.com";
    const navigate = useNavigate(); // 라우터 이동을 하기위해서
    // 키보드 입력
    const [inputId , setInputId] = useState("");
    const [inputPw , setInputPw] = useState("");
    
    // 오류메시지 
    const [idMsg , setIdMsg] = useState("");
    const [pwMsg , setPwMsg] = useState("");
    
    // 유효성 검사 
    const [isId , setIsId] = useState("");
    const [isPw , setIsPw] = useState("");
    

    const onChangeId = (e) => {
       setInputId(String(e.target.value));
    } 

    const onChangePw = (e) => {
      setInputPw(String(e.target.value))
    }

    const setSessionId = (uuid) => {
      const expires = new Date()
      expires.setMinutes(expires.getMinutes() + 60);
      cookies.save("sessionId", uuid, {
        path : "/",
        expires,
      });
    }

    const onClickLogin = async() => {
        // 로그인을 위한 axios 호출 
        const response = await AxiosApi.memberLogin(inputId,inputPw);
        console.log(response.config.data);
        const uuid = response.data;
      //  response.config.data.map(data=> data)
        
        if(response.status === 200) {
          const rsp = await AxiosApi.getSession(cookie.load("sessionId"));
           
            setSessionId(uuid);
            navigate("/");
        } else {         
            alert("로그인 에러 !!!")
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
          <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
              onSuccess={async(res) => {
                const result = await AxiosApi.googlelogin(res.credential);
                console.log(jwtDecode(res.credential));
                console.log(result);
                // navigate("/signUp", {state : { data : jwtDecode(res.credential)}});
              }}
              onFailure={(err) => {
                console.log(err);
              }}
/>
          </GoogleOAuthProvider>

        </div>
      </div>
      <Footer />
    </Container>
  );
            };

export default Login;