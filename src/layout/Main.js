import React, { useState,useContext,useEffect } from "react";
import styled from "styled-components";
import vd from "../images/video-src-pc (1).mp4";
import vd2 from "../images/KakaoTalk_Video_2023-05-03-16-40-25.mp4";

import CardSlider from "../Components/CardSlider";

import { FaSearch } from 'react-icons/fa';
import CarSerach from "../pages/CarSearch";

import AxiosApi from "../api/AxiosApi";
import cookie from 'react-cookies';
import axios from "axios";
import AuthContext from "../context/AuthContext";



import MainBottom from "../Components/MainBottom";
import Mainitem from "./Mainitem";


const Mainst = styled.main`
  display: grid;

  // 메인 그리드로 수정
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  .top {
    display: flex;

    grid-column: 1 / 3;
    background-color: none;
    background-repeat: no-repeat;
    background-size: contain;

    width: 100%;
    height: 100vh;

    // border: solid 1px black;
  }
  .top video {
    object-fit: cover;
    width: 100%;

    border: solid 1px black;
  }
  .maps {
    margin: 15px;
    justify-content: space-evenly;
    display: flex;
    flex-direction: column;

    grid-column: 1 / 2;
    grid-row: 2/3;
    width: 95%;
    height: 100%;
     border: solid 1px black;
  }
   /* .map1 {

    grid-column: 2 / 3;
    grid-row: 2/3;
  }  */
  .mapInfo {
    margin: 15px;
    grid-column: 2 / 3;
    grid-row: 2/3;
    width: 95%;
    height: 100%;
    border : solid 1px black;
  }

  .card-container {
    padding-top:10px;
    grid-column: 1 / 3;
    grid-row: 3/4;
    width: 100%;
    height:100%;
  }
  
  .map {
    width: 100%;
    height: 50%;
    align-items:center;
  }

  .map1{
    width:100%;
    height:50%;
  }

  .bottom,
   {
    
   // margin: 20px;
    width: 100%;
    height: 100%;
     border: solid 1px black;
  }
  .Homeinput {
    position: absolute;
    top: 25%;
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
  }
  .fa {
    color: #808080;
    position: absolute;
    display: flex;
  justify-content: space-between;
  position: absolute;

  bottom: 5px;  
  left: 380px;
  }
  .mainitem {
    border: solid 1px;
    width: 200%;
    height: 200%;

  }
`;

const Main = () => {
  const { loginUser } = useContext(AuthContext);
  const [vdValue, setVdValue] = useState(vd2);
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
  //       loginUser(rsp.data);
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
          width="100%"
          height="100%"
          controls={false}
        />
        <div className="Homeinput">
          <input type="text" className="input" import /><FaSearch className="fa"/>
          
        </div>
      </div>

      <div className="mainitem">
      <Mainitem/>
      </div>
      <div className="bottom">
        <MainBottom/>
      </div>
      <div className="card-container">
        카드컨테이너
        <CardSlider />
      </div>
    </Mainst>
  );
  };

export default Main;
