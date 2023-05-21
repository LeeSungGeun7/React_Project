import React , {useContext, useState} from "react";
import styled  from "styled-components";

import LoginBtn from "../Components/LoginBtn";

import { BsFillFilePersonFill } from "react-icons/bs";
import { Link , useNavigate} from "react-router-dom"; 

import MyPageBtn from "../Components/MyPageBtn";
import { useEffect } from "react";
// import LoginBtn from "../Components/LoginBtn";
// import Login from "../pages/Login";
import cookie from 'react-cookie';
import cookies from 'react-cookies';
import AxiosApi from "../api/AxiosApi";
import { useAuth } from "../context/AuthContextProvider";










const Headerst = styled.div`

    /* display:flex;
    align-items:center;
    justify-content:center;
    position: ${props => props.overlap ? `absolute` : 'static'};

      background-color: none; 헤더의 배경색을 투명하게 설정 (투명도 조절 가능) */

   // background-color: rgba(255, 255, 255, 0.5); /* 헤더의 배경색을 투명하게 설정 (투명도 조절 가능) */


    /* width: 100%; */

    /* top:0;
    left:0; */
    /* font-size: 50px;
    display:flex;
    justify-content: space-evenly; */
   
    /* header{
        background-color: rgb(255,255,255,1);
      //  height: 10vh;
        width: 100%;
        /* display : flex;
        flex-direction: row;
        justify-content: space-evenly; */
        z-index: 10;
    
    .logo {
     //   width : 200px;
        /* display:flex;
        align-items:center;
        justify-content: center; */
        
        color : black;
        font-family: 'Do Hyeon', sans-serif;

        font-size: 35px;
        //font-weight : bold;
    }
    .logo-item{
        /* display:flex;
        justify-content:space-evenly;
        align-items:space-evenly; */
    }
    /* .logo-items{
        display:flex;
       
        width:100%;
        height:100%;
        justify-content:center;
        align-items:center;
    } */
    nav a {
        width:22%;
        font-family: 'Do Hyeon', sans-serif;
        min-width: 230px;
        color: black;
        
      //  margin: 50px;
        z-index:100;
        font-size: 17px;
        text-decoration: none;
    }
    
   .logout-btn {
        border:none;
        border-radius:15px;
        color : white;
      //  <background-color:grey></background-color:grey>;
        font-family:'Do Hyeon', sans-serif;
        &:hover{
            color:#333333;
        }
   }
   /* .customer-items , .logo-items, .menu{
     display:flex;
     align-items:center;
     justify-content:space-evenly;
        
   } */
   /* .Container, nav {
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: center;
    height:100%;

   } */
   .Container {
    display:flex;
    justify-content: space-around;
    align-items:center;
   }
`   
;



const Header = (props) => {
    // const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    const [cookie,setCookie] = useState("");
    const navigate = useNavigate();
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    // useEffect(()=> {
    //     console.log(cookies.load("sessionId"));
    //     const sessions = cookies.load("sessionId");
    //     if(cookies.load("sessionId")){
    //         setIsLoggedIn(true);
    //         setCookie(cookies.load("sessionId"));
    //         setUserName(sessions.data);

    //     } else {
    //         setIsLoggedIn(false);
    //     }
    // },[]);

    useEffect(() => { 
    const getMyInfo = async() => {
      const rsp = await AxiosApi.getSession(cookies.load("sessionId"));
      if (rsp.status === 200) {
        console.log(rsp.data);
           if(rsp.data){
            setIsLoggedIn(true);
            setCookie(String(cookies.load("sessionId")));
            setUserName(rsp.data.custNm);
           }
           
      }
    }
    getMyInfo();
  },[])


   

    const handleHome = () => {
        navigate('/');
    }    

    return(
        <Headerst overlap={props.overlap} >
        <> 
        {/* <div className="Container" >
       

         <nav className="logo-items">
                <div className="logo" onClick={handleHome}>
                에코 프렌즈 🤔
                </div> 
                   <div className="logo-item"> 
                    <Link to="/car">전기차충전소</Link> 
                    <Link to="/Service">고객센터</Link>
                   
                    {!isLoggedIn && <Link to="/">회원가입</Link>}
                    </div>

                <div className="header-customer" >
                    {isLoggedIn ? (
                    <div className="customer-items">
                        <div className="customer-item1" style={{fontSize:"15px" , color:"black"}}>{userName} 님 환영합니다</div>
                        <MyPageBtn className="customer-item2" /> 
                        <button onClick={async () => {
                            console.log('Logout button clicked');
                            try {
                                const response = await AxiosApi.logout(cookie);
                                console.log('Logout request sent');
                                if(response.status === 200) {
                                cookies.remove("sessionId");
                                setIsLoggedIn(false);
                                }
                            } catch (error) {
                                console.error('An error occurred while logging out:', error);
                            }}}  className="logout-btn" >로그아웃</button>
                    </div>
                    ) : (
                        <div className="customer-items">
                        <LoginBtn name="로그인" Link="/login"/>
                        <LoginBtn name="회원가입" addr="/Mypage"/>
                        </div>
                        
                    )}
                </div>
            </nav>


          



        </div>
             */}
          
          <nav className="Container">

             <div>
                에코프렌즈
             </div>
             <div>
                로그인
             </div>
          </nav>


        </>
        </Headerst>
    );
};

export default Header;