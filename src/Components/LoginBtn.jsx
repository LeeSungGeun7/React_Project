import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";



const Loginst = styled.div`
    div {
        font-size : 15px;
        color : blue;
        position : absolute;
        top : 40px;
        right : 100px;
    }

`;

const LoginBtn = () => {

    return(
        <Loginst>
            <div>
              <h3>로그인</h3>    
            </div>  
        </Loginst>
    );

}

export default LoginBtn;