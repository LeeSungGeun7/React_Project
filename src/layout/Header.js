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


        font-family: 'Do Hyeon', sans-serif;



     /* display:flex;
    align-items:center;
    justify-content:center;
    position: ${props => props.overlap ? `absolute` : 'static'};

      background-color: none; 헤더의 배경색을 투명하게 설정 (투명도 조절 가능)  */

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
        font-size: 40px;
        
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
    /* nav a {
        width:22%;
        font-family: 'Do Hyeon', sans-serif;
        min-width: 230px;
        color: black;
         */
      //  margin: 50px;
        /* z-index:100;
        font-size: 17px;
        text-decoration: none;
    } */
    
   .logout-btn {
        width:45%;
        border:none;
        border-radius:15px;
        color : white;
        background-color: black;
      //  <background-color:grey></background-color:grey>;
        font-family:'Do Hyeon', sans-serif;
        &:hover{
            border:1px solid;
            color:black;
            background-color: white;
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
    justify-content: center;
    align-items:center;
    flex-direction: row;

    height: 80px;
    width: 100vw;
    // border: 1px solid black;
   }
   .logo , .btns , .menu{
    //width: 33%;
    flex:1;
  //  border:1px solid;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
   }

   .menu-item , .menu-item2 , {
    width: 25%;
   }
   .btns-signup , .btns-login {
        margin:10px;
        display:flex;
        justify-content: center;
        text-align:center;
        height: 100%;
        border-radius: 10px;
        width: 19%;
        border: 1px solid;
        background-color: #333333;
            color: white;
        &:hover {
            background-color: white;
            color: black;
        }
   }
   .logo{
    color:#333333;
   }


   .btns {

        display:flex;
        justify-content: center;
   }
   .btns2 {

        width: 50%;
        display:flex;
        justify-content: space-between;
        align-items:center;
   }
   

   .mypage {
    display: none;
   }
   .customer-item2:hover {
        .mypage{
            display:block;
        }
   }

   @media (max-width: 600px) {
        * {
            font-size: 0.5em;
        }
        .logo {
            font-size: 20px;
        }
        button {
            width: 60%;
        }
}   
        @media (max-width: 1000px) {
                * {
                    font-size: 0.9em;
                }
                .logo {
                    font-size: 30px;
                }
                .btns-signup , .btns-logout , .btns-login , {
                    width: 50px;
                }
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

          <div className="menu">
                    <div className="menu-item" onClick={()=> {navigate("/car")}}>
                        전기차충전소
                    </div>
                    <div onClick={()=> {navigate("/service")}} className="menu-item2">
                        고객센터
                    </div>
                     
            </div>
             <div className="logo" onClick={()=> {navigate("/")}}>
                Eco Friend
             </div>

            
             <div className="btns">
                {!isLoggedIn && 
                  <><div onClick={()=> {navigate("/signUp")}} className="btns-signup">회원가입</div>
                    <div className="btns-login" onClick={()=> {navigate("/login")}}>
                        로그인
                    </div> 
                </>}
                {isLoggedIn && 
             <div className="btns2">
                <MyPageBtn className="customer-item2" />
                <div className="mypage">마이페이지 호버</div> 
                    <div>
                        {userName} 님 
                    </div>
                    <button onClick={async () => {
                                console.log('Logout button clicked');
                                try {
                                    const response = await AxiosApi.logout(cookie);
                                    console.log('Logout request sent');
                                    if(response.status === 200) {
                                    cookies.remove("sessionId");
                                    setIsLoggedIn(false);
                                    setUserName(response.data.custNm);
                                    }
                                } catch (error) {
                                    alert("로그아웃중에 문제가 발생하였습니다.");
                                }}}  className="logout-btn" >로그아웃</button>
               </div>}
              
             </div>

          </nav>


        </>
        </Headerst>
    );
};

export default Header;