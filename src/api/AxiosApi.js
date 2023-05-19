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
    }
    
};

export default AxiosApi;