// import { createContext , useState , useEffect } from 'react';

// const AuthContext = createContext();  // 로그인 인증 컨텍스트 생성

// export const AuthProvider = ({ children }) => {   
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState("");
//   const [nickname, setNickname] = useState("");
//   const [gender, setGender] = useState("");
//   const [address, setAddress] = useState("");
//   const [joinDate, setJoinDate] = useState("");
//   const [phoneNum, setPhoneNum] = useState("");
//   const [email, setEmail] = useState("");
//   const [pwd, setPwd] = useState("");



//   useEffect(() => {
//     // 세션 저장소에 저장된 사용자 정보를 로드합니다.
//     const savedUserInfo = JSON.parse(sessionStorage.getItem('userInfo'));
//     if (savedUserInfo) {
//       setIsLoggedIn(true);
//       setUsername(savedUserInfo.username);
//       setNickname(savedUserInfo.nickname);
//       setGender(savedUserInfo.gender);
//       setAddress(savedUserInfo.address);
//     }
//   }, []);


//   const loginUser = () => {
//     setIsLoggedIn(true);
    
//   };

//   const logoutUser = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, loginUser, logoutUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;

import { createContext , useState, useEffect } from 'react';

const AuthContext = createContext();  // 로그인 인증 컨텍스트 생성

export const AuthProvider = ({ children }) => {   
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  useEffect(() => {
    // 세션 저장소에 저장된 사용자 정보를 로드합니다.
    const savedUserInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    if (savedUserInfo) {
      setIsLoggedIn(true);
      setUsername(savedUserInfo.username);
      setNickname(savedUserInfo.nickname);
      setGender(savedUserInfo.gender);
      setAddress(savedUserInfo.address);
      setJoinDate(savedUserInfo.custJoinDate);
      setPhoneNum(savedUserInfo.custPhone);
      setEmail(savedUserInfo.custEmail);
      setPwd(savedUserInfo.custPwd);

    }
  }, []);

  const loginUser = (userInfo) => {
    setIsLoggedIn(true);
    setUsername(userInfo.custNm);
    setNickname(userInfo.custNnm);
    setGender(userInfo.custGend);
    setAddress(userInfo.custAddr);
    setJoinDate(userInfo.custJoinDate);
    setPhoneNum(userInfo.custPhone);
    setEmail(userInfo.custEmail);
    setPwd(userInfo.custPwd);

    // 사용자 정보를 세션 저장소에 저장합니다.
    sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
  };

  const logoutUser = () => {
    setIsLoggedIn(false);
    setUsername("");
    setNickname("");
    setGender("");
    setAddress("");
    setJoinDate("");
    setPhoneNum("");
    setEmail("");
    setPwd("");
    // 사용자 정보를 세션 저장소에서 제거합니다.
    sessionStorage.removeItem('userInfo');
  };

  return (
    <AuthContext.Provider value={{ 
      isLoggedIn, 
      username, 
      nickname, 
      gender, 
      address,
      joinDate,
      phoneNum,
      email,
      pwd, 
      loginUser, 
      logoutUser 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
