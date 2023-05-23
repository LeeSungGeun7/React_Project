import React, { useState , useEffect} from "react";
import styled from "styled-components";
import AxiosApi from "../api/AxiosApi";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import cookies from 'react-cookies';

const Questst = styled.div`
    height: 100vh;
    .quest {
        display : flex;
        flex-direction: column;
        height: 80%;
        justify-content: center;
        align-items:center;
    }
    textarea {
        background-color: white;
        padding: 10px;
        height: 100%
        display:flex;
        justify-content: center;
        align-items:center;
        font-family:'Do Hyeon', sans-serif;
        font-size: 30px;
        border: 1px solid;
        border-radius: 15px;
    }
    textarea::placeholder{
        font-size: 1.5em;  
    }
    .title input {
        border:none;
        margin:10px;
        display:flex;
        text-align: center;
        justify-content: center;
        align-items:center;
        height:30px;
       border-bottom: 1px solid;
       
        width: 90%;
    }

  
`;

const Quest = () => {

  

    const [title,setTitle] = useState("");
    const [content, setContent] = useState("");
    const [email,setEmail] = useState("");

    useEffect(() => { 
        const getMyInfo = async() => {
          const rsp = await AxiosApi.getSession(cookies.load("sessionId"));
          if (rsp.status === 200) {
            console.log(rsp.data);
               if(rsp.data){
                setEmail(rsp.data.custEmail);
               }
               
          }
        }
        getMyInfo();
      },[])

    return(
        <>
         <Header></Header>
        <Questst>
       

        <div className="quest">
            <div className="title"> <input onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="제목"/> </div> 
            <textarea className="content" onChange={(e)=> setContent(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
            <button onClick={()=>  {AxiosApi.inQuire("2",email,title,content)}}>  
            문의하기 </button> 
        </div>
       <button onClick={()=>{AxiosApi.getInQuire(email)}}>문의내역조회</button>

        </Questst>
        <Footer/>
        </>
    )


}

export default Quest;