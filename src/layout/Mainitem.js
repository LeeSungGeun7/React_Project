import React from "react";
import styled from "styled-components";

const Mainitems = styled.div`
.Centeritem {
    margin-top: 20px;
    border: solid 1px;
    width: 100%;
    height: 100vh;
    font-size: 800%;
    background-color: #f2f3f5;
}
b{
    opacity: 30%;
    position: absolute;
    justify-content: flex-end;
    display: flex;
    align-items: center;
    margin-left: 1000px;
    margin-top: 250px;
}
`;

const Mainitem = () => {
    return(
        <Mainitems>
            <div className="Centeritem" >
                   <b>EV Charger <br/>Eco Friend <br/>Korea</b>
            </div>
        </Mainitems>
    );
};

export default Mainitem;