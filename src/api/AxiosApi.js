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
            numOfRows : 306,
            addr : address
        };
        return await axios.post(EF_DOMAIN + "/api/list", requset);
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
export default AxiosApi;