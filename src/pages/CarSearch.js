import React ,{useState , useEffect}from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import styled from "styled-components";
import KaKao from "../Components/KakaoMap";
import AxiosApi from "../api/AxiosApi";
import { FaSearch } from 'react-icons/fa';
import { HiOutlineEmojiHappy } from "react-icons/hi";





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
        background-color:#ABDFF1;

       // border: solid 1px black;

        height:150vh;
    }
    
    .map , .line , .result {
      //  border: solid 1px black;
        width: 100%;
        
        
    }
    .line {
        display: flex;
        align-items:center;
        flex-direction: row;
        height: 20%;
        background-color : #F4ED6E;
    }
    .map {
        height: 100%;
        background-size: cover ;
        background-image: url("https://t1.daumcdn.net/cfile/tistory/9968D2465E832E5A34") ;
    }
    .result {
        display: flex;
        flex-direction: row;
        height: 50%;
    }
    .rst , .rst2 {
        display: flex;
        flex-direction: column;
      //  border: solid 1px black;
        width: 50%;
        overflow: scroll;
    }
    .rst2 {
        justify-content: center;
        align-items:center;
    }
    
    input {
            width: 400px;
            height: 30px;
            margin: 20px;
            padding-left: 15px;
            font-size: 15px;
            color: #222222;
            border: none;
            border-radius: 20px;
            height: 80%;
            width: 30%;
            outline: none;
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
       max-width: 20px;
    }
    .charge-methods input{
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
    

    .rst ul li {
      //  border: solid 1px black;
        margin-bottom: 10px;
        list-style:none;
        width: 93%;
        color: #333333;
        background-color: white;
        border-radius: 5px;
        border: 1px solid lightblue;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
    }
    
    .search {
        position: absolute;
        right: 80px;
    }
    
   
`;



const CarSerach = () => {
    const statusColors = {
        1: "#52F911", // 충전 가능
        2: "FFF94E", // 충전 중
        3: "red", // 고장/점검
        4: "red", // 통신장애
        5: "red" // 통신미연결
    };

    const [chargerInfo, setChargerInfo] = useState([]);
    const [name,setName] = useState("서울시");

    const [chargeMethod, setChargeMethod] = useState(null);
    const [service, setService] = useState(null);

    const handleChargeMethodChange = (event) => {
    setChargeMethod(parseInt(event.target.value));
    };

    const handleServiceChange = (event) => {
    setService(event.target.value);
    };

    const filteredChargerInfo = chargerInfo.filter(charger => {
        const matchesChargeMethod = chargeMethod ? charger.cpTp === chargeMethod : true;
        const matchesService = service ? charger.cpStat === service : true;
        
        return matchesChargeMethod 
      });

    const chargeMethods = {1: "B타입(5핀)",2: "C타입(5핀)", 3:"BC타입(5핀)", 4:"BC타입(7핀)", 5:"DC차데모" , 6:"AC3상", 7:"DC콤보", 8:"DC차데모+DC콤보", 9:"그게뭔데" , 10:"DC차데모+AC3상+DC콤보"};
    const cpStats = {1:"충전가능" , 2:"충전중" , 3:"고장/점검" , 4:"통신장애" , 5:"통신미연결"}

    const [addr,setAddr] = useState("");
    const [chargeTp,setChargeTp] = useState("");
    const [cpStat,setCpStat] = useState("");
    const [times,setTime] = useState(Date());
    const [cpNm , setCpNm] = useState("");




    
    const [input, setInput] = useState("");
    
    const handleSearchClick = () => {
        setName(input);
      };
    
    const handleInputChange = (e) => {
        setInput(e.target.value);
      };
      


 

    useEffect(() => {
    const fetchChargerInfo = async () => {
      const rsp = await AxiosApi.chargerData(name);
      if (rsp.status === 200) setChargerInfo(rsp.data);
    };

    fetchChargerInfo();
  }, [name]);

   

   
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
            <KaKao chargerInfo={chargerInfo}/>
            </div>
            <div className="line">
                <div className="charge-method">충전방식 <button onClick={toggleVisibility}></button>

                 {isVisible &&  <div className="charge-methods">
                  <input type="radio" name="charge" id="charge" value={1} onChange={handleChargeMethodChange} />
                  <label style={{ fontSize: '12px' }}>B타입(5핀)</label>
                    <input type="radio" name="charge" id="charge" value={2} onChange={handleChargeMethodChange} />C타입(5핀)
                    <input type="radio" name="charge" id="charge" value={3} onChange={handleChargeMethodChange} />BC타입(5핀)
                    <input type="radio" name="charge" id="charge" value={4} onChange={handleChargeMethodChange} />BC타입(7핀)
                    <input type="radio" name="charge" id="charge" value={5} onChange={handleChargeMethodChange} />DC차데모
                    <input type="radio" name="charge" id="charge" value={6} onChange={handleChargeMethodChange} />AC3상
                    <input type="radio" name="charge" id="charge" value={7} onChange={handleChargeMethodChange} />DC콤보
                    <input type="radio" name="charge" id="charge" value={8} onChange={handleChargeMethodChange} />DC차데모+DC콤보
                    <input type="radio" name="charge" id="charge" value={10} onChange={handleChargeMethodChange} />DC차데모+DC콤보+AC3상


                    </div>
                }   
                </div>
                <div className="service">서비스 <button onClick={toggleVisibility2}></button>
                    {isVisible2 &&  <div className="charge-methods">
                    <input type="radio" name="service" id="service" value={10} onChange={handleServiceChange} />점원
                    <input type="radio" name="service" id="service" value={2} onChange={handleServiceChange} />풀서비스
                    <input type="radio" name="service" id="service" value={1} onChange={handleServiceChange} />셀프
                </div>
                    }   
                </div>
                <div className="local">시/군구</div>
                <input onChange={e=> handleInputChange(e)} type="text" placeholder="입력하세요"/>
                    <FaSearch className="search" onClick={handleSearchClick}/>
            </div>
            <div className="result">
                
                <div className="rst"> 
                    
                    <ul>
                        {filteredChargerInfo.map((charger, index) => (
                        <li onClick={()=> {setAddr(charger.csNm); setChargeTp(charger.cpTp); setCpStat(charger.cpStat); setTime(charger.statUpdateDatetime); setCpNm(charger.cpNm)}} 
                            key={index}>
                            <h4 style={{color:"#0F2121"}}> {charger.csNm} </h4> 
                            <p style={{fontSize:"20px" , color:"#0F2121"}}> {charger.addr}</p>
                            <HiOutlineEmojiHappy className="HP" style={{color:statusColors[charger.cpStat], fontSize:"50px"}}/>
                        </li>
                        ))}
                    </ul>


                   
                    
                </div>
                <div className="rst2" >

                          <h3 style={{color: "#0C4A60"}}> {addr}</h3>    
                          <p><b >충전기 명칭 :</b> {cpNm} </p>
                          <p> <b>충전기 상태 :</b>  {cpStats[cpStat]} </p>   
                          <p> <b>충전방식 :</b> {chargeMethods[chargeTp]}</p>
                          <p><b>갱신시간 :</b> {times} </p>   
                
                 </div>
            </div>
        </div>
        <Footer/>
        </CarSerachst>
    );    



}

export default CarSerach;