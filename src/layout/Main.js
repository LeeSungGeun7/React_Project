import React, { useState,useContext,useEffect, useRef,useAuth } from "react";
import styled from "styled-components";
import vd from "../images/video-src-pc (1).mp4";
import vd2 from "../images/KakaoTalk_Video_2023-05-03-16-40-25.mp4";
import vd3 from "../images/original-087fcdef6dd7e801b337d6dbdc8c0ba9.mp4";  
import CardSlider from "../Components/CardSlider";
import News from "../Components/News";
import {  useNavigate} from "react-router-dom"; 

import { FaSearch } from 'react-icons/fa';
import CarSearch from "../pages/CarSearch";

import AxiosApi from "../api/AxiosApi";
import cookie from 'react-cookies';
import axios from "axios";




import MainBottom from "../Components/MainBottom";
import Mainitem from "./Mainitem";


const Mainst = styled.main`
  width: 100%;
  // 메인 그리드로 수정
 // grid-template-columns: repeat(2, 1fr);
 // grid-template-rows: repeat(2, 1fr);

  .top {
    padding: 50px;
    display: flex;
    justify-content:center;
    align-items:center;
   // grid-column: 1 / 3;
    background-color: none;
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 15px;
    width: 92.5%;
    height: 100vh;

    // border: solid 1px black;
  }
  .top video {
    object-fit: cover;
    width: 100%;
    border-radius: 15px;
    //border: solid 1px black;
  }
  

  .card-container {
    padding-top:10px;
    /* grid-column: 1 / 3;
    grid-row: 3/4; */
    width: 90%;
    height:100%;
  }
  
  
  .bottom,
   {
    
   // margin: 20px;
    width: 92.5%;
    height: 100%;
     border: solid 1px black;
  }
  .Homeinput {
    position: absolute;
    top: 15%;
    left: 37%;
    width: 25%;

    width: 400px;
    height: 30px;
    margin: 10px auto;
    font-size: 15px;
    color: #222222;
    border: none;
  }
  .Homeinput button {
    width: 15%;
    color: white;

    border-top-right-radius: 25%;
    border-bottom-right-radius: 25%;
    background-color: #333333;
    border: none;
  }

  .Homeinput input {
    font-weight: bold;
    outline: none;
    padding-left: 20px;
    position: relative;
    border: 1px solid #F1F1F1;
    border-radius: 50px;
    width: 100%;
    height: 100%;
    right:10%;
  }
  .content {
    position: absolute;
    color: white;
    font-size: 50px;
    font-family:'Do Hyeon', sans-serif;
    top : 90%;
    left: 0;
  }
  .fa {
    color: #808080;
    position: absolute;
    display: flex;
  justify-content: space-between;
  position: absolute;

  bottom: 5px;  
  left: 90%;
  }
  .mainitem {
    border-radius: 15px;
    border: solid 1px;
    width: 92.5%;
    height: 100vh;
  }
  .item-group {
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;

  }
`;

const Main = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = () => {
    navigate(`/Car/${searchValue}`);
  };

  const inputEl = useRef(null);
  const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
      }
  


  const [vdValue, setVdValue] = useState(vd3);
  const vdClick = () => {
    setVdValue(vd2);
    if (vdValue === vd2) {
      setVdValue(vd);
    }
  };

  // useEffect(() => { 
  //   const getMyInfo = async() => {
  //     const rsp = await AxiosApi.getSession(cookie.load("sessionId"));
  //     if (rsp.status === 200) {
  //       console.log(rsp.data);
  //     }
  //   }
  //   getMyInfo();
  // })
    

  return (
    <Mainst>
      <div className="top">
        <video
          // onClick={vdClick}
          src={vdValue}
          autoPlay
          muted
          loop
          width="80%"
          height="100%"
          controls={false}
        />
        {/* <div className="content">Find your<b style={{color:"#333333"}}>#Charge</b> </div> */}
        <div className="Homeinput">
          <input type="text" className="input" ref={inputEl} value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} onKeyDown={handleKeyDown}/><FaSearch onClick={handleSubmit} className="fa"/>
          <div className="content">Find your<b style={{color:"#F5F278"}}>#Charge</b> </div>
        </div>
      </div>
    <div className="item-group">
        <div className="mainitem">
            <News/>
        </div>
        {/* <div className="bottom">
          <MainBottom/>
        </div> */}
        <div className="card-container">
        <CardSlider />
        </div>
        
      </div>
    </Mainst>
  );
  };

export default Main;
