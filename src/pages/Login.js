import {useState , useContext} from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../utils/Modal";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import styled from "styled-components";
import AxiosApi from "../api/AxiosApi";
import AuthContext from "../context/AuthContext";

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
  const { loginUser } = useContext(AuthContext);

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
        const regexId = /^\w{5,20}$/;
        setInputId(e.target.value);
        if(!regexId.test(e.target.value)){
                setIdMsg("5자리 이상 20자리 미만으로 입력해주세욧");
                setIsId(false);
        } else {
            setIdMsg("올바른 형식 입니다.");
            setIsId(true);
        }
    } 

    const onChangePw = (e) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/
      const passwordCurrent = e.target.value;
      setInputPw(passwordCurrent)
      if (!passwordRegex.test(passwordCurrent)) {
          setPwMsg('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!')
          setIsPw(false)
      } else {
          setPwMsg('안전한 비밀번호에요 : )');
          setIsPw(true);
      }

    }
    const onClickLogin = async() => {
        // 로그인을 위한 axios 호출 
        const response = await AxiosApi.memberLogin(inputId,inputPw);
        console.log(response.data);
        if(response.data === true) {
            loginUser();
            navigate("/");
        } else {
          
            alert("로그인 에러 !!!")
;        }
    }

    return(
        <Container>
        <Header/>
        <div className="Container">

              <div className="loginbar">
                        <div className="title">LOGIN</div>
                       <input type="text" onChange={onChangeId} />
                        <input type="text" onChnage={onChangePw} />
                        <button onClick={onClickLogin}>Login</button>
                        

                        <a href="">Forgot to Password?</a>
                        <a href="">Sign Up</a>

              </div>
        
        </div>
        <Footer/>
        </Container>
    );

};

export default Login;