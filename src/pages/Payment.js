import styled from "styled-components";
import React, { useState } from 'react';
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: solid 1px blue;
    align-items: center;
    height: 100vh;
    width: 100%;
    
    h1{
        color: white;
    }

    .total{
        border: solid 1px red;
        align-items: center;
        justify-content: center;
        width: 1024px;
        background-color: #484848;
        margin-top: 100px;
        margin-bottom: 100px;
        border-radius: 5%;
    }

    form{
        text-align: center;
        justify-content: center;
        align-items: center;
        color: white;
    }

    input[type="text"] {
        width:30%;
        padding: 10px;
        font-size: 11px;
        /* text-align: center; */
        border-radius: 5%;
    }

    label {
        position: relative;
        top: 50px;
        left: 200px;
        width: 80px;
        display: flex;
        margin: 20px;
        /* border: solid 1px; */
        justify-content: center;
        background-color: royalblue;
        border-radius: 5%;
    }

    button[type="submit"] {
        padding: 5px 20px;
        font-size: 20px;
        margin-top: 30px;
        margin-bottom: 10px;
        text-align: center;
        background-color: blue;
    }
`;
const PaymentPage  = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [name, setName] = useState('');
    const [charge, setCharge] = useState('');
    const [price, setPrice] = useState('');
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
  
      // 입력된 결제 정보 유효성 검사
      if (cardNumber.trim() === '' || expirationDate.trim() === '' || cvv.trim() === '' || name.trim() === '' || charge.trim() === '' ||  price.trim() === '') {
        alert('결제 정보를 모두 입력해주세요.');
        return;
      }
  
      // 실제 결제 처리 로직을 추가
      //  결제가 완료되었다는 메시지를 출력
      alert('결제가 완료되었습니다!');
    };
  
    return (
        
      <Container>
        <Header/>
        <div className="total">
        <h1 style={{textAlign:"center"}}>결제 정보 입력</h1>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="이름"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
            <label htmlFor="card-number">카드 번호</label>
            <input
              type="text"
              id="card-number"
              name="card-number"
              placeholder="카드 번호"
              value={cardNumber}
              onChange={(event) => setCardNumber(event.target.value)}
              required
            />
          <div>
            <label htmlFor="expiration-date">만료 날짜</label>
            <input
              type="text"
              id="expiration-date"
              name="expiration-date"
              placeholder="MM/YY"
              value={expirationDate}
              onChange={(event) => setExpirationDate(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              placeholder="CVV"
              value={cvv}
              onChange={(event) => setCvv(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="charge">충전량</label>
            <input
              type="text"
              id="charge"
              name="charge"
              placeholder="CHARGE"
              value={charge}
              onChange={(event) => setCharge(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="price">가격</label>
            <input
              type="text"
              id="price"
              name="price"
              placeholder="PRICE"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              required
            />
          </div>
          <button type="submit">결제</button>
        </form>
        </div>
      <Footer/>
      </Container>
    );
  }
  
  export default PaymentPage;
