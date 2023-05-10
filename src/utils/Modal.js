import React from "react";


const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) {
      return null;
    }
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>모달 제목</h2>
          <p>모달 내용입니다.</p>
          <button onClick={onClose}>닫기</button>
        </div>
      </div>
    );
  };
  
  export default Modal;