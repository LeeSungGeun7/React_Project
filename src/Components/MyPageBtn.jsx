import React from "react";
import { MdPerson} from "react-icons/md";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";



const MyPageBtnst = styled.div`
  
    .person {
        font-size: 25px;
        color: white;
        background-color:  grey;
        border: none;
        width: 100%;
        height: 4vh;
        border-radius: 30px;
        &:hover{
            color: silver;
            background-color:white;
        }
      

        
    }
    


`;


const MyPageBtn = (props) => {
    const navigate = useNavigate();

    const navHandle = () => {
        navigate("/myPage");
    }
    return(
       <MyPageBtnst>
       <div onClick={navHandle} className="person">
        
        <MdPerson>
        </MdPerson>
        
        
       </div>
       </MyPageBtnst>  
    );

};

export default MyPageBtn;