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
        return await axios.post(EF_DOMAIN + `/member/session?uuid=${value}`);
    },
    // 로그아웃
    logout : async(value) => {
        return await axios.delete(EF_DOMAIN + `/member/logout?uuid=${value}`);
    }

};

export default AxiosApi;