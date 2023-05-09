import React from "react";
import styled from "styled-components";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import flagIcon from "../images/free-icon-flag-1244563.png"
import pointer from "../images/free-icon-location-4475519.png"

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
        background-color: #FFFDEB;
        border: 1px solid #202632;
        
    }

    .flagIcon {
        display: flex;
        margin: 20px;
        width: 80px;
        height: 80px;
    }

    .flag {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #5EBBFF;
        margin: auto;
        border-radius: 50%;
    }

    .stationInfo {
        display: inline-block;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .pointerIcon {
        display: flex;
        float: right;
        align-items: center;
        justify-content: right  ;
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
    // const { user } = useUserState();

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
                            <Link to="/InquriyCost"><li className="menu4"><a className="inquriyCost" href="/">주유비 조회</a></li></Link>
                        </ul>
                        <br></br>

                        <h1 className="text">즐겨찾기</h1>
                        <div className="bookmark">
                            <div className="flagIcon">
                                <img className="flag" src={flagIcon} alt="flag_icon"></img>
                            </div>
                            <div className="stationInfo">
                                <h2>강남 N 타워 전기차충전소</h2>
                                <p>서삼동 울 강남구 테헤란로 129 (역648-9)</p>
                            </div>
                            <div className="pointerIcon">
                                <img className="pointer" src={pointer} alt="pointer_icon"></img>
                            </div>
                        </div>
                        <div className="bookmark">
                            <div className="flagIcon">
                                <img className="flag" src={flagIcon} alt="flag_icon"></img>
                            </div>
                            <div className="stationInfo">
                                <h2>서울 논현1동 주민센터 전기차 충전소</h2>
                                <p>서울 강남구 학동로20길 25 (논현동 133-13)</p>
                            </div>
                            <div className="pointerIcon">
                                <img className="pointer" src={pointer} alt="pointer_icon"></img>
                            </div>
                        </div>
                        <div className="bookmark">
                            <div className="flagIcon">
                                <img className="flag" src={flagIcon} alt="flag_icon"></img>
                            </div>
                            <div className="stationInfo">
                                <h2>서울 서초구 서초2동 주민센터 전기차충전소</h2>
                                <p>서울 서초구 서초대로70길 51 (서초동 1332-6)</p>
                            </div>
                            <div className="pointerIcon">
                                <img className="pointer" src={pointer} alt="pointer_icon"></img>
                            </div>
                        </div>

                    </div>
                    

                </div>

            </div>  

        </Container>
        <Footer />
        </>
    );
};
export default InterestStation;