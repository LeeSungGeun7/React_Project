import React from 'react';
import {useState , useContext} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import styled from "styled-components";
import AxiosApi from "../api/AxiosApi";
import cookies from 'react-cookies';
import cookie from 'react-cookies';
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import jwtDecode from "jwt-decode";



const Container = styled.div`

  .Container {
    background-color: white ;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .loginbar {
    
    color: #30A7FE;
    background-color: #EFF2F3;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25);
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-evenly;
    //border: solid 1px black;
    width: 35%;
    height: 65%;
    border-radius: 5%;
    border-width: 30%;

  }
  input {
    width: 50%;
    height: 10%;
    box-shadow: 1px ;
    font-size: 15px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 20px;
    background-color: white;
  }
  button {
    //#30A7FE;
   
    border-radius: 10%;
    background-color:  #F5F278;
    border : none;
    width: 15%;
    height:10%;
    cursor: pointer;
  }
  .title {
    font-size: 20px;
    weight: bold;
  }
  a {
    text-decoration: none;
    color: #333333;
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
    // const [idMsg , setIdMsg] = useState("");
    // const [pwMsg , setPwMsg] = useState("");
    
    // // 유효성 검사 
    // const [isId , setIsId] = useState("");
    // const [isPw , setIsPw] = useState("");
    

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

  //   const onClickLogin = async() => {
  //       // 로그인을 위한 axios 호출 
  //       const response = await AxiosApi.memberLogin(inputId,inputPw);
  //       console.log(response.config.data);
  //       const uuid = response.data;
  //     //  response.config.data.map(data=> data)
        
  //       if(response.status === 200) {
  //         const rsp = await AxiosApi.getSession(cookie.load("sessionId"));
            
  //           setSessionId(uuid);
  //           navigate("/");
  //       } else {         
  //           alert("로그인 에러 !!!")
  //   }
   
  // }
  const onClickLogin = async() => {
    // 로그인을 위한 axios 호출 
    const response = await AxiosApi.memberLogin(inputId,inputPw);
    console.log(response.config.data);
    const uuid = response.data;
  
    if(response.status === 200) {
      // Here we're now waiting for getSession to return before redirecting.
      const rsp = await AxiosApi.getSession(cookie.load("sessionId"));
        
      // Check if rsp.status is 200, meaning the session data is ready.
      if (rsp.status === 200) {
        setSessionId(uuid);
        navigate("/");
      } else {
        // Handle the case where the session data isn't ready yet.
        // Perhaps show an error message, or redirect to a different page.
      }
    } else {         
      alert("로그인 에러 !!!")
    }
}



  return (
    <>
    <Header />
    <Container>
      
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
                navigate("/signUp", {state : { data : jwtDecode(res.credential)}});
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
    </>
  );
            };

export default Login;