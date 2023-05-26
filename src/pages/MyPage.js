import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Link, useParams } from "react-router-dom";
import AxiosApi from "../api/AxiosApi";
import cookies from 'react-cookies';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: #FFF;
    padding: 100px;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    min-width: 720px;

    .Container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .Mypage {
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        height: 100%;
        width: 100%;
        max-width: 1200px;
        min-width: 720px;
        background-color: #FFF;
        border-radius: 20px 20px 0 0;
        border: 1px solid #202632;
        
    }

    .top {
        width: 100%;
        height: 60px;   
        background-color: #202632;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;

    }

    .table {

    }
    
    .topMenu {
        display: flex;
        align-items: center;
        justify-content : space-evenly;
        font-size: 22px;
        width: 100%;
        height: 7vh;
        min-height: 50px;
        background-color: #202632;
        margin: 0;
        padding: 0;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;

    }

    .menu1, .menu2, .menu3, .menu4 {
        width: 130px;
        height: 50px;
        display: block;
        list-style: none;
        float: left;
        margin-right: 20px;
        background-color: #202632;
    }

    .mypage, .modifyInfo, .interestStation, .inquriyCost {
        display: flex;
        width: 130px;
        height: 50px;
        text-decoration: none;
        color: white;
        align-items: center;
        
    }

    .text {
        /* margin: 30px; */
        margin-left: 14vh;
    }

    .InfoTable {
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        border-top: 1px solid #444444;
        border-bottom: 1px solid #444444;
        border-collapse: collapse;
        background-color: white;
        /* margin: 30px auto; */
    }

    .myInfo {
        width: auto;
        height: auto;
        
    }

    th {
        /* float: left; */
        height: 60px;
        width: 140px;
        border-right: 1px solid gray;
        border-bottom: 1px solid gray;
        background-color: #72DEFF;
        
    }

    /* .payment {
        float: left;
        height: 60px;
        width: 140px;
        border-right: 1px solid gray;
        background-color: #FFFFFF;
    } */

    .myPayment {
        border-bottom-right-radius: 20px;
    }

    .loginName, .loginId, .loginPhone, .loginEmail {
        border-bottom: 1px solid gray;
        height: 60px;
        padding: 5px;
    }

    .card, .card2, .card3 {
        text-decoration: none;
    }

    .card, .card3 {
        color: black;
    }

    .card2 {
        color: white;
    }

    .cardRegister {
        background-color: #D9D9D9;
        border: none;
    }

    .naverPay {
        background-color: rgb(0, 199, 60);
        border: none;
    }

    .kakaoPay {
        background-color: #F7E600;
        border: none;
    }
    
    .cardRegister, .naverPay, .kakaoPay {
        width: 130px;
        height: 40px;
        border-radius: 10px;
        margin: 0px 20px;
    }

    .mypage{
        color: #5EBBFF;
    }
`;


const Mypage = () => {


    const [myInfo, setMyInfo] = useState("");
    const { id } = useParams();

    const [money, setMoney] = useState("");
    
    const [email,setEmail] = useState("");
    const [name,setName] = useState(""); 
    const [nickName,setNickName] = useState(""); 
    const [tel,setTel] = useState(""); 


    const data = {
        name : name,
        email : email,
        nicName : nickName,
        phone : tel,
        pay : money
    }

    useEffect(() => {
        const getMyInfo = async() => {
            const rsp = await AxiosApi.getSession(cookies.load("sessionId"));

            if (rsp.status === 200) {

              console.log(rsp.data);
                 if(rsp.data){    
                  setName(rsp.data.custNm);
                  setNickName(rsp.data.custNnm);
                  setEmail(rsp.data.custEmail);
                  setTel(rsp.data.custPhone);
                 } 
                }}

        const getInfo = async() => {
            const rsp = await AxiosApi.getMoney(email);
            if(rsp.status === 200)
                setMoney(rsp.data);
            console.log(rsp.data);
        }
        getMyInfo();
        getInfo();
    }, []);

    return(

        <>
        <Header overlap={false}/>
        <Container>
            <div className="Container">
                <div className="Mypage">
                    <div className="top">
                        <ul className="topMenu">
                            <Link to="/Mypage"><li className="menu1"><a className="mypage" href="/">마이페이지</a></li></Link>
                            {/* <Link to="/ModifyInfo"><li className="menu2"><a className="modifyInfo" href="/ModifyInfo">내 정보 수정</a></li></Link> */}
                            <Link to="/InterestStation"><li className="menu3"><a className="interestStation" href="/">관심 충전소</a></li></Link>
                            <Link to="/InquriyCost"><li className="menu4"><a className="inquriyCost" href="/">결제 내역</a></li></Link>
                        </ul>
                        <br></br>

                    </div>
                    <div className="table">
                        <table className="InfoTable"> 
                            <tr className="myInfo">
                                <th className="name">이름</th>
                                <td className="loginName">{data.name}</td>
                            </tr>
                            <tr>
                                <th className="id">닉네임</th>
                                <td className="loginId">{data.nicName}</td>
                            </tr>
                            <tr>
                                <th className="phone">휴대전화번호</th>
                                <td className="loginPhone">{data.phone}</td>
                            </tr>
                            <tr>
                                <th className="email">이메일</th>
                                <td className="loginEmail">{data.email}</td>
                            </tr>
                            <tr>
                                <th className="payment">충전금액</th>
                                <td style={{padding:"10px"}} className="myPayment">
                                   {data.pay}원
                                </td>
                            </tr>

                        </table>

                    </div>

                </div>

            </div>    
        </Container>
        <Footer />
        </>
    );
};
export default Mypage;