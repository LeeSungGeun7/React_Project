import React from 'react';
import styled from 'styled-components';



 const Modalst = styled.div`
.modal-overlay {
    position : fixed;
    justify-content: center;
    top : 50%;
    left : 50%; 
    background-color: orange;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 55%;
}
.modal-content {
    justify-content: center;
}
.modal-content h2 {
    font-size: 40px;
}
.div1 {
    font-size: 15px;
}
.div2 {
    font-size: 15px;
}
`;

const Modal = ({ isOpen, onClose , content }) => {
  if (!isOpen) {
    return null;
  }

  return ( 
  
    <Modalst>
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{}</h2>
        <div className='div1'>
        <p>{content}</p>
        </div>
        {/* <div className='div2'>
            <li>개인정보의 안전성 확보조치</li>
            <p>공사 개인정보보호 총괄부서에서는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
                1. 관리적 조치 : 내부관리계획 수립·시행, 정기적 직원 교육
                2. 기술적 조치 : 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치
                3. 물리적 조치 : 전산실, 자료보관실 등의 접근통제</p>
        </div> */}
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
    </Modalst>
  );
};

export default Modal;