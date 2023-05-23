
import React, { useState , useEffect} from "react";
import styled from "styled-components";
import AxiosApi from "../api/AxiosApi";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import cookies from 'react-cookies';

const InquireCheckst = styled.div`
    height: 100vh;
    .container {
        height:100%;
        width: 100%;
        display:flex;
        justify-content:flex-start;
        flex-direction:row;
        align-items:center;
    }
    .list {
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        align-items:center;
        flex:1;
    }
    .card {
        flex:1;
    }
    .inquire {
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        align-items:center;
        flex:1;
    }
  
`;

const InquireCheck = () => {
   

  
    const [data,setData] = useState([]); 
    const [memberData,setMemberData] = useState([]);
    
    async function getInQuire(email) {
        const response = await AxiosApi.getInQuire(email);
        setData(response);
        console.log(response);
      }

    useEffect(() => { 
        const getMyInfo = async() => {
          const rsp = await AxiosApi.getSession(cookies.load("sessionId"));
          if (rsp.status === 200) {
            console.log(rsp.data);
               if(rsp.data){
                setMemberData(rsp.data);
               }
               
          }
        } 
       
        getMyInfo();
        
      },[])

      useEffect(() => {
        if(memberData.custEmail) getInQuire(memberData.custEmail);
    }, [memberData.custEmail]);

    return(
        <>
        <Header/>
        <InquireCheckst>
         



           
        <div className="container">
            <div className="inquire"> 
                <h4>나의 문의내역</h4> 
    
            </div>

            <div className="list">
                {!data && <h2>내역이 없습니다.</h2>}
                {data && 
                data.map((data,key) => 
                <div key={key} className="content-items"> 
                         <div className="content-title">{data.inqTitle}</div> 
                         <div  className="content-content">{data.inqContent}</div> 
                         <p className="content-writer">[{data.inqNo}] {data.email} </p>
                 </div>
                )
                }
            </div>

            <div className="card">
                카드컨테이너
            </div>
            </div>     
        
        <Footer/>
        </InquireCheckst>
        </>
    )


}

export default InquireCheck;