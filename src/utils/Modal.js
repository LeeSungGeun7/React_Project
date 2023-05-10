import React from 'react';
import styled from 'styled-components';

 const Modalst = styled.div`
.modal-overlay {
    display: flex;
    flex-direction: column;
    position : fixed;
    justify-content: center;
    top : 50%;
    left : 50%; 
    background-color: orange;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 55%;
    border: 1px solid black;
}
.title{
  position: none;
  top : 50%;
  left: 50%;
  justify-content: center;
}
.modal-content {
    justify-content: center;

}
.modal-content h2 {
    font-size: 40px;
}
.div1 {
    text-align: center;
    font-size: 20px;
}
.div2 {
    font-size: 15px;
}
div {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  border: 1px solid black;
}
/* div .btn1 {
  display: flex;
  justify-content: center;
  margin-top: 40px;
} */
`;

const Modal = ({ isOpen, onClose , contents, title1 }) => {
  if (!isOpen) {
    return null;
  }

  return ( 
    <Modalst>
    <div className="modal-overlay">
      <div className='title'>{title1}</div>
      <div className="modal-content">
        <p>{contents}</p>
      </div>
      <div className='bottom'>
      <button onClick={onClose}>닫기</button>
      </div>
    </div>
    </Modalst>
  );
};

export default Modal;