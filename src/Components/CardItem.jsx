import React from "react";
import styled from "styled-components";
import img1 from "../images/card1.png";
import img2 from "../images/card2.png";
import img3 from "../images/card3.png";



const Cardst = styled.div`
    .card1 {
        padding-left: 50px;
        width: 30em;
    }
    .card2 {
        padding-left: 50px;
        width: 30em;
    }
    .card3 {
        padding-left: 50px;
        width: 30em;
    }
    .flexbox {
        overflow: hidden;
        display: flex;
        max-width: fit-content;
        
    }
`; 


const CardItem = (props) => {

    return(
       
            
         <Cardst>
               
         </Cardst>
       

        
        
 
    );
}

export default CardItem;