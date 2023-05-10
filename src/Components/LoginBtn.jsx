import React from "react";
import { Route } from "react-router-dom";
import styled , {css}from "styled-components";
import { Link } from "react-router-dom";





const Loginst = styled.div`
display: flex;
align-items:center;
justify-content:center;
button {
min-width: 100% ;

  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 70%;
  font-size: 12px;
  cursor: pointer;
  

}
  button:hover {
    background-color: #0069d9;
  }
`;

const LoginBtn = (props) => {

   

    return(
        
       
        <Loginst type="login">
             
            <button>
             {props.name}  
             </button> 
             
        </Loginst>
       
    );

}

export default LoginBtn;