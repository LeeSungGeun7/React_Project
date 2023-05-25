import React ,{useState , useEffect, useRef }from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import styled from "styled-components";
import KaKao from "../Components/KakaoMap";
import AxiosApi from "../api/AxiosApi";
import { FaSearch,FaStar } from 'react-icons/fa';
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { useAuth } from "../context/AuthContextProvider";
import { useParams } from "react-router-dom";






const CarSerachst = styled.div`
    height:150vh;
    color : #333333;
    font-family: 'Do Hyeon', sans-serif;
    font-size: 25px;
    /* display: flex;
    flex-direction:column;
    grid-template-columns: 1fr  ; */
   // grid-template-rows: repeat(1,minmax(80px,auto));
    
    .Container {
        margin: 50px;
        display: flex;
        flex-direction: column;

        //border: solid 1px black;
        background-color: #ABDFF1;

       // border: solid 1px black;

        height:100%;
    }
    
    .map , .line , .result {
      //  border: solid 1px black;
        width: 100%;
        
        
    }
    .line {
        flex:1;
        display: flex;
        align-items:center;
        flex-direction: row;
        height: 20%;
        background-color :  #F5F278;
    }
    .map {
        flex:4;
        background-size: cover ;
        background-image: url("https://t1.daumcdn.net/cfile/tistory/9968D2465E832E5A34") ;
    }
    .result {
        flex:8;
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
        justify-content: space-evenly;
        align-items:center;
        overflow: scroll;
       // background-color: #FFFFF0 ;
      //border-left : 1px solid white;
    }
    
    .SearchInput {
            position: relative;
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
        text-align:center;
    }

    .charge-method {
        position: relative;
    }

    .charge-methods input  {
        
        display : flex ; 
        justify-content: center;
        min-width: 10px;

        align-items:center;
    }

   
    

    .line button {
        background-color: white ;
        border: none;
        min-width: 250px;
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
    .local{
        position: relative;
    }
    .search {
        position: relative;
        right: 60px;
    }
   
    .charge-methodss {

        z-index:999;
        display:flex;
        width: 100%;
        flex-direction:column;
        padding-right:7px;
        border: none;
        border-radius: 10px;
        background-color : white;
        padding-left:0;
        max-height: 55vh;
        overflow: scroll;
        
    }
    .charge-methodss li {
        
        text-align: center;
       
        margin:3px;
        height: 50px;
        list-style:none;
        padding-left:0px;
        z-index: 100;
        background-color: white;
        color: black;
        /* margin : 3px; */
        border-radius: 10px;
        min-width: 100%;
    }

    .charge-methodss li:hover {
       border: 1px solid ;
       background-color: #333333;
       color: white; 
    }
   .dropdown {
        position: absolute;
        top:20px;
        
   }
   .dropdown button {
     font-weight: bold;
   }
   .dropdown button:hover {
    color: white;
    background-color: #333333;
   }
   .charge-methodss button {
    min-width: 10px;
    height: 15px;
    position: absolute;
    left:235px;
    z-index: 1200;
    top:60px;
   }
   input[type='radio'] {
    appearance: none; // 맨 위에 있어야 아래의 속성이 먹힘!
    background-color: black;
    width: 10px;
    height: 10px;
    position:relative;
    top:6px;
    border-radius: 50%;
    opacity: 30%;
    margin: 10px;
    border: none;

  &:checked {
    opacity: 1;
  }
}
.rst2-item{
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  font-size: 20px;
  width:80%;
  height: 40%;
  background-color:  #EFF2F3;
  color: #333333;
  margin:10px;

  border-radius: 15px;
}
      @media (max-width: 1000px) {
                * {
                    font-size: 0.9em;
                }
                .SearchInput {
                  width: 100%;
                }
                .service , .charge-method , .local{
                  display:none;
                  flex-direction:row;

                }
                .line {
                    flex:1;
                    display: flex;
                    align-items:center;
                    flex-direction: row;
                    justify-content: space-evenly;
                    height: 10%;
                }
                .map {
                    flex:5;
                    background-size: cover ;
                    background-image: url("https://t1.daumcdn.net/cfile/tistory/9968D2465E832E5A34") ;
                }
                .result {
                    flex:2;
                    display: flex;
                    flex-direction: row;
                    height: 50%;
                }
        }   
      
`
;



const CarSerach = () => {
  const { searchValue } = useParams();

  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const statusColors = {
    1: "#52F911", // 충전 가능
    2: "#FFF94E", // 충전 중
    3: "red", // 고장/점검
    4: "red", // 통신장애
    5: "red" // 통신미연결
};

  const email = "sungkeno3o@gmail.com";

  const [chargers, setChargers] = useState([]);

  const addWishStationData = async (email,csId) => {
     try {
        const response = await AxiosApi.setWishStation(email,csId);
        console.log(response); // 로그를 통해 응답 내용 확인
    } catch (error) {
        console.error(error);
    }
    }
  

  const deleteWishStation = async (email,csId) => {
    try {
       const response = await AxiosApi.deleteWishStation(csId,email);
       console.log(response); // 로그를 통해 응답 내용 확인
   } catch (error) {
       console.error(error);
   }
  }

  const toggleSwitch = async (email, csId) => {
    const isWishStation = wishList.some(item => item.csId === csId);
    
    if (isWishStation) {
      // wishList에서 먼저 제거하고, 그 다음에 서버에 변경 사항을 보냅니다.
      setWishList(prev => prev.filter(item => item.csId !== csId));
      await deleteWishStation(email, csId);
    } else {
      // wishList에 먼저 추가하고, 그 다음에 서버에 변경 사항을 보냅니다.
      const newWishStation = { csId };
      setWishList(prev => [...prev, newWishStation]);
      await addWishStationData(email, csId);
    }
  }

//-----------------------------------------------
  function getChargersByStationId(stationId) {
    const filteredChargerInfo = allCharger.filter(charger => {
      const matchesChargeMethod = chargeMethod ? charger.cpTp === chargeMethod : true;
      const matchesService = service ? charger.chargeTp === service : true;
      return matchesChargeMethod && matchesService;
    });
    return filteredChargerInfo.filter(charger => charger.csId === stationId);
  }

  // 중복 제거 함수 추가
  const filterDuplicateStations = (stations) => {
    const uniqueStations = stations.reduce((acc, current) => {
      const isDuplicate = acc.find(station => station.csId === current.csId);
      if (!isDuplicate) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    return uniqueStations;
  }
//------------------------------------------------


  const inputEl = useRef(null);
  const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          handleSearchClick();
        }
      }


  const [DropisVisible, setDropIsVisible] = useState(false);
  const [selectedCharge, setSelectedCharge] = useState('');

  const DroptoggleVisibility = () => {
    setDropIsVisible(!DropisVisible);
  }

  const handleChargeMethodChange = (charge , name) => {
    setSelectedCharge(name);
    setChargeMethod(parseInt(charge));
    setDropIsVisible(false);
  }


    

    const [chargerInfo, setChargerInfo] = useState([]);
    const [name,setName] = useState(searchValue);

    const [chargeMethod, setChargeMethod] = useState(null);
    const [service, setService] = useState(null);

   

    const handleServiceChange = (event) => {
    setService(parseInt(event.target.value));
    };

    const filteredChargerInfo = chargerInfo.filter(charger => {
        const matchesChargeMethod = chargeMethod ? charger.cpTp === chargeMethod : true;
        const matchesService = service ? charger.chargeTp === service : true;
        return matchesChargeMethod && matchesService;
      });

    const chargeMethods = {1: "B타입(5핀)",2: "C타입(5핀)", 3:"BC타입(5핀)", 4:"BC타입(7핀)", 5:"DC차데모" , 6:"AC3상", 7:"DC콤보", 8:"DC차데모+DC콤보", null:"(상관없음)" , 10:"DC차데모+AC3상+DC콤보"};
    const cpStats = {1:"충전가능" , 2:"충전중" , 3:"고장/점검" , 4:"통신장애" , 5:"통신미연결"}

    const [addr,setAddr] = useState("");
    const [chargeTp,setChargeTp] = useState("");
    const [cpStat,setCpStat] = useState("");
    const [times,setTime] = useState(Date());
    const [cpNm , setCpNm] = useState("");
    const [lat,setLat] = useState(37.224);
    const [lng , setLng] = useState(127.11);
    const [csId , setCsId] = useState("");




    
    const [input, setInput] = useState("");
    
    const handleSearchClick = () => {
        setName(input);
      };
    
    const handleInputChange = (e) => {
        setInput(e.target.value);
      };
      
   
      const [wishList, setWishList] = useState([]);

     
      useEffect(() => {
        (async () => {
          try {
            const response = await AxiosApi.getWishStation(email);
            if (response.status === 200) {
              setWishList(response.data);
            }
          } catch (error) {
            console.error(error);
          }
        })();

        console.log(wishList);
      }, []);
      
      
    const [allCharger,setAllCharger] = useState([]);
 

    useEffect(() => {
    const fetchChargerInfo = async () => {
      const rsp = await AxiosApi.chargerData(name);
      if (rsp.status === 200){ 
        setChargerInfo(filterDuplicateStations(rsp.data)); 
        setAllCharger(rsp.data);
      }
    };
    
  
    fetchChargerInfo();
  }, [name]);



  
    



    return (
      <>
    <Header overlap={false}/>
        <CarSerachst>   
        <div className="Container">
            <div className="map">
            <KaKao chargerInfo={chargerInfo} Lat={lat} Lng={lng}/>
            </div>
            <div className="line">
                    <div className="charge-method">충전방식 

                     {/* <div className="charge-methods">      */}
                                <div className="dropdown">
                            
                                    <button onClick={DroptoggleVisibility}>충전방식: {selectedCharge || '선택하세요'}</button>
                                        {DropisVisible && 
                                    <ul className="charge-methodss">
                                        <button onClick={DroptoggleVisibility}>X</button>
                                    {Object.entries(chargeMethods).map(([id, name]) => 
                                        <li key={id} onClick={() => handleChargeMethodChange(id, name)}>
                                        {name}
                                        </li>
                                    )}
                                    </ul>
                        }
                            </div>
          
                    {/* </div> */}
                
                </div>
                <div className="service"> 
                    {/* {isVisible2 &&  <div className="charge-methods"> */}
                    <input type="radio" name="service" id="service" value={1} onChange={handleServiceChange} />완속
                    <input type="radio" name="service" id="service" value={2} onChange={handleServiceChange} />급속
                    <input type="radio" name="service" id="service" value={{}} onChange={handleServiceChange} />All

                {/* </div>
                }  */}
                </div>
                <div className="local">시/군구 :</div>
                <input className="SearchInput" onChange={e=> handleInputChange(e)} type="text" placeholder="입력하세요" ref={inputEl} onKeyDown={handleKeyDown}/>
                    <FaSearch className="search" onClick={handleSearchClick}/>
            </div>
            <div className="result">
                
                <div className="rst"> 
                    
                    <ul>
                        <p style={{textAlign:"left"}}> {filteredChargerInfo.length}개의 검색결과</p>
                        {filteredChargerInfo.map((charger, index) => (
                        <li onClick={()=> {
                          setAddr(charger.csNm); 
                          setChargeTp(charger.cpTp); 
                          setCpStat(charger.cpStat); 
                          setTime(charger.statUpdateDatetime); 
                          setCpNm(charger.cpNm); 
                          setLat(parseFloat(charger.lat));
                           setLng(parseFloat(charger.lng)); 
                           setCsId(charger.csId);
                           const chargers = getChargersByStationId(charger.csId);
                           setChargers(chargers);
                          }} 
                            key={index}>
                              
                            <h4 style={{color:"#0F2121"}}> {charger.csNm} {isLoggedIn && <FaStar onClick={(e)=> {e.stopPropagation();toggleSwitch(email, charger.csId)}} style={{color: wishList.some(item => item.csId === charger.csId) ? "yellow" : "pink"}}/>}</h4> 
                            <p style={{fontSize:"20px" , color:"#0F2121"}}> {charger.addr}</p>
                  
                            <HiOutlineEmojiHappy className="HP" style={{color:statusColors[charger.cpStat], fontSize:"50px"}}/>
                        </li>
                        ))}
                    </ul>


                   
                    
                </div>
                <div className="rst2" >


                                        { 
                            chargers.map((charger,idx) => (

                              <div className="rst2-item" key={idx}>
                                <div>{charger.cpNm} </div>
                                <div style={{color:statusColors[charger.cpStat]}}>{cpStats[charger.cpStat]}</div>
                                <div>{chargeMethods[charger.chargeTp]}</div>
                                <div style={{fontSize:"15px"}}>{charger.statUpdateDatetime}</div>
                              </div>
                            ))
                          }
                          {/* <h3 style={{color: "#0C4A60"}}> {addr}</h3>    
                          <p><b >충전기 명칭 :</b> {cpNm} </p>
                          <p> <b>충전기 상태 :</b>  {cpStats[cpStat]} </p>   
                          <p> <b>충전방식 :</b> {chargeMethods[chargeTp]}</p>
                          <p><b>갱신시간 :</b> {times} </p>  */}
                          {/* <button onClick={async()=> {
                            try {
                              const response = await AxiosApi.setWishStation(email,csId);
                              console.log(response); // 로그를 통해 응답 내용 확인
                          } catch (error) {
                              console.error(error);
                          }



                          }}>관심충전소 등록</button>
                          <button onClick={()=>{console.log(wishList)}}>관심충전소 호출</button>
                 */}
                 </div>
            </div>
        </div>
        
        <Footer/>
        </CarSerachst>
        </>
    );    
                        };

export default CarSerach;