import React ,{useState}from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import styled from "styled-components";
import KaKao from "../Components/KakaoMap";



const CarSerachst = styled.body`
     color : #333333;
        font-family: 'Do Hyeon', sans-serif;
        font-size: 25px;
    display: grid;
    grid-template-columns: 1fr  ;
    grid-template-rows: repeat(2,minmax(80px,auto));
    
    .Container {
        margin: 50px;
        display: flex;
        flex-direction: column;

        //border: solid 1px black;
        background-color:#BCECE5;
        border: solid 1px black;

        height:150vh;
    }
    
    .map , .line , .result {
        border: solid 1px black;
        width: 100%;
        
    }
    .line {
        display: flex;
        align-items:center;
        flex-direction: row;
        height: 20%;
    }
    .map {
        height: 100%;
        background-size: cover ;
        background-image: url("https://t1.daumcdn.net/cfile/tistory/9968D2465E832E5A34") ;
    }
    .result {
        display: flex;
        flex-direction: row;
        height: 100%;
    }
    .rst , .rst2 {
        display: flex;
        flex-direction: column;
        border: solid 1px black;
        width: 50%;

    }
    input {
        height: 80%;
        width: 30%;
    }
    .charge-method , .service , .local {
        margin:19px;
        width: 20%;
        
    }
    .charge-methods {
        
     display:flex; 
       color: white;
       font-size: 20px;
       width: 100%;
    }
    .charge-methods input {
        max-width : 10%;
    }
    .line button {
        background-color: white ;
        border: none;
        width: 20px;
        height:20px;
        border-radius: 10px;
    }
    .line button:hover {
        background-color: black; 
    }
`;



const CarSerach = () => {
    let [isVisible , setIsVisible] = useState(false);
    

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };
    
      let [isVisible2 , setIsVisible2] = useState(false);
    

      const toggleVisibility2 = () => {
          setIsVisible2(!isVisible2);
        };  


    return (
        <CarSerachst>
        <>
        <Header overlap={false}/>
        </>
        <div className="Container">
            <div className="map">
            <KaKao/>
            </div>
            <div className="line">
                <div className="charge-method">충전방식 <button onClick={toggleVisibility}></button>

                 {isVisible &&  <div className="charge-methods">
                        <input type="radio" name="charge" id="charge" value={2} />급속
                        <input type="radio" name="charge" id="charge" value={2}/>차지
                        <input type="radio" name="charge" id="charge" value={1}/>콤보
                    </div>
                }   
                </div>
                <div className="service">서비스 <button onClick={toggleVisibility2}></button>
                    {isVisible2 &&  <div className="charge-methods">
                            <input type="radio" name="charge" id="charge" value={2} />점원
                            <input type="radio" name="charge" id="charge" value={2}/>풀서비스
                            <input type="radio" name="charge" id="charge" value={1}/>셀프
                        </div>
                    }   
                </div>
                <div className="local">시/군구</div>
                <input type="text" placeholder="입력하세요"/>
            </div>
            <div className="result">
                
                <div className="rst">검색결과 : 
                    
                </div>
                <div className="rst2">상세표시 </div>
            </div>
        </div>
        <Footer/>
        </CarSerachst>
    );    



}

export default CarSerach;