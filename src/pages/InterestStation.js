import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Link, useParams } from "react-router-dom";
import starIcon from "../images/star-8-64.png"
import pointer from "../images/free-icon-location-4475519.png"
import AxiosApi from "../api/AxiosApi";

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
        border-radius: 20px;
        border: 1px solid #202632;
    }

    .top {
        width: 100%;

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
        margin-left: 100px;
        margin-bottom: 50px;
    }

    .bookmark {
        display: flex;
        align-items: center;
        /* justify-content: center; */
        width: 95%;
        height: 95%;
        margin: auto;
        margin-bottom: 20px;
        background-color: #FFFEF3;
        border: 1px solid #202632;
        
    }

    .starIcon {
        display: flex;
        margin: 20px;
        width: 80px;
        height: 80px;
    }

    .star {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        /* border-radius: 50%; */
    }

    .stationInfo {
        display: inline-block;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding-bottom: 20px;
    }

    .detailInfo {
        display: flex;;
    }

    .category {
        margin: 5px;
        width: 150px;
        text-align: left;
        align-items: center;
        justify-content: center;
        float: left;
    }

    .content {
        margin: 5px;
        align-items: center;
        justify-content: center;
        float: right;
    }

    .pointerIcon {
        display: flex;
        float: right;
        align-items: center;
        justify-content: right;
        margin: 20px;
        width: 80px;
        height: 80px;
        }

    .interestStation {
        color: #5EBBFF;
    }
`;

// function Bookmark= (props) => {
//     const{ item } = props;

//     if(items.length === 0) {
//         return <p>즐겨찾기가 비어있습니다. 항목을 추가해보세요!</p>
//     }

//     retrun (

//     );
// };

const InterestStation = () => {

    const [wishStation, setWishStation] = useState([]);
    const address = "서울특별시";

    // const data = [
    //     {
    //         name : "강남 N 타워 전기차충전소",
    //         addr : "서울 강남구 테헤란로 129 (역삼동 648-9)",
    //         lat : 192.775483,
    //         lng : 364.224689,
    //     },
    //     {
    //         name : "서울 논현1동 주민센터 전기차 충전소",
    //         addr : "서울 강남구 학동로20길 25 (논현동 133-13)",
    //         lat : 157.114862,
    //         lng : 370.913315,
    //     },
    //     {
    //         name : "서울 서초구 서초2동 주민센터 전기차충전소",
    //         addr : "서울 서초구 서초대로70길 51 (서초동 1332-6)",
    //         lat : 200.854879,
    //         lng : 399.694781,
    //     }
    // ]


    useEffect(() => {
        const wishStation = async(address) => {
            const rsp = await AxiosApi.chargerData(address);
            if(rsp.status === 200)setWishStation(rsp.data);
            console.log(rsp.data);
        }
        wishStation("서울특별시");
    }, []);

    const charger = (chargeTp, cpTp) => {
        let chargeType1;
        let chargeType2;
        if(chargeTp === 1) {
            chargeType1 = "완속";
        } else {
            chargeType1 = "급속";
        }

        switch(cpTp) {
            case 1 : 
                chargeType2 = "B타입(5핀)";
                break;
            case 2 : 
                chargeType2 = "C타입(8핀)";
                break;
            case 3 : 
                chargeType2 = "BC타입(5핀)";
                break;
            case 4 : 
                chargeType2 = "BC타입(7핀)";
                break;
            case 5 : 
                chargeType2 = "DC차데모";
                break;
            case 6 : 
                chargeType2 = "AC3상";
                break;
            case 7 : 
                chargeType2 = "DC콤보";
                break;
            case 8 :
                chargeType2 = "DC차데모+DC콤보";
                break;
            case 10 :
                chargeType2 = "DC콤보+AC3상+차데모";
                break;
            default :
                break;
        }

        return chargeType1 + "  " + chargeType2;
    }

    const chargerState = (cpStat) => {
        let cpState;

        switch(cpStat) {
            case 1 :
                cpState = "충전 가능";
                break;
            case 2 :
                cpState = "충전중";
                break;
            case 3 :
                cpState = "고장/점검";
                break;
            case 4 :
                cpState = "통신 장애";
                break;
            case 5 :
                cpState = "통신 미연결";
                break;
            default :
                break;
        }
        return cpState;
    }

    return(

        <>
        <Header overlap={false}/>
        <Container>
            <div className="Container">
                <div className="Mypage">
                    <div className="top">
                        <ul className="topMenu">
                            <Link to="/MyPage"><li className="menu1"><a className="mypage" href="/">마이페이지</a></li></Link>
                            <Link to="/ModifyInfo"><li className="menu2"><a className="modifyInfo" href="/ModifyInfo">내 정보 수정</a></li></Link>
                            <Link to="/InterestStation"><li className="menu3"><a className="interestStation" href="/">관심 충전소</a></li></Link>
                            <Link to="/InquriyCost"><li className="menu4"><a className="inquriyCost" href="/">결제 내역</a></li></Link>
                        </ul>
                        <br></br>

                        {wishStation && wishStation.map(e => (
                            <div className="bookmark">
                            <div className="starIcon">
                                <img className="star" src={starIcon} alt="star_icon"></img>
                            </div>
                            <div className="stationInfo">
                                <h2 key={wishStation}>{e.csNm}</h2>
                                <tr className="detailInfo">
                                    <th className="category">주소</th>
                                    <td className="content" key={wishStation}>{e.addr}</td>
                                </tr>
                                <tr className="detailInfo">
                                    <th className="category">충전타입</th>
                                    <td className="content" key={wishStation}>{charger(e.chargeTp, e.cpTp)}</td>
                                </tr>
                                <tr className="detailInfo">
                                    <th className="category">상태</th>
                                    <td className="content" key={wishStation}>{chargerState(e.cpStat)}</td>
                                </tr>
                                

                            </div>
                            <div className="pointerIcon">
                                <a href="/"><img className="pointer" src={pointer} alt="pointer_icon"></img></a>
                            </div>
                        </div>
                        ))}

                    </div>

                </div>

            </div>  

        </Container>
        <Footer />
        </>
    );
};
export default InterestStation;