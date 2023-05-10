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
        

        const [isModalOpen, setIsModalOpen] = useState(false);
        const [modalContents, setModalContents] = useState("");
      
        const handleOpenModal = (index) => {
          setIsModalOpen(true);
          if (index === 0) {
            setModalContents("개인정보처리방침 내용");
          } else if (index === 1) {
            setModalContents("이메일무단수집거부 내용");
          } else if (index === 2) {
            setModalContents("저작권정책 내용");
          }
        };
      
        const handleCloseModal = () => {
          setIsModalOpen(false);
          setModalContents("");
        };
        return(
        <Footerst>
        <footer>
          <div className="div1">
            <nav>
              <ul>
                <li>
                  <a onClick={() => handleOpenModal(0)}>개인정보처리방침</a>
                </li>
                <li>
                  <a onClick={() => handleOpenModal(1)}>이메일무단수집거부</a>
                </li>
                <li>
                  <a onClick={() => handleOpenModal(2)}>저작권정책</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="div2">
            <h2>ECO FRIEND</h2>
          </div>
          <div className="addr">
            <h3>
              서울특별시 강남구 테헤란로14길 6 3층 &nbsp;&nbsp;&nbsp; Eco Friend
              대표전화 1588-0000
            </h3>
          </div>
        </footer>

          <Modal isOpen={isModalOpen} onClose={handleCloseModal} 
          contents={modalContents} title1={modalContents}/>
      </Footerst>
        );
      };
    
  export default Footer;