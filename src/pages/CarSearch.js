import React ,{useState , useEffect, useRef , useContext}from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import styled from "styled-components";
import KaKao from "../Components/KakaoMap";
import AxiosApi from "../api/AxiosApi";
import { FaSearch,FaStar } from 'react-icons/fa';
import { HiOutlineEmojiHappy } from "react-icons/hi";
import AuthContext from "../context/AuthContext";





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
   
`;



const CarSerach = () => {
  const { email , isLoggedIn } = useContext(AuthContext);

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
      // wishList에 있으므로 삭제
      await deleteWishStation(email, csId);
      setWishList(prev => prev.filter(item => item.csId !== csId));
    } else {
      // wishList에 없으므로 추가
      await addWishStationData(email, csId);
      const newWishStation = { csId };
      setWishList(prev => [...prev, newWishStation]);
    }
}

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

    // const handleChargeMethodChange = (event) => {
    // setChargeMethod(parseInt(event.target.value));
    // };

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

      // useEffect(() => {
      //   const fetchWishList = async () => {
      //     try {
      //       const response = await AxiosApi.getWishStation(email); // 이 API는 현재 로그인한 사용자의 이메일을 인자로 받아야 합니다.
      //       if (response.status === 200) {
      //         setWishList(response.data);

      //       }
      //     } catch (error) {
      //       console.error(error);
      //     }
      //   };
       
      //   fetchWishList();
      // }, );   
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
      }, [name]);
      
      

 

    useEffect(() => {
    const fetchChargerInfo = async () => {
      const rsp = await AxiosApi.chargerData(name);
      if (rsp.status === 200) setChargerInfo(rsp.data);
    };
  
    fetchChargerInfo();
  }, [name]);



   
    let [isVisible , setIsVisible] = useState(true);
    
    

    // const toggleVisibility = () => {
    //     setIsVisible(!isVisible);
    //   };
    
    //   let [isVisible2 , setIsVisible2] = useState(false);
    

    //   const toggleVisibility2 = () => {
    //       setIsVisible2(!isVisible2);
    //     };  


    return (
        <CarSerachst>
        <>
        <Header overlap={false}/>
        </>
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
                        <li onClick={()=> {setAddr(charger.csNm); setChargeTp(charger.cpTp); setCpStat(charger.cpStat); setTime(charger.statUpdateDatetime); setCpNm(charger.cpNm); setLat(parseFloat(charger.lat)); setLng(parseFloat(charger.lng)); setCsId(charger.csId) }} 
                            key={index}>
                              
                            <h4 style={{color:"#0F2121"}}> {charger.csNm} {isLoggedIn && <FaStar onClick={() => toggleSwitch(email, charger.csId)} style={{color: wishList.some(item => item.csId === charger.csId) ? "yellow" : "pink"}}/>}</h4> 
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
        
    );    
                        };

export default CarSerach;