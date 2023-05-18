import React from "react";
import {Link, Route } from "react-router-dom";
import styled from "styled-components";





const Loginst = styled.div`
    #btn1 {
        font-size : 0.5rem;
        color : white;
        position : absolute;
        top : 30px;
        right : 100px;
        background-color: black;
        border-radius: 100%;
        border-width : 10px;
        padding : 15px 15px;
        border : none;
        box-shadow : 0 15px 35px rgba(0, 0, 0, 0.2);
        font-weight : 600;
        transition : 0.25s;
    }
    #btn1:hover{
        background : gray;
    }
    #btn2:hover{
        background : gray;
        
    }
    #btn2 {
        font-size : 0.5rem;
        color : white;
        position : absolute;
        top : 30px;
        right : 5px;
        background-color: black;
        border-radius: 100%;
        border-width : 10px;
        padding : 15px 15px;
        border : none;
        box-shadow : 0 15px 35px rgba(0, 0, 0, 0.2);
        font-weight : 600;
        transition : 0.25s;
    }

`;

const LoginBtn = (props) => {

    return(
        <Loginst>
            <div id="btn_group">
                <Link to= {props.Link}> 
                <button id = {props.type}>
                {props.name} </button>
                </Link> 
            </div>  
        </Loginst>
    
    );


}

export default LoginBtn;