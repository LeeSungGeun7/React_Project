import React, {useState} from "react";
import styled from "styled-components";
import Modal from "../utils/Modal";

const Footerst = styled.footer`
    display : flex;
    align-items: center;
    justify-content : center;
    font-size: 10px;
    border: solid 1px black;
    background-color: black;
    color : white;

    @import url('https://fonts.googleapis.com/css2?family=Foldit:wght@300&display=swap');


    footer{
        flex-direction: column;
        align-items: center;
        display: flex;
        justify-content: center;
    }
   
    .div1 a {
    color : white;
    margin-right: 20px;
    text-align: center;
    justify-content: center;
   }

   .div2 h2 {
    font-family: 'Foldit', cursive;
    font-size: 50px;
    left: 10px;
    position: relative;
    left: 10px;
    text-align: center;
    justify-content: center;
   }

   nav ul  {
    display : flex;
    padding: 15px;
    text-align: center;
    margin-left: 32px;
    justify-content: center;
   }

   h3 {
    font-size: 5px;
    margin-top: 5px;
    position: relative;
    text-align: center;
   }
`;

const Footer = () => {


    const customStyles = {
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          maxWidth: '500px',
          margin: 'auto',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '5px',
        },
      };


        const [isModalOpen, setIsModalOpen] = useState(false);
      
        const handleOpenModal = () => {
          setIsModalOpen(true);
        };
      
        const handleCloseModal = () => {
          setIsModalOpen(false);
        };
    return(
        <Footerst>
            <footer>
                <div className="div1">
                    <nav>
                    <ul>
                        <a onClick={handleOpenModal}>개인정보처리방침</a>
                        <Modal 
                        isOpen={isModalOpen} onClose={handleCloseModal} content="대표 홈페이지는 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여, 
                        적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다. 이에 「개인정보 보호법」 
                        제30조에 따라 정보주체에게 개인정보 처리에 관한 절차 및 기준을 안내하고,
                        이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다."
                        customStyles={customStyles}/>
                        <a onClick={handleOpenModal}>저작권정책</a><Modal isOpen={isModalOpen} onClose={handleCloseModal} content="dfdfdfd"/>
                        <a onClick={handleOpenModal}>이메일무단수집거부</a><Modal isOpen={isModalOpen} onClose={handleCloseModal} content="cfccdfdfd"/>
                        <a onClick={handleOpenModal}>고객센터</a><Modal isOpen={isModalOpen} onClose={handleCloseModal} content="hhhhhhdfd"/>
                    </ul>
                    </nav>
                </div>
                <div className="div2">
                    <h2>ECO FRIEND</h2>
                </div>
                <div className="addr">
                <h3>서울특별시 강남구 테헤란로14길 6 3층  &nbsp;&nbsp;&nbsp;  Eco Friend 대표전화 1588-0000</h3>
                </div>
            </footer>
            
        </Footerst>
    );
}

export default Footer;