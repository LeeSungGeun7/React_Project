import React from 'react';
import styled from 'styled-components';

 const Modalst = styled.div`
.modal-overlay {
    display: flex;
    flex-direction: column;
    position : fixed;
    justify-content: space-evenly;
    top : 50%;
    left : 50%; 
    background-color: whitesmoke;
    color : black;
    transform: translate(-50%, -50%);
    width: 40%;
    height: 70%;
    border: 3px solid gray;
    opacity: 90%;
    padding-left: 2%;
    padding-right: 2%;
    
    
}
.title{
  position: none;
  top : 50%;
  left: 50%;
  justify-content: center;
  margin-bottom : 20px;
  font-size: 30px;
  font-style: normal;
}
.modal-content {
    justify-content: center;
    font-size: 20px;
    font-style: italic;

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
}`;

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
      <button onClick={onClose}>Close</button>
      </div>
    </div>
    </Modalst>
  );
};

export default Modal;