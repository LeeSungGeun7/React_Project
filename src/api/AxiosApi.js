import axios from "axios";

const KH_DOMAIN = "http://localhost:8111";
const EF_DOMAIN = "http://localhost:3737";



const AxiosApi = {

    // 로그인 
    memberLogin : async(id,pw) => {
        const requset = {
            email : id, 
            pwd : pw
        };
        return await axios.post(EF_DOMAIN + "/member/login" , requset);  
    },
    // 공공데이터 가져오기
    chargerData : async(address) => {
        const requset = {
            pageNum : 1,
            numOfRows : 100,
            addr : address
        };
        return await axios.post(EF_DOMAIN + "/api/list", requset);

    }, 
    // 세션조회
    getSession : async(value) => {
        return await axios.get(EF_DOMAIN + `/member/session?uuid=${value}`);
    },
    // 로그아웃
    logout : async(value) => {
        return await axios.delete(EF_DOMAIN + `/member/logout?uuid=${value}`);
    },

    //이메일 로그인
    googlelogin : async(response) => {
        const requset = {
            res : response
        }
        return await axios.post(EF_DOMAIN + "/api/googleLogin", requset);
    },
    // 회원조회
    getCustomerInfo : async(id) => {
        return await axios.get(EF_DOMAIN + `/member/check?email=${id}`);
    },
    // 이메일 인증키 발급
    getKeyCode : async(id) => {
        return await axios.get(EF_DOMAIN + `/api/key?email=${id}`);
    },
    // 이메일 인증
    confirmKey : async(id, key) => {
        return await axios.get(EF_DOMAIN + `/api/email/confirm?email=${id}&key=${key}`);
    },
    signUp : async(data) => {
        return await axios.post(EF_DOMAIN + "/member/signup", data);
    },

    // 금액충전
    insertCard : async( name, email, credit, cardNum, endDate, cvc, price) => {
        const payment = {
            payname: name,
            email: email,
            credit: credit,
            cardNum: cardNum,
            endDate: endDate,
            cvc: cvc,
            price: price
        };
        return await axios.post(EF_DOMAIN + "/payment", payment);
    },
    

}



    // 관심 충전소 등록 대강 만듬 
    setWishStation : async(email,csId) => {
        const request = {
            email : email ,
            csId : csId +""
        };
        console.log(csId);
        return await axios.post(EF_DOMAIN + "/charger/wish/add", request);

    } , 

    // 관심 충전소 데이터 호출
    getWishStation : async (email) => {
        const response = await axios.get(EF_DOMAIN+ "/charger/wish/find", { 
            params: { email: email }
        });
        return response;
    },
    // 관심 충전소 제거
    deleteWishStation : async( csId,email) => {
        const request = {
           data:{ 
            email : email,
            csId : csId+""
           }
        }
        console.log(csId);
        return await axios.delete(EF_DOMAIN + "/charger/wish/delete", request);
    },
    inQuire : async(email,title,content) => {
        const request = {
            email : email,
            inqTitle : title,
            inqContent : content
           
        }

        return await axios.post(EF_DOMAIN + "/inquires", request);
    } ,

    
    getInQuire : async(email) => {
        try {
            const response = await axios.get(`${EF_DOMAIN}/inquires/${email}`);
            console.log(response.data);
            return response.data;
           
          } catch (error) {
            console.error('Failed to get inquires by email', error);
            return null;
          }
        },

        // 미답변 조회
        getUnAnswered : async() => {
            try {
                const response = await axios.get(EF_DOMAIN+"/inquires/unanswered");
                console.log(response.data);
                return response.data;
            } catch (error) {
                console.error('Failed to get inquires by email', error.message);
                return null;
            }
        },
        //답변보내기
        postAnswer : async(inqNo,answerContent) => {
            const request = {
                inqNo : inqNo,
                answerContent : answerContent,
            }

            try {
                const response = await axios.post(EF_DOMAIN+"/inquires/inquire/update",request);
                console.log(response.data);
                return response.data;
            } catch (error) {
                console.error('Failed to get inquires by email', error.message);
                return null;
            }
        }

};




export default AxiosApi;